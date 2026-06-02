#!/usr/bin/env node
import fs from "node:fs";
import vm from "node:vm";

const htmlFiles = [
  "index.html",
  "case-study-aitryon.html",
  "case-study-ai-skill-system.html",
  "case-study-portfolio-system.html",
  "resume.html"
];
const script = fs.readFileSync("js/script.js", "utf8");
const end = script.indexOf("const loader =");

if (end === -1) {
  console.error("Could not find translation boundary before runtime code.");
  process.exit(1);
}

const sandbox = {
  document: {
    querySelector: () => null,
    querySelectorAll: () => [],
    documentElement: { dataset: {} }
  },
  window: { history: {} },
  localStorage: { getItem: () => null, setItem: () => null },
  console
};

vm.createContext(sandbox);
vm.runInContext(`${script.slice(0, end)}\nthis.translations = translations;`, sandbox);

const used = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/data-i18n="([^"]+)"/g)) {
    const key = match[1];
    if (!used.has(key)) used.set(key, []);
    used.get(key).push(file);
  }
}

let failed = false;
const languages = Object.keys(sandbox.translations);

for (const lang of languages) {
  const table = sandbox.translations[lang];
  const missing = [...used.keys()].filter((key) => !(key in table));
  const unused = Object.keys(table).filter((key) => !used.has(key));

  if (missing.length) {
    failed = true;
    console.error(`[${lang}] Missing used keys: ${missing.join(", ")}`);
  }

  if (unused.length) {
    console.warn(`[${lang}] Unused keys: ${unused.join(", ")}`);
  }
}

if (languages.includes("en") && languages.includes("zh")) {
  const enOnly = Object.keys(sandbox.translations.en).filter((key) => !(key in sandbox.translations.zh));
  const zhOnly = Object.keys(sandbox.translations.zh).filter((key) => !(key in sandbox.translations.en));

  if (enOnly.length || zhOnly.length) {
    failed = true;
    if (enOnly.length) console.error(`Keys only in en: ${enOnly.join(", ")}`);
    if (zhOnly.length) console.error(`Keys only in zh: ${zhOnly.join(", ")}`);
  }
}

if (failed) process.exit(1);

console.log(`i18n check passed: ${used.size} used keys across ${languages.join(", ")}.`);
