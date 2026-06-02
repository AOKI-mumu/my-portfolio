# Portfolio Website Design Direction

This file records the current active design direction. For full project state, read `CURRENT_STATE.md`.

## Core Positioning

The portfolio should present Lin Han hui as an AI / growth-focused Product Manager and Product Designer with strong UX/UI, SEO content, testing, data review, and code collaboration ability.

Primary audience:

- Hiring managers and design/product leads who need to understand capability quickly.
- Potential collaborators who want evidence of taste, process, product thinking, and shipped impact.

Primary goal:

- Move visitors from first impression to project evidence with minimal friction.

## Current Information Architecture

- `index.html`: loader, hero, Works, About, Contact.
- `case-study-aitryon.html`: aitryon product experience redesign case study.
- `resume.html`: text-first resume page.

Global navigation:

- `Works / About / Resume / Contact`
- Theme and language toggles sit inline with navigation.

## Visual System

Mood:

- Quiet, sharp, dark editorial / noir portfolio.
- Clean deep black and restrained contrast.
- Minimal, professional, and not card-heavy.

Typography:

- Display/title: `Syne`.
- Body/UI: `IBM Plex Sans`.
- Prefer smaller, calmer type when unsure.
- Case hero titles should be restrained.
- Case section headings should stay compact.
- Body copy should stay editorial and readable, usually around `15-17px`.

Color:

- Main accent: acid lime `#d7ff2f` in dark theme and olive lime `#627400` in light theme.
- Accent should stay rare: action links, active states, short proof lines, and status dots only.
- Background should remain clean and deep, without grain or frosted texture.
- Light theme exists as a secondary mode with warm off-white background.

Layout:

- Homepage should support fast project scanning.
- Works list uses short titles; preview uses full title and summary.
- Case pages should use an editorial reading width with a consistent left reading axis.
- Large visuals may go wider than text only when they are major narrative breaks.
- Interface screenshots inside a case should align with the body text column.
- Prefer line-based grouping and typographic hierarchy over boxed cards.
- Keep boxed containers for comparisons, tables, or genuinely framed tools.

Motion:

- Loader is brief and identity-focused.
- Major homepage display titles use top-down blind reveal.
- Supporting content fades/lifts after title reveal.
- Scroll controls reveal trigger timing, not scrubbed animation progress.
- Respect reduced motion.

## Content Direction

Each project should show:

- Context
- Problem
- Strategy
- Key product/design decisions
- Visual evidence
- Outcome or measurable impact
- Next step or learning

For aitryon.art:

- Frame the story as product experience and growth redesign.
- Emphasize product positioning, generation entry, SEO content system, JSON-based copy skill, metrics, and AI Studio.
- Add stronger process/evidence visuals before considering the case portfolio-ready.

## Guardrails

- Do not reintroduce outdated visual systems from older memory.
- Do not let homepage, case page, and resume drift into separate visual languages.
- Do not add visible translatable copy without adding `data-i18n` and both language values.
- Do not rely only on long screenshots when a cropped UI detail, flow, or evidence image would explain the decision better.
