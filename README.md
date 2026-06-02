# Lin Design Portfolio Website

This is Lin Han hui's local portfolio website. It is a static HTML/CSS/JS site with bilingual copy, light/dark theme support, case-study pages, resume page, local project memory, and maintenance checks.

## Main Pages

- `index.html`: homepage with loader, hero, Works, About, and Contact.
- `case-study-aitryon.html`: aitryon.art product experience redesign case study.
- `case-study-ai-skill-system.html`: local AI skill system case study.
- `case-study-portfolio-system.html`: portfolio-as-product-system case study.
- `resume.html`: text-first resume page.

## Runtime Files

- `css/styles.css`: global visual system, layout, responsive rules, theme styles, and loader styles.
- `js/script.js`: translations, theme/language toggles, homepage project data, loader, and scroll reveal.
- `js/case-study.js`: case-study rail visibility and active section behavior.

## Asset Structure

- `assets/brand/`: official brand assets used by the live site.
- `assets/cases/aitryon/`: aitryon case images.
- `assets/cases/ai-skill-system/`: AI skill system case images.
- `assets/cases/portfolio-system/`: portfolio system case images.
- `assets/references/`: reference or placeholder imagery that should not be treated as final case evidence.
- `assets/resume/`: resume source material.

## Project Memory

- `memory/CURRENT_STATE.md`: read this first before changing the site.
- `memory/DESIGN_RULES.md`: active visual and interaction rules.
- `memory/CONTENT_RULES.md`: copy, bilingual, metric, and case narrative rules.
- `memory/ASSET_RULES.md`: image naming, usage, and audit rules.
- `memory/BACKLOG.md`: active todo list.
- `memory/PROJECT_MEMORY.md`: historical archive. Use only when deeper context is needed.
- `memory/agent-memory/`: historical notes from an older multi-agent workflow.

## Working And Rollback Areas

- `working/screenshots/`: generated review screenshots and visual QA captures.
- `working/logo-vectorization/`: logo tracing and editable source work.
- `drafts/`: draft case copy and unfinished writing.
- `backups/`: manual rollback snapshots.

## Maintenance Checks

Run these from the project root:

```bash
node tools/audit-project.mjs
```

Individual checks:

```bash
node tools/check-i18n.mjs
node tools/check-links-assets.mjs
node tools/check-case-structure.mjs
node tools/check-memory-drift.mjs
```

To append a durable memory update:

```bash
python3 tools/update-memory.py --title "Portfolio Iteration" --summary "..."
```

## Editing Notes

- Keep live page files at the project root.
- Keep final site media inside `assets/`, grouped by purpose and case.
- Keep temporary screenshots and process files inside `working/`.
- When moving assets, update HTML/JS references and run `node tools/check-links-assets.mjs`.
- When adding visible bilingual text, add both English and Chinese translations in `js/script.js`, then run `node tools/check-i18n.mjs`.
