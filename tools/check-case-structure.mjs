#!/usr/bin/env node
import fs from "node:fs";

const file = "case-study-aitryon.html";
const html = fs.readFileSync(file, "utf8");
const sectionIds = new Set([...html.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map((match) => match[1]));
let failed = false;

for (const match of html.matchAll(/data-section="([^"]+)"/g)) {
  const section = match[1];
  if (!sectionIds.has(section)) {
    failed = true;
    console.error(`${file}: case rail points to missing section id "${section}"`);
  }
}

const expected = ["project", "challenge", "process", "solution", "seo", "comparison", "outcome", "next"];
const missing = expected.filter((id) => !sectionIds.has(id));

if (missing.length) {
  failed = true;
  console.error(`${file}: missing expected case sections: ${missing.join(", ")}`);
}

if (failed) process.exit(1);

console.log(`case structure check passed: ${expected.length} expected sections found.`);
