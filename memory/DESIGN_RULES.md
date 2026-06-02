# Portfolio Design Rules

Use these rules when changing visual layout, CSS, interaction, or page structure.

## Current Direction

- Build a quiet, sharp studio archive: dark editorial, precise spacing, fast scanning, serious case-reading.
- Prefer restraint. When uncertain, reduce title, section heading, body, and navigation scale by one step.
- Keep homepage, case page, and resume in one coherent system.

## Tokens

- Display/title font: `Syne`.
- Body/UI font: `IBM Plex Sans`.
- Main accent: acid lime `#d7ff2f` in dark theme and olive lime `#627400` in light theme.
- Use accent sparingly for action, active state, short proof lines, and status dots. Do not use glow or large accent backgrounds.
- Dark background: clean deep black, no grain/frost texture.
- Avoid restoring older `Space Grotesk / Inter` rules or green accent `#c9ff5c`.

## Layout

- Homepage: hero, Works, About, Contact.
- Works: left project index uses short display titles; right preview shows full title and summary.
- Homepage preview media should keep a stable fixed ratio.
- Case pages use an editorial reading width. Body copy should not float in a huge wide stage.
- Large media can break wider than body text only when it is a major narrative visual.
- Interface screenshots inside the case story should align with the body text column.

## Typography

- Hero/case titles should feel confident but not poster-sized.
- Case section headings should stay compact and not overpower the body.
- Body text should remain calm, usually around `15-17px` with generous line height.
- Captions, metadata, navigation, and metric labels should be smaller than body copy.

## Components

- Global nav should be visually consistent across homepage, case, and resume.
- Article-specific navigation belongs in the case rail, not the global topbar.
- Metrics should appear early and be easy to scan.
- Cards should be minimal and purposeful. Avoid making the portfolio feel like a generic template.
- Prefer line-based grouping, left borders, dividers, and typographic hierarchy over boxed cards.
- Use boxed containers only for tables, comparisons, modals, or controls where a frame improves comprehension.

## Motion

- Loader is a brief identity moment.
- Major homepage display titles use the top-down blind reveal.
- Supporting content should fade/lift after display title reveal.
- Scroll should control trigger timing for lower sections, not scrub animation progress.
- Respect `prefers-reduced-motion`.
