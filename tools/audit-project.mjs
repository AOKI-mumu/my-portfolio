#!/usr/bin/env node
import { spawnSync } from "node:child_process";

const checks = [
  "tools/check-i18n.mjs",
  "tools/check-links-assets.mjs",
  "tools/check-case-structure.mjs",
  "tools/check-memory-drift.mjs"
];

let failed = false;

for (const check of checks) {
  console.log(`\n> node ${check}`);
  const result = spawnSync(process.execPath, [check], { stdio: "inherit" });
  if (result.status !== 0) failed = true;
}

if (failed) process.exit(1);

console.log("\nproject audit completed.");
