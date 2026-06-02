# Portfolio Project Memory

Last updated: 2026-05-12

## Project

- Portfolio website for Lin Han hui.
- Current positioning is shifting from pure portfolio designer toward `Product Manager / Product Designer` for AI and growth-focused C-end SaaS work.
- Identity line used in the site has included `Product Designer ｜ UX/UI Designer ｜ Vibe Coder`; latest homepage direction uses `PRODUCT DESIGNER & PM` and a sharper self-intro.
- Current working directory: `/Users/a6677/Desktop/视频剪辑尝试/website`.
- Main pages and memory files:
  - `index.html`: portfolio homepage.
  - `case-study-aitryon.html`: current practice case detail page.
  - `design.md`: design direction and system notes.
  - `notes.md`: pending assets, decisions, and language-component notes.
  - `assets/resume.md`: Chinese resume source material.
  - `agent-memory/*.md`: old sub-agent notes. These are now merged into this file and should be treated as historical reference, not active workflow.

## Design Preferences

- Overall style should follow a dark editorial / noir portfolio direction.
- Background should use clean deep black and restrained contrast; avoid the earlier grain/frost texture.
- Avoid a visual split where detail pages feel like a different website.
- Typography:
  - Latest homepage system uses `Syne` for display and `IBM Plex Sans` for body/UI.
  - Older memory used `Space Grotesk` + `Inter`; treat that as historical unless the user asks to revert.
  - Current preference remains: reduce title, h2, body, and navigation scale by one step when unsure.
- UI should feel minimal, sharp, and professional, not a generic card-heavy template.
- Avoid excessive white/light containers unless intentionally used inside project screenshots.
- Use fixed-ratio image presentation for consistency, currently `16:9`.

## Homepage Decisions

- Top navigation now prioritizes `Works / Contact` with inline theme/language toggles after the latest redesign; older memory used `Works / Resume / Email`.
- Left project list should use short display titles to avoid awkward wrapping.
- Right preview should show the full project title and a clearer summary.
- Homepage preview media should use a stable `16:9` ratio.
- Footer should not duplicate top navigation links.
- Latest contact section uses a large English-only signature headline: `Say hi! Let's talk ↗`.

## Case Study Decisions

- `View case study` should navigate to a separate detail page, not scroll down within the homepage.
- Detail page should share the same noir visual language as the homepage.
- Current case has been reframed from homepage redesign to `aitryon.art Product Experience Redesign`.
- Add metrics early in the page. Metrics can be horizontally draggable.
- Images should use fixed-ratio cropping for visual rhythm.
- Floating case navigation should be small, proportional, and appear only after scrolling past the hero.
- Active navigation state should update on click and on scroll.
- Content problem to solve later: detail page needs stronger process visuals, better hero cover, and clearer evidence images.
- Current product narrative: from AI try-on tool to AI image/video creation platform, with emphasis on generation entry, SEO content system, JSON-based writing skill, metrics, and future AI Studio.

## User Feedback To Remember

- The user prefers identifying structural and design problems before solving when the direction is uncertain.
- The user strongly notices spacing, weird empty areas, mismatched background colors, and disproportionate type.
- The user wants detail pages and homepage to feel like one coherent system.
- The user wants future language support: Chinese / English component, with content translatable both ways.

## Pending

- Add or link real resume.
- Decide final logo system: `LH` monogram vs full name.
- Language switch component has been implemented with JavaScript, `data-i18n`, and `localStorage` persistence on the homepage and case page.
- Replace current case hero with a better horizontal cover.
- Add process visuals and data evidence to the aitryon case.
- Verify latest scroll-snap, light theme, and bilingual behavior visually across desktop/mobile.

---

## Full Conversation Summary So Far

### Initial Goal

The user wants to design a personal portfolio website. The first clear structure was:

- A brief loading / identity moment first.
- A homepage that displays all works and short project introductions.
- A project detail page entered by clicking `View case study`.
- A `design.md` file to establish visual rules and user journey.
- The user liked the interaction and rhythm of reference sites:
  - `https://www.valerian.studio/?ref=minimal.gallery`
  - `https://www.jorgefilho.design/case-study---pod1um`

The first version was built as a static website inside:

`/Users/a6677/Desktop/视频剪辑尝试/website`

### File Organization

The user asked to put all website-related files into a `website/` folder. Current project files include:

- `index.html`
- `styles.css`
- `script.js`
- `case-study-aitryon.html`
- `case-study.js`
- `design.md`
- `notes.md`
- `PROJECT_MEMORY.md`
- `scripts/update-memory.py`
- `assets/aitryon-before.png`
- `assets/aitryon-after.png`
- `assets/pod1um-case-study.png`

### Identity And Navigation

The user confirmed:

- Name: `Lin Han hui`
- Identity line: `Product Designer ｜ UX/UI Designer ｜ Vibe Coder`

Navigation evolved from:

- `Works / About / Email`

to:

- `Works / Resume / Email`

Reason:

- `About` did not yet point to a meaningful section.
- User agreed `Resume` is more accurate for the second item.

### Typography

The user provided a design system markdown file originally using:

- Headlines: `Newsreader`
- Body/UI: `Manrope`

The user then requested:

- Headings: `Space Grotesk`
- Body and other UI text: `Inter`

This was applied to:

- `/Users/a6677/Desktop/DESIGN (1).md`
- `website/design.md`
- `website/index.html`
- `website/styles.css`

Later feedback:

- The detail page hero title and h2 sizes were too large.
- The whole typographic scale should be one step smaller.
- Body text should also feel less oversized.
- Floating navigation was too large relative to body content.

Current preference:

- When unsure, choose a smaller, calmer typographic scale.
- Use strong typography, but avoid huge poster-like Chinese headings that dominate the case study.

### Loading Animation

The user wanted a loading page inspired by the reference screenshot:

- Name gradually changes from gray to black.
- Counter animates from `00` to `100`.
- It should show the process but not take too long.
- The transition from loading to homepage should move upward, not fade out.

Implemented:

- `Lin Han hui` loader.
- `00-100` counter.
- Upward slide transition.
- Approximate duration around 1-2 seconds.

### Homepage Structure

Initial homepage problems identified by the user:

- Top spacing was too large; on Mac the full project could not be seen.
- Clicking the second project incorrectly scrolled down instead of only changing the right-side content.
- Left project index should align with the right preview area.
- Project title size was too large for content browsing.

Changes made:

- Reduced top spacing.
- Left project list click now only switches the right preview.
- `View case study` is the only element that navigates to detail page.
- Left index and right preview alignment improved.

Later homepage feedback:

- Left project title broke awkwardly, especially `aitryon.art` splitting into `aitryon.ar / t`.
- Homepage preview should use a fixed `16:9` ratio.
- Right preview title also needed adjustment.
- Footer links duplicated top navigation.

Current homepage decisions:

- Left list uses short display titles:
  - `aitryon.art`
  - `Brand Launch`
  - `AI Creative Tool`
- Right preview shows the full project title:
  - `aitryon.art Product Experience Redesign`
- Preview media is fixed `16:9`.
- Footer no longer repeats navigation links.
- Footer only keeps availability and identity line.

### Homepage Interaction

Important user preference:

- Project switching should happen in place.
- Selecting a project should update the right preview content only.
- It should not scroll or open the detail page.
- `View case study` opens a separate detail page.

Current behavior:

- Hover/focus/click on project item updates preview.
- `View case study` opens `case-study-aitryon.html`.

### Detail Page Architecture

The user clarified:

- `View case study` should go to a new detail page.
- Homepage should stay as the project index.
- Long content below homepage should be removed.
- Detail page should follow the spirit of Jorge Filho's case study structure.
- Bottom floating navigation can be inspired by the Awwwards-style nav in the reference.
- Right-side main button should be `Contact me`.
- Logo can temporarily be a simple mark.

Implemented:

- `case-study-aitryon.html` as a separate page.
- Bottom floating nav:
  - `LH`
  - `Overview`
  - `Process`
  - `Solution`
  - `Outcome`
  - `Contact me`
- Active state updates on click and scroll via `case-study.js`.

### Detail Page Style Issues

The user felt the first detail page version was too disconnected from the homepage:

- It used a light background.
- Top nav looked like a different website.
- The overall style did not match `design.md`.

Changes made:

- Detail page returned to the same dark noir visual language as homepage.
- Background uses deep charcoal and subtle grain.
- Top nav was unified with the homepage direction.
- Detail page no longer feels like a separate light article template.

Later detail page issues the user pointed out:

- Hero title was too large.
- h2 headings were too large.
- Body text and floating nav scale were too large.
- Weird empty areas appeared on the left of body text and screenshots.
- Some image wrapper/background areas did not match the page background.

Changes made:

- Reduced hero title scale.
- Reduced h2 scale.
- Reduced body type scale.
- Reduced bottom nav size.
- Image wrappers use transparent or dark backgrounds instead of mismatched light/gray blocks.
- Images use fixed `16:9` cropping for rhythm.

### Detail Page Layout

The user agreed:

- The title width and scale should adapt better across the page.
- Body alignment needed improvement.
- The big empty left side beside paragraphs was strange.
- A metric strip is useful near the top.
- Screenshots should use fixed-ratio cropping.
- Floating nav should only appear after some scrolling and should be smaller.

Implemented:

- Hero title uses a smaller adaptive width and font size.
- Detail sections use a structured two-column reading axis:
  - left: section title
  - right: paragraph/list/table content
- Metrics strip near top:
  - `+83.3%`
  - `+12.8%`
  - `+40%`
  - `~2.4x`
- Metrics strip is horizontally draggable.
- Floating nav appears only after the reader scrolls past the hero area.

### Current Case Study Content

The user provided:

`/Users/a6677/Desktop/视频剪辑尝试/docs/aitryon-homepage-redesign-case-study.md`

This was used as the current practice case study.

Case title:

`aitryon.art 首页改版案例`

Core story:

- From a scattered AI tools showcase page to an AI creation platform emphasizing generation entry and subscription conversion.

Important metrics:

- Visit duration: `18s -> 33s` / `+83.3%`
- Pages per Visit: `1.79 -> 2.02` / `+12.8%`
- Subscription conversion: `0.5% -> 0.7%` / `+40%`
- Monthly net profit: `~$1,250 -> ~$3,000` / `~2.4x`

Content is currently not deeply rewritten. The user explicitly said:

- Do not move deeply into content rewriting yet.
- Focus on structure, layout, visual rhythm, and components first.

### Case Study Assets

The markdown referenced:

- `/Users/a6677/Desktop/before.png`
- `/Users/a6677/Desktop/after.png`

These were copied to:

- `assets/aitryon-before.png`
- `assets/aitryon-after.png`

Current issue:

- These are long screenshots and may not be ideal hero visuals.
- The user wants a markdown note saying some visuals need to be provided later.

This is recorded in `notes.md`.

### Notes / To-Provide Items

`notes.md` records open needs:

- Better horizontal case study hero image.
- Process visuals.
- Data proof screenshots.
- Final logo decision.
- Resume file/link.
- Language switch component.

### Language Component

The user requested:

- Add future support for language component.
- It should allow Chinese or English.

Current note:

- Not implemented yet.
- Needs future component and content strategy.

Possible future strategies:

- Single-page toggle.
- Separate `/zh/` and `/en/` paths.

### Logo

Current temporary logo:

- `LH`

User feedback:

- Final logo should be considered later.
- This decision should be captured in markdown.

Recorded in:

- `notes.md`
- `PROJECT_MEMORY.md`

### Reference Image: Nube / Awwwards

The user later provided:

`/Users/a6677/Public/设计资源.library/images/MOXQ86GNGRROK.info/Nube - Awwwards Nominee.png`

The user referenced this mainly for:

- Smaller floating nav proportions.
- Better title scale restraint.
- More balanced spacing.

Observation recorded:

- The Nube reference is not to copy directly, but to learn the proportional relationship:
  - smaller nav
  - restrained title
  - strong but not overwhelming hierarchy
  - image/page background consistency

### User Working Style

The user often wants:

- First identify what is wrong.
- Let user confirm.
- Then implement.

But when the user gives clear direction, proceed directly.

The user is sensitive to:

- Oversized typography.
- Weird empty space.
- Background color mismatch.
- Interaction that scrolls unexpectedly.
- Page-to-page style inconsistency.
- Repeated navigation/footer content.
- Components that feel too large relative to reading content.

The user appreciates:

- Clear visual systems.
- Strong but controlled editorial typography.
- Cohesive noir/dark portfolio mood.
- Design notes in markdown.
- A durable project memory to avoid token waste and context compression problems.

### Memory Workflow

The user asked for a script to automatically organize the conversation into a same-path markdown file to reduce token use in future Codex sessions.

Implemented:

- `PROJECT_MEMORY.md`
- `scripts/update-memory.py`

Recommended future workflow:

1. At the end of meaningful design iterations, run:

```bash
python3 scripts/update-memory.py \
  --title "Short update title" \
  --summary "What changed" \
  --decisions "What was decided" \
  --todos "What remains"
```

2. At the start of a new Codex conversation, ask Codex to read:

`/Users/a6677/Desktop/视频剪辑尝试/website/PROJECT_MEMORY.md`

This is better than relying on compressed chat history because:

- It is stable and user-editable.
- It preserves preferences and decisions.
- It avoids repeatedly spending tokens on full conversation reconstruction.
- It lets future sessions resume from the project state rather than the chat state.

---

## Session Update - 2026-05-09 10:36

### Typography and Memory Workflow

**Summary**

Reduced case study typography scale, h2 scale, body scale, and floating navigation size. Removed mismatched light/transparent image container background by making image wrappers transparent and aligned with the dark noir page background.

**Decisions**

Use PROJECT_MEMORY.md as the durable project memory for future Codex sessions. Use scripts/update-memory.py to append concise summaries after important iterations.

**Todos / Open Questions**

Next time, read PROJECT_MEMORY.md first before making design changes.

---

## Session Update - 2026-05-09 10:43

### Backfilled Full Conversation History

**Summary**

Backfilled PROJECT_MEMORY.md with the complete compressed conversation history: initial portfolio goal, references, identity, typography, homepage decisions, detail page decisions, aitryon case content, known visual issues, user preferences, and future memory workflow.

**Decisions**

Use PROJECT_MEMORY.md as the first file to read in any future conversation before continuing portfolio design work.

**Todos / Open Questions**

Keep appending concise updates after major changes so future sessions can resume without relying on long chat history.

---

## Session Update - 2026-05-09 11:24

### Refined typography scale

**Summary**

Moved View case study onto the homepage preview image as a hover/focus CTA, made the full preview image clickable, reduced homepage preview title size, and tightened case study typography and layout spacing.

**Decisions**

Update design.md to prefer smaller, more refined typography: case hero titles around 56-72px desktop, compact h2 scale, 15-17px body copy, and a consistent left reading axis with less empty side space.

**Todos / Open Questions**

Review the homepage and case study visually in browser; continue refining detail page hero image and process visuals.

---

## Session Update - 2026-05-09 11:37

### Cleaner case layout and background

**Summary**

Removed the case study hero screenshot from the first viewport, switched the site background to a clean deep black without grain/frost texture, expanded case content and metric rows to use the available page width more naturally, and centered the homepage preview CTA with translucent styling.

**Decisions**

Do not use grainy/frosted background texture. Case detail hero images are optional and should be removed from the first viewport when they are only cropped long screenshots. Avoid large unused right-side gutters in case content.

**Todos / Open Questions**

Visually review the new homepage preview CTA and case detail layout in browser, then continue adding better process visuals later.

---

## Session Update - 2026-05-09 15:57

### Reframed aitryon case as product redesign

**Summary**

Rebuilt the aitryon case study narrative from a homepage redesign into a product experience and growth redesign. Added product context, problem framing, product strategy, experience redesign, SEO content system, before/after comparison, impact tracking, and a future AI Studio placeholder. Copied provided before/after assets into website/assets.

**Decisions**

Case title is now aitryon.art Product Experience Redesign / 从 AI Try-On 工具到 AI 图像视频创作平台. The writing should emphasize product positioning, generation flow, SEO content system, JSON-based writing skill, and business metrics. First-person ownership can be stronger, around 60-70%, while remaining accurate.

**Todos / Open Questions**

Visually review the updated case page; later add a real AI Studio concept image and language switch component.

---

## Session Update - 2026-05-09 16:34

### Chinese case copy and research support

**Summary**

Localized the aitryon case study display copy into Chinese, updated top and floating navigation labels, removed the visible tracking-plan block from the page, added a research evidence note to support the product shift argument, and tightened card styling to avoid clipped text and awkward spacing.

**Decisions**

Keep visible case copy primarily Chinese for now. Use research support for market/user-shift claims rather than one-line assertions. Tracking-plan details are useful for interview answers but should not be a visible module in the portfolio page.

**Todos / Open Questions**

Consider adding formal source links or footnotes for public market data if the case study needs to be reviewed by overseas hiring teams.

---

## Session Update - 2026-05-09 16:48

### Added Chinese research board image

**Summary**

Created a 16:9 Chinese research infographic for the aitryon case study, covering traffic sources, market signals, user intent changes, product opportunities, and the resulting product strategy. Added editable SVG and PNG versions under assets and embedded the PNG in the Product Context section.

**Decisions**

For dense Chinese research content, use deterministic SVG/PNG assets instead of generative images so text stays readable and editable. Keep the PNG in the page and the SVG as source.

**Todos / Open Questions**

Review the research board visually in browser; adjust wording or density if it feels too slide-like or too text-heavy.

---

## Session Update - 2026-05-11 15:55

### Major redesign: About hero, language/theme switching, typography update

**Summary**

Implemented comprehensive portfolio redesign based on huashu-design skill evaluation:
1. Typography: Changed from Inter/Space Grotesk to IBM Plex Sans/DM Serif Display for better brand differentiation
2. About hero section: Added full-screen hero with name + 3-4 sentence intro, PPT-style scroll-snap navigation
3. Language switching: Implemented JavaScript-based EN/中文 toggle with localStorage persistence
4. Theme switching: Added light/dark mode toggle with dvdrod.com-inspired light theme
5. Removed incomplete projects: Temporarily removed "Brand Launch System" and "AI Creative Tool" from project list
6. Email updates: Replaced all hello@example.com placeholders with cxnzjmnxkvrkfmg@gmail.com
7. Semantic fixes: Changed preview title from h1 to h2 for proper SEO structure
8. AI Studio images: Added two concept images (ai-studio-1.png, ai-studio-2.png) to case study section 08
9. Footer enhancement: Added visible email link with hover effect

**Decisions**

- Use IBM Plex Sans as body font (free, more distinctive than Inter)
- Use DM Serif Display as display font (free, adds editorial character)
- About section uses scroll-snap for smooth section transitions
- Language/theme controls fixed in top-right corner with backdrop blur
- Light theme uses inverted color scheme: --ink becomes light, --white becomes dark
- Translation system uses JavaScript object with data-i18n attributes
- Only show completed case studies (aitryon.art) until others are ready
- AI Studio concept images replace placeholder in section 08

**Todos / Open Questions**

- Test scroll-snap behavior across browsers (Safari, Chrome, Firefox)
- Verify light theme readability and contrast ratios
- Consider adding more projects once case studies are complete
- May need to adjust About hero intro copy based on user feedback
- Future: Create English version of aitryon case study page

---

## Session Update - 2026-05-11 16:30

### Full redesign pass: nav alignment, hero tags, contact footer, snap scroll

**Summary**

Big iteration based on user feedback after first redesign:
1. Navigation alignment — moved theme/lang toggles INTO topbar nav (right side, same line as Works/Contact). Removed floating `.theme-lang-controls` block.
2. Hero About section refined:
   - Added kicker label "PRODUCT DESIGNER & PM" above the name
   - Added bottom-right tag cluster: "● AVAILABLE FOR WORK" + "GUANGZHOU, CHINA"
   - Name is locked as English-only "Lin Han hui" (no translation)
   - Intro copy rewritten: shorter, less AI-slop tone ("Designer who ships. I work across research, Figma, and code...")
3. Contact Footer section (new, replaces old footer):
   - Big "Say hi! Let's talk ↗" headline (English-only, no translation)
   - Loader-style gradient sweep hover: text starts dim, on hover sweeps to full white via 820ms cubic-bezier (same easing as loader exit)
   - Bottom row: email + location + copyright
4. Smooth section snap scroll:
   - Replaced CSS scroll-snap with JS-driven wheel/touch handler
   - 820ms easeInOutQuart transition matching loader timing
   - Scrolling one wheel notch moves a full section (hero → works → contact)
   - Anchor links smooth-scroll to corresponding section
5. Font system updated:
   - Display: Syne (Google Fonts, free, geometric editorial)
   - Body: IBM Plex Sans
   - Removed DM Serif Display from active use; kept as fallback
6. Light theme refined: warm off-white (#f5f3ef) background, purple accent (#6b4eff) like dvdrod.com
7. Theme toggle: now shows "LIGHT"/"DARK" text labels instead of emoji icons
8. Translation system expanded:
   - All UI text on index page translatable (nav, hero kicker, tags, footer info)
   - Case study page fully translatable (h2 titles, paragraphs, table cells, captions, floating nav)
   - Locked English: "Lin Han hui" brand, "Say hi! Let's talk ↗" headline

**Decisions**

- Hero name and "Say hi! Let's talk ↗" stay English regardless of language toggle (brand/signature elements)
- Section snap scroll uses easeInOutQuart with 820ms duration, matching loader's cubic-bezier(0.76,0,0.24,1) feel
- wheelLock prevents rapid-fire section skipping (900ms cooldown after each scroll)
- Theme/lang toggles live inline in nav, not as separate floating buttons (cleaner alignment)
- Hero tags positioned absolute bottom-right on desktop, stacked left on mobile
- Contact headline uses background-clip:text with linear-gradient sweep — no JS needed for the hover

**Todos / Open Questions**

- Verify Syne font loads cleanly across browsers
- Test wheel snap behavior with trackpad inertia (may need throttle tuning)
- Confirm light theme purple accent works with brand intent
- Case study lang switcher position — currently inline in case-topbar nav; verify mobile layout

---

## Session Update - 2026-05-12

### Merged Memory And Restored Context

**Summary**

Ran the current memory files in the website workspace and merged the useful context into this main `PROJECT_MEMORY.md` file:

- `PROJECT_MEMORY.md`
- `agent-memory/parent-agent.md`
- `agent-memory/content-assets-agent.md`
- `agent-memory/page-design-agent.md`
- `notes.md`
- `design.md`
- `assets/resume.md`

The old sub-agent split is abandoned for future work. Continue in one thread with a single integrated view of content, design, assets, interaction, and implementation. The `agent-memory/` files can remain on disk as historical notes, but should not drive the workflow unless the user explicitly asks to revive that structure.

**Current Restored Context**

The project is a personal portfolio site for Lin Han hui at `/Users/a6677/Desktop/视频剪辑尝试/website`. The current direction is no longer only “UI/UX designer portfolio”; it is closer to an AI / growth product manager portfolio with strong product design, UI, SEO content, and code collaboration ability.

Current identity facts from `assets/resume.md`:

- Name: 林瀚辉 / Lin Han hui
- Target role: 产品经理（AI / 增长方向）
- Education: 南京工程学院，本科
- Current work: 广州六六柒柒科技有限公司，产品经理，2025.05 至今
- Previous roles: SIANEXX PTE. LTD UI Designer, 江苏粒度科技 UI Designer, 南京工程学院设计工作坊实习设计师
- Contact source in resume: `15895838711@163.com`, phone/WeChat `15895838711`
- Final public contact email confirmed by user on 2026-05-12: `15895838711@163.com`.

Latest implemented website state:

- Homepage has an About hero, Works section, and Contact footer section.
- Only `aitryon.art` is shown as a completed project for now; incomplete placeholder projects were removed.
- Theme switching and language switching are implemented with JavaScript and `localStorage`.
- Latest font direction is `Syne` for display and `IBM Plex Sans` for body/UI.
- Homepage uses JS-driven section snap scroll: hero → works → contact, 820ms easeInOutQuart, with wheel lock.
- Theme/language controls live inline inside the nav, not as a floating control group.
- `Lin Han hui` and `Say hi! Let's talk ↗` stay English-only as brand/signature elements.
- Case study page has bilingual text support and inline language/theme controls.
- AI Studio concept images were added: `assets/ai-studio-1.png` and `assets/ai-studio-2.png`.

Current aitryon story:

- Reframe the case as `aitryon.art Product Experience Redesign`, not just a homepage redesign.
- Core narrative: from an AI try-on tool to an AI image/video creation platform.
- Emphasize product positioning, generation entry, SEO content system, JSON-based writing/content workflow, metrics, and future AI Studio.
- Visible case copy has been Chinese-first recently, but the case page now supports bilingual content.
- Keep first-person ownership reasonably strong while grounding claims in shipped work and evidence.

Important metrics already used:

- Visit duration: `18s -> 33s` / `+83.3%`
- Pages per visit: `1.79 -> 2.02` / `+12.8%`
- Subscription conversion: `0.5% -> 0.7%` / `+40%`
- Monthly net profit: `~$1,250 -> ~$3,000` / `~2.4x`

Resume/source project metrics also mention:

- aitryon page views increased to `60K+`
- conversion doubled in one stage, e.g. `1% -> 2%`
- user stay rate improved to `33%`
- musicmaker.im monthly traffic growth about `20K`
- musicmaker.im current conversion around `3%`

These metrics may conflict or refer to different time windows. Before publishing or interview use, clarify data windows and decide which numbers belong in the portfolio vs resume.

**Merged Findings From Old Sub-Agent Memory**

Content and assets:

- Homepage positioning should be more specific and aligned with AI/growth PM direction.
- The portfolio needs credible, specific, outcome-oriented writing.
- Claims need evidence: data windows, source notes, and proof screenshots if available.
- Aitryon story is strong but should show specific design decisions, not only describe the product change.
- Product background and core problem can be compressed if repetitive.
- Experience redesign can be split into 3-4 concrete decision modules.
- Stronger assets are still needed: horizontal case cover, product strategy/IA visual, generation flow diagram, SEO system diagram, data evidence screenshot, and cropped UI modules.
- `pod1um-case-study.png` is only a reference/placeholder and should not remain as long-term aitryon evidence.

Page design:

- Keep the site as a quiet, sharp studio/archive interface, not a generic card-heavy template.
- The user is sensitive to oversized typography, odd empty space, background mismatches, and page-to-page inconsistency.
- Type should stay restrained, especially Chinese headings and case section titles.
- Case body reading width should be editorial, while large visuals may extend wider.
- Long screenshots need intentional cropping rules.
- Floating case nav should remain small, proportional, and should not cover mobile content.
- `styles.css` may still contain layered older rules and should be cleaned before another serious design pass.

User working style:

- The user often prefers identifying structural/design problems before solving when direction is uncertain.
- When direction is clear, proceed directly.
- Preserve context in markdown to avoid future token loss.
- Keep one coherent system between homepage, case page, resume, and future projects.

**Decisions**

- Do not spawn or rely on sub-agents for the next phase unless the user explicitly re-enables them.
- Treat this file as the single source of memory for future Codex sessions.
- Keep old agent memory files only as archived notes.
- Future work should integrate content, design, and implementation in the current thread.

**Todos / Open Questions**

- Contact email resolved: use `15895838711@163.com` across the site and resume.
- Decide whether the public positioning should say Product Designer, Product Manager, Product Designer & PM, or AI Growth Product Manager.
- Verify latest homepage and case page visually on desktop/mobile, especially snap scrolling, light theme, language switching, and case topbar layout.
- Clean and reorganize `styles.css` before deeper visual iteration.
- Align `design.md` with the latest Syne/IBM Plex Sans system because it still records older Space Grotesk/Inter rules.
- Update `notes.md` because language switching has now been implemented, while asset gaps remain.
- Clarify metric time windows and choose the final metric set for portfolio and resume.
- Add stronger aitryon process/evidence visuals before treating the case as portfolio-ready.

---

## Session Update - 2026-05-12 16:25

### Homepage loader, contact, and scroll behavior pass

**Summary**

Confirmed final public email is 15895838711@163.com. Fixed the loader subtitle overlap by changing the loader to a fixed light identity screen independent of theme and laying out mark/subtitle/count separately. Removed JS-driven full-section wheel/touch snap scrolling from the homepage. Added normal browser scrolling plus IntersectionObserver-based section reveal with lift/mask/soft variants. Reworked the contact footer headline so the large text is visible by default and the hover state moves toward the dvdrod reference: the second line turns orange/accent and gains an underline sweep.

**Decisions**

Do not keep a separate light-theme loader; loader always uses the pale background + black/gray name style from the user reference. Avoid wheel-locked section scrolling on the homepage. Use lightweight IntersectionObserver reveal instead of adding an animation library for now.

**Todos / Open Questions**

User should review the new reveal behavior, contact hover, and loader in the local browser. Next likely step: choose final scroll reveal style among soft, mask, and lift, then tune timing/distance and contact headline proportions.

---

## Session Update - 2026-05-12 16:58

### Unified accent, loader cleanup, and case navigation

**Summary**

Removed the old loader subtitle/text residue and changed Google Fonts loading to display=block to avoid fallback-font flash during hard reload. Added an early head script on index and case pages so data-theme is set from localStorage before CSS loads, preventing theme flash. Unified the site accent color to purple #6b4eff across dark and light modes, removed the previous green and orange accents, and routed hover/button treatments through accent variables. Reworked the case study top navigation to reuse the same topbar/nav-links visual system as the homepage, with fixed glass blur in both themes. Rebuilt the floating case nav to follow the article structure: Context, Problem, Strategy, UX, SEO, Compare, Outcome, Next, Contact.

**Decisions**

Top navigation should be visually identical between homepage and case pages; article-specific navigation belongs in the bottom floating case nav. Main accent color is #6b4eff for both light and dark themes. Loader is now only the name plus count, with no old identity subtitle.

**Todos / Open Questions**

Review hard reload behavior in the browser to confirm no old loader/fallback text flashes. Review the case page in both themes to tune topbar opacity, floating nav labels, and mobile overflow if needed.

---

## Session Update - 2026-05-12 17:20

### Added About Me and CV page

**Summary**

Added a new About Me section after the Works section on the homepage, inspired by the provided reference: large About heading, left-column story copy with highlighted lead phrases, right-column experience timeline, and a View CV button. Renamed the first homepage hero anchor to #home so #about now points to the new About Me section. Added nav-about translations. Created resume.html as a full CV page using the existing case/detail layout system without images, populated from assets/resume.md.

**Decisions**

Homepage order is now Home / Works / About / Contact. CV opens as a separate page at resume.html. Resume page currently uses text-only content and shares the same topbar/theme system as the rest of the site.

**Todos / Open Questions**

Review About section spacing and copy tone in browser. Decide later whether resume.html needs bilingual content, PDF download, or a portrait/visual asset.

---

## Session Update - 2026-05-12 17:56

### Homepage title reveal, global CV nav, and case rail

**Summary**

Added a global CV navigation item across homepage, case study, and resume pages. Added a large Work heading above the selected projects section so Works matches the About section hierarchy. Added a blind-rise title reveal animation for major homepage display text, triggered after the loader or when sections enter the viewport. Replaced the case study bottom floating nav with a right-side case rail for section orientation. Increased the global back-link size and styling. Added data-i18n coverage for the newly added resume page copy and verified all data-i18n keys resolve.

**Decisions**

Global navigation should include Works / About / CV / Contact on desktop. On smaller screens, keep Works / About / CV and hide Contact if space is tight. Future new visible copy must be added with data-i18n and checked in both languages.

**Todos / Open Questions**

Review the blind-rise timing in browser and tune duration/delay if it feels too fast or too theatrical. Review the right-side case rail on desktop; mobile currently hides it.

---

## Session Update - 2026-05-12 18:11

### Resume naming and faster blind reveal

**Summary**

Restored the loader identity tag under the name. Renamed the global CV nav label to Resume across homepage, case study, and resume pages; About CTA now says View full resume / 查看全部履历. Removed unused CV translation keys. Reworked scroll reveal so sections no longer slide/blur in; only major display titles use the blind reveal. Shortened blind reveal timing from 1120ms to 720ms and moved the IntersectionObserver trigger earlier so titles animate before the section content feels fully exposed. Moved the Contact underline inside the title box so it is visible again after clipping.

**Decisions**

Use Resume as the global label, not CV. Keep loader tag visible below the name. Scroll/title entrance should use the blind reveal only, with no old slide/blur reveal.

**Todos / Open Questions**

Review in browser for blind reveal timing and contact underline visibility; fine tune duration if it still feels too slow or too subtle.

---

## Session Update - 2026-05-12 18:34

### Adjusted reveal timing after loader feedback

**Summary**

Adjusted the homepage reveal timing because the anchor/reveal trigger felt too early. Removed the CSS is-ready shortcut that triggered the hero title immediately after loader completion. The hero title now becomes visible from JS about 560ms after the loader starts hiding, so the loader-to-home transition has breathing room. Scroll reveal was made more conservative with threshold 0.16 and rootMargin -18%, so lower sections trigger closer to actual reading position instead of early.

**Decisions**

Do not trigger hero title animation directly from app.is-ready. Keep scroll reveals conservative enough that the user perceives entering the section before the blind title opens.

**Todos / Open Questions**

Review loader-to-home timing in browser; tune the 560ms delay and threshold if it still feels early or late.

---

## Session Update - 2026-05-12 18:49

### Smoother top-down title reveal

**Summary**

Reworked the homepage display-title reveal again after dvdrod-style motion feedback. Removed clip-path animation from the blind reveal and replaced it with an overflow mask plus GPU-friendly translate3d on the inner title span. The reveal direction is now top-to-bottom: title content starts above the mask and drops into place. Section body elements use a separate delayed opacity/translate fade after the display title begins, so supporting content no longer appears in the same blind style. The hero reveal now waits 700ms after the loader begins hiding before starting.

**Decisions**

Major homepage display text should use the top-down blind reveal. Supporting content should fade/lift in after the title and should not use the blind reveal. Avoid clip-path for title motion because it felt choppy.

**Todos / Open Questions**

Visual browser review is still needed for exact rhythm; local Playwright is not installed in this project, so automated screenshots were not captured in this pass.

---

## Session Update - 2026-05-12 18:58

### Contact reveal and scroll restoration fixes

**Summary**

Fixed the Contact/Say hi display title so it uses the same outer-mask blind reveal as the other homepage titles. The contact title wrapper no longer opts out of overflow clipping, while the internal title mask remains visible for hover underline behavior. Increased the blind reveal duration by 30%, from 500ms to 650ms, and adjusted supporting-content delays to match the longer title timing. Added manual scroll restoration and a no-hash homepage pageshow reset so reloads or returns from other pages do not randomly restore the page at the Contact section.

**Decisions**

Homepage refresh/return should land at the top unless an explicit hash is present. Contact headline must share the same top-down blind reveal system as other display titles.

**Todos / Open Questions**

Manually refresh homepage and navigate back from resume/case pages to confirm the browser no longer restores to the Contact section.

---

## Session Update - 2026-05-13

### Case study media sizing

**Summary**

Adjusted the case study image structure after visual review. Kept the first wide narrative image as `.detail-wide-image` because its scale felt right. Added `.detail-contained-image` to later interface screenshots so they sit in the same content column as the body text, fill that text-width container, and crop only vertically when height is too tall. Applied the contained treatment to the platform-after, SEO tool before/after, and AI Studio screenshots.

**Decisions**

Use wide media only for major narrative breaks. Interface screenshots inside the case story should align with the body text column, keep full width within that column, and avoid horizontal cropping.

**Todos / Open Questions**

Review the new screenshot width in the browser; tune the 1080px contained max width if the UI details feel too small.

Follow-up: the first `aitryon-landing-before.png` figure was also moved into `.detail-contained-image` so all case screenshots now share the same body-text-width media treatment.

Follow-up: replaced that first before screenshot with the user-provided `/Users/a6677/Desktop/首页.png`, copied as-is to `assets/aitryon-landing-before-current.png` with no cropping or extra processing.

---

## Session Update - 2026-05-13 Scroll-Scrubbed Homepage Reveal

### Summary

Changed the homepage reveal model from IntersectionObserver one-shot playback to scroll-scrubbed progress for lower homepage sections. The hero still auto-reveals after the loader, but Works, About, and Contact now compute reveal progress from their position in the viewport and write CSS variables for title offset, content opacity, and content lift. This makes the blind title reveal pause/resume with user scrolling instead of completing automatically as soon as a section intersects.

### Decisions

Keep loader/hero as an automatic reveal because there is no user scroll input yet. Use scroll progress for lower sections only. Title reveal now starts much later, as the section reaches about 34vh, and finishes around 16vh; supporting content starts after roughly 78% title progress.

### Todos / Open Questions

Review in the browser for scrub distance and perceived speed. Current target is based on the reference where Work starts revealing only when it is near the lower third of the viewport.

Follow-up correction: the user clarified that scroll should control only the trigger timing, not scrub the animation progress. Replaced scrubbed progress with a one-shot reveal. Initial 34vh trigger was too late; adjusted through 52vh and then to 58vh so the title reveals slightly before the section reaches the viewport middle. The previous automatic blind animation remains intact after trigger.

Follow-up: split the Contact headline reveal into two independent title masks. `Say hi!` reveals first and `Let's talk` follows with a short delay, instead of both lines sharing one mask and triggering together.

Bug fix: the first split attempted to animate the mask wrappers themselves, which made the second line move upward and appear before the first line. Corrected Contact so masks only clip, while `contact-line1` and `contact-line2` animate independently; `Say hi!` now appears first and `Let's talk` follows.

Follow-up: changed Contact headline lines from "same trigger plus delay" to independent scroll-position triggers. Each `.title-mask` now gets its own `is-line-visible` class when that line reaches the reveal trigger line, so `Say hi!` and `Let's talk` reveal separately based on scroll position rather than a fixed delay.

Follow-up: Contact line masks now use their own earlier trigger line at 76vh, while normal homepage sections keep the 58vh trigger. This keeps `Say hi!` and `Let's talk` independent but makes them start earlier.

---

## Session Update - 2026-05-13 16:01

### Taste review and featured Works

**Summary**

Ran the new design-taste-frontend framing as a read-only review, stored follow-up recommendations in BACKLOG.md, and changed the homepage Works section from a one-item project list into a featured case layout. The new Works module pairs case narrative, metrics, and focus areas with a large 16:9 cover entry that can be replaced when the user provides a dedicated cover image.

**Decisions**

For the current one-case stage, Works should behave as a featured case instead of a project switcher. Keep the current aitryon screenshot as a temporary cover placeholder until a stronger 16:9 cover is provided.

**Todos / Open Questions**

Review the featured Works layout with the real cover image; continue later with case evidence visuals, metric source notes, and stronger process modules.

---

## Session Update - 2026-05-13 17:12

### Lime accent and global design system refinement

**Summary**

Switched the site accent from AI-purple to cover-derived acid lime in dark mode and olive lime in light mode. Refined the featured Works case to use AI SaaS metadata, shorter focus labels, a lighter framed cover, and a more reusable component structure. Applied broader taste-review design guidance by reducing oversized section title scales and shifting case/resume containers away from boxed-card styling toward line-based editorial grouping.

**Decisions**

Use accent only for action links, active states, short proof lines, and status dots; avoid glow and large colored surfaces. Prefer line-based grouping, left borders, dividers, and typographic hierarchy over generic cards. Keep boxed containers for comparison tables or genuinely framed tools.

**Todos / Open Questions**

Review the updated dark and light themes visually, especially accent contrast in light mode, case evidence rows, and resume tag density.

---

## Session Update - 2026-05-20

### Project structure cleanup

**Summary**

Reorganized the website workspace into clearer long-term folders: runtime CSS and JS moved to `css/` and `js/`; final images moved into `assets/brand/`, `assets/cases/`, `assets/references/`, and `assets/resume/`; active memory moved into `memory/`; project checks moved into `tools/`; review screenshots and logo working files moved into `working/`; old rollback files are now under `backups/`.

**Decisions**

Keep live HTML pages at the project root because this is still a no-build static website. Use `memory/CURRENT_STATE.md` as the first-read active memory, and use `README.md` as the human-facing project map. Run `node tools/audit-project.mjs` after path or asset changes.

**Todos / Open Questions**

The audit still reports some unreferenced or duplicate-sized assets in `assets/cases/aitryon/` and `assets/references/`; review these separately before deleting any visual evidence.
