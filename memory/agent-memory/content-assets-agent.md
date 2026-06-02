# Content And Assets Agent Memory

Last updated: 2026-05-09

## Role

This sub-agent owns portfolio content, storytelling, evidence, image planning, captions, project data, resume content, and future case study material.

It is not limited to the current aitryon case study. It should also support:

- Homepage positioning.
- Project list strategy.
- Future case studies.
- Resume content and structure.
- Bilingual content planning.
- Captions, metrics explanation, and evidence framing.
- Asset inventory and image requirements.

## Primary Responsibilities

- Decide what each page or section should say.
- Make the portfolio sound credible, specific, and outcome-oriented.
- Keep claims grounded in available evidence.
- Identify missing images, screenshots, diagrams, or data proof.
- Write or revise project summaries, case study modules, resume bullets, and captions.
- Maintain a clean content model for future projects.

## Files Usually Owned

- `script.js`: project data, titles, summaries, case metadata, and placeholder cleanup.
- `case-study-aitryon.html`: case narrative, section copy, captions, metrics explanation.
- `notes.md`: content gaps, asset gaps, language decisions.
- `PROJECT_MEMORY.md`: durable project history when content direction changes.
- `agent-memory/content-assets-agent.md`: this memory file.
- `assets/`: image inventory and naming recommendations.

The content/assets agent may propose HTML structure changes, but should avoid visual styling changes in `styles.css` unless explicitly asked.

## Current Content Findings

Homepage:

- The homepage structure is clean and works for quick portfolio scanning.
- The identity line `Product Designer ｜ UX/UI Designer ｜ Vibe Coder` can stay, but needs a more specific positioning sentence.
- `Email` still uses `hello@example.com`; it needs the real contact address.
- `Resume` points to `#resume`, but no resume section or resume file exists yet.
- The second and third projects are placeholders and both link to the aitryon case.
- `script.js` contains outdated aitryon detail fields about coach, athlete, and team workflows. These do not match the current aitryon story and should be rewritten.

Aitryon case study:

- The main story is strong: from a vertical AI try-on tool to an AI image/video creation platform.
- The current structure is clear:
  - Overview
  - Product background
  - Core problem
  - Product strategy
  - Experience redesign
  - SEO content system
  - Before/after comparison
  - Results
  - Next step: AI Studio
- The story should show more specific design decisions, not only describe the product change.
- Product background and core problem repeat some of the same ideas and should be compressed.
- External trend references should either include sources or be framed as broader market observations.
- Metrics need a clear data window and source note.

## Current Asset Findings

Existing assets:

- `aitryon-landing-before.png`: useful for old homepage / old landing page.
- `aitryon-platform-after.png`: useful for redesigned platform homepage.
- `aitryon-tool-before.png`: useful for old SEO tool page.
- `aitryon-tool-after.png`: useful for updated SEO tool page.
- `aitryon-before.png`: appears duplicative with `aitryon-landing-before.png`.
- `aitryon-after.png`: appears duplicative with `aitryon-platform-after.png`.
- `pod1um-case-study.png`: not related to aitryon and should not remain as a long-term placeholder for this project.

Missing or weak assets:

- Portfolio homepage horizontal cover image.
- Strong case study cover image.
- Product strategy or information architecture visual.
- Generation flow diagram: homepage input, login, credits, tool page, result, history.
- SEO system diagram: homepage, model pages, tool pages, articles, FAQ, internal links.
- AI Studio concept visual or low-fidelity workflow.
- Data evidence screenshot or metric source note.
- Key cropped UI modules instead of only long screenshots.

## Future Content Scope

This agent should handle resume work too.

Resume responsibilities may include:

- Creating a resume section or separate resume page.
- Turning project work into concise resume bullets.
- Matching resume claims with portfolio evidence.
- Keeping role labels consistent across homepage, case studies, and resume.
- Preparing Chinese and English resume versions if needed.

## Current Recommended Task List

1. Decide whether homepage should show only aitryon for now or keep placeholder projects as `Coming soon`.
2. Rewrite `script.js` project data so aitryon matches the current AI creation platform story.
3. Add a specific homepage positioning sentence.
4. Replace placeholder email and decide real resume destination.
5. Compress duplicated product-background/problem copy in `case-study-aitryon.html`.
6. Split experience redesign into 3-4 design decision modules.
7. Add data-source language for metrics.
8. Define exact image needs for each case section.
9. Rename or mark duplicate assets.
10. Draft resume content when the user is ready.

## Boundaries

Do not own:

- CSS system cleanup.
- Responsive layout.
- Floating nav behavior.
- Visual module implementation.
- Typography scale and spacing decisions.

Those belong to the page design agent.

