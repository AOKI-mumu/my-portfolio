# Parent Agent Memory

Last updated: 2026-05-09

## Role

This parent agent is the project coordinator for Lin Han hui's portfolio website.

It should:

- Keep the whole portfolio direction coherent.
- Decide when work belongs to content/assets or page design.
- Prevent the two sub-agents from editing the same concern without coordination.
- Summarize important decisions back into project memory when needed.
- Protect existing user work and avoid unrelated rewrites.

## Project Location

`/Users/a6677/Desktop/视频剪辑尝试/website`

## Current Project Shape

Main files:

- `index.html`: homepage and selected works entry.
- `script.js`: homepage project data, preview switching, loader behavior.
- `styles.css`: global styling, homepage styling, case detail styling, responsive rules.
- `case-study-aitryon.html`: current detailed case study.
- `case-study.js`: floating case navigation and active section behavior.
- `design.md`: design direction and visual rules.
- `notes.md`: open content, asset, and language decisions.
- `PROJECT_MEMORY.md`: broader project history and user preferences.

Current available assets:

- `assets/aitryon-before.png`
- `assets/aitryon-after.png`
- `assets/aitryon-landing-before.png`
- `assets/aitryon-platform-after.png`
- `assets/aitryon-tool-before.png`
- `assets/aitryon-tool-after.png`
- `assets/pod1um-case-study.png`

## Active Sub-Agents

There are two intended sub-agent tracks:

1. Content and assets agent
   - Memory file: `agent-memory/content-assets-agent.md`
   - Owns copy, content strategy, case study narrative, resume content, image evidence, captions, and asset planning.

2. Page design agent
   - Memory file: `agent-memory/page-design-agent.md`
   - Owns visual system, layout, CSS cleanup, responsive design, UI modules, and interaction presentation.

## Coordination Rules

- Content/assets agent decides what the page needs to say and what visual evidence is required.
- Page design agent decides how those sections, images, and interactions should be presented.
- Content/assets agent should avoid making broad CSS or layout changes.
- Page design agent should avoid changing case facts, metric numbers, SEO claims, or resume claims.
- If both agents need to touch `case-study-aitryon.html`, content structure should stabilize first, then design should refine presentation.
- If both agents need to touch `script.js`, content/assets owns project data and page design owns preview/loader interaction.
- Keep `PROJECT_MEMORY.md` as the broad historical memory; keep this folder as agent-role memory.

## Recommended Workflow

1. Run content/assets agent first when the structure, story, evidence, resume, or project list is unclear.
2. Ask the user to confirm the content direction.
3. Run page design agent after the modules and assets are known.
4. Verify the final page visually on desktop and mobile.
5. Update the relevant memory files after a meaningful decision or implementation round.

## Current High-Level Findings

- The aitryon case study direction is strong: from AI try-on tool to AI image/video creation platform.
- The evidence layer needs work: stronger cover image, process visuals, SEO system diagram, AI Studio concept visual, and data proof.
- Homepage still has placeholder projects and `script.js` contains outdated project data for aitryon.
- `styles.css` contains old light case-detail rules and newer dark rules layered together, which should be cleaned before serious design iteration.
- The case detail reading width is currently too wide on large screens.
- Homepage and case detail navigation language is mixed.

