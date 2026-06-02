#!/usr/bin/env node
import fs from "node:fs";

const activeFiles = [
  "memory/CURRENT_STATE.md",
  "memory/DESIGN_RULES.md",
  "memory/CONTENT_RULES.md",
  "memory/ASSET_RULES.md",
  "memory/BACKLOG.md",
  "memory/design.md",
  "memory/notes.md"
];

const archiveFiles = [
  "memory/PROJECT_MEMORY.md",
  "memory/agent-memory/parent-agent.md",
  "memory/agent-memory/page-design-agent.md",
  "memory/agent-memory/content-assets-agent.md"
];

const includeArchive = process.argv.includes("--include-archive");
const files = [...activeFiles, ...(includeArchive ? archiveFiles : [])].filter((file) => fs.existsSync(file));

const stalePatterns = [
  { pattern: /\bSpace Grotesk\b/i, note: "old display font; current is Syne" },
  { pattern: /\bInter\b/i, note: "old body font; current is IBM Plex Sans" },
  { pattern: /#c9ff5c/i, note: "old green accent; current is #6b4eff" },
  { pattern: /hello@example\.com/i, note: "placeholder email" },
  { pattern: /cxnzjmnxkvrkfmg@gmail\.com/i, note: "old email; current is 15895838711@163.com" },
  { pattern: /\bCV\b/, note: "old nav label; current public label is Resume" },
  { pattern: /language switch component.*not implemented|Not implemented yet/i, note: "language toggle is implemented" },
  { pattern: /second and third projects are placeholders/i, note: "homepage currently shows only one completed project" }
];

let count = 0;

for (const file of files) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    if (/do not reintroduce|avoid restoring older/i.test(line)) return;
    for (const { pattern, note } of stalePatterns) {
      if (pattern.test(line)) {
        count += 1;
        console.warn(`${file}:${index + 1}: ${note}: ${line.trim()}`);
      }
    }
  });
}

if (count) {
  console.warn(`memory drift warnings: ${count}`);
  if (!includeArchive) {
    console.warn("Run with --include-archive to scan PROJECT_MEMORY.md and agent-memory files too.");
  }
} else {
  console.log("memory drift check passed.");
}
