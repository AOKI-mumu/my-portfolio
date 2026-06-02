#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const htmlFiles = [
  "index.html",
  "case-study-aitryon.html",
  "case-study-ai-skill-system.html",
  "case-study-portfolio-system.html",
  "resume.html"
];
const cssFiles = ["css/styles.css"];
const assetDir = "assets";
const referencedAssets = new Set();
let failed = false;

function isExternal(value) {
  return /^(https?:|mailto:|tel:|#)/.test(value);
}

function stripFragment(value) {
  return value.split("#")[0];
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");

  for (const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)) {
    const raw = match[1];
    if (!raw || isExternal(raw)) continue;

    const clean = stripFragment(raw);
    if (!clean) continue;

    const target = path.normalize(path.join(path.dirname(file), clean));
    if (clean.startsWith("./assets/")) referencedAssets.add(path.normalize(clean.replace(/^\.\//, "")));

    if (!fs.existsSync(target)) {
      failed = true;
      console.error(`${file}: missing local reference ${raw}`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    if (!/\balt="/.test(tag)) {
      failed = true;
      console.error(`${file}: image missing alt attribute: ${tag}`);
    }
  }
}

for (const file of cssFiles) {
  const css = fs.readFileSync(file, "utf8");

  for (const match of css.matchAll(/url\((["']?)([^"')]+)\1\)/g)) {
    const raw = match[2];
    if (!raw || isExternal(raw) || raw.startsWith("data:")) continue;

    const clean = stripFragment(raw);
    if (!clean) continue;

    const target = path.normalize(path.join(path.dirname(file), clean));
    if (clean.startsWith("./assets/")) referencedAssets.add(path.normalize(clean.replace(/^\.\//, "")));

    if (!fs.existsSync(target)) {
      failed = true;
      console.error(`${file}: missing local reference ${raw}`);
    }
  }
}

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith("."))
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    });
}

if (fs.existsSync(assetDir)) {
  const assets = listFiles(assetDir);

  const unreferenced = assets.filter((asset) => !referencedAssets.has(path.normalize(asset)));
  if (unreferenced.length) {
    console.warn(`Unreferenced assets: ${unreferenced.join(", ")}`);
  }

  const bySize = new Map();
  for (const asset of assets) {
    const stat = fs.statSync(asset);
    if (!stat.isFile()) continue;
    if (!bySize.has(stat.size)) bySize.set(stat.size, []);
    bySize.get(stat.size).push(asset);
  }

  for (const group of bySize.values()) {
    if (group.length > 1) {
      console.warn(`Same-size asset group, check for duplicates: ${group.join(", ")}`);
    }
  }
}

if (failed) process.exit(1);

console.log("link and asset check passed.");
