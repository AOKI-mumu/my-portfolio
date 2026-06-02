# Page Design Agent Memory

Last updated: 2026-05-09

## Role

This sub-agent owns the portfolio's visual system, page layout, CSS organization, responsive behavior, UI modules, and interaction presentation.

It should make the website feel like one coherent product and portfolio system.

## Primary Responsibilities

- Clean and organize CSS.
- Maintain the dark editorial / noir portfolio direction.
- Improve homepage and case detail layout.
- Define image module rules.
- Check desktop and mobile presentation.
- Keep typography, spacing, captions, cards, metrics, and navigation consistent.
- Refine interactions such as loader, project preview switching, and floating case navigation.

## Files Usually Owned

- `styles.css`: primary ownership.
- `index.html`: structural layout, navigation, preview and footer markup.
- `case-study-aitryon.html`: visual module structure and section presentation.
- `case-study.js`: floating case navigation behavior.
- `script.js`: loader and homepage preview interaction, not project narrative.
- `design.md`: visual system rules and design direction.
- `agent-memory/page-design-agent.md`: this memory file.

The page design agent should not rewrite core case study claims, metrics, SEO arguments, or resume facts.

## Current Design Direction

The portfolio should feel like a quiet, sharp studio archive:

- Dark editorial / noir visual language.
- Deep black background.
- Restrained contrast.
- Strong but not oversized typography.
- Homepage optimized for fast project scanning.
- Case studies optimized for serious review.
- Minimal, professional, not a generic card-heavy template.

Typography:

- Titles: `Space Grotesk`.
- Body and UI: `Inter`.
- When unsure, reduce type scale rather than making headings poster-sized.

## Current Design Findings

Overall:

- Homepage and case detail now share a dark direction and the same font system.
- The visual system is close, but not fully stable.

Major issue:

- `styles.css` contains old light case detail styles followed by newer dark case detail overrides.
- This makes future edits hard to reason about.
- CSS should be cleaned and reorganized before major visual iteration.

Case detail:

- Content width is too wide on large screens.
- Current rules use large max widths such as `1280px`, `1560px`, and `1920px`.
- Body reading width should be pulled closer to an editorial case study scale.
- Large visuals can still be wider than body text.

Navigation:

- Homepage uses English nav: `Works / Resume / Email`.
- Case detail uses Chinese nav: `作品 / 策略 / SEO 系统 / 联系`.
- Until a language switch exists, navigation language should be made consistent.

Mobile:

- Floating case navigation can become crowded and may cover bottom content.
- Decide whether to shorten labels, keep horizontal scroll, hide some items, or use a compact mobile mode.

Images:

- Most current assets are long screenshots.
- Page design should define how long screenshots are cropped, when images are full width, when before/after images are paired, and how captions align.

## Current Recommended Task List

1. Clean `styles.css` by removing obsolete light case-detail rules and unused old `.case-study` rules.
2. Organize CSS sections:
   - tokens
   - global
   - homepage
   - case detail
   - reusable modules
   - responsive
3. Unify topbar, case topbar, floating nav, metrics, captions, information cards, and buttons.
4. Reset case detail reading scale:
   - body text narrower
   - section headings proportional
   - large images allowed to break wider
5. Define image presentation rules:
   - homepage preview
   - case cover
   - long screenshot crop
   - before/after pair
   - process diagram
   - data evidence image
6. Review responsive layout at desktop, tablet, and mobile.
7. Check loader and preview switching motion.
8. Keep reduced-motion behavior intact.

## Boundaries

Do not own:

- Case study facts.
- Metric numbers.
- SEO claims.
- Resume claims.
- Which exact evidence image is needed for the story.

Those belong to the content/assets agent.

