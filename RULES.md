# RULES.md — Project Rules

These rules govern how Claude Code should behave in this project. They take precedence over default Claude Code behavior. Read these at the start of every session before doing any work.

**Last updated:** 2026-05-01 (v7)

---

## A. SCOPE

**A1. Moderate scope.** Each prompt does what it asks for. Don't expand scope. If a prompt says "build the homepage", build the homepage — do not also start refactoring the content layer or adding pages that weren't requested.

**A2. No invented features.** Don't add features Aana didn't ask for, even if they seem like obvious good ideas. Examples of things to never add unprompted: dark mode, language toggles, contact forms, blog index pages, RSS feeds, search, theme switchers, animation toggles. If you have an idea, mention it as a flag in your final summary, do not implement it.

**A3. No invented content.** Don't write copy that wasn't given. The bracketed placeholders (`[ tagline ]`, `[ status one ]`, etc.) are intentional — preserve them exactly. Do not "fill in" a placeholder with plausible content. Do not write a tagline because the spec asks for one. The user will provide real content separately.

**A4. No premature optimization.** Don't lazy-load images that aren't there yet. Don't add bundle splitting before there's a bundle problem. Don't optimize for SEO before content exists. Build it correctly, ship it, then optimize when there's evidence of a problem.

---

## B. CODE ORGANIZATION

**B1. Content separation.** Every visible string and every piece of structured data lives in `/content/*.ts`. Components import from content. Components NEVER hardcode visible strings. If a component contains literal copy, that's a bug.

Exception: small structural strings that aren't user-visible (like internal aria-labels or dev-only debug strings).

**B2. Style discipline.** No inline hex codes. Every color must be a named token in `tailwind.config.ts`. If you need a color that isn't a token, add it to the config first, then use it. Tailwind utility classes only — no inline `style={{ color: '#...' }}` ever.

Exception: when a color is dynamically computed at runtime from data (rare).

**B3. 200-line component limit.** No single component file exceeds 200 lines. If it does, split it. Common splits: heavy data lookups → into `lib/`; subcomponents → into the same `components/cards/` or `components/ui/` folder; complex effects → into a custom hook.

**B4. Naming.** PascalCase for components and types. kebab-case for content files and routes. camelCase for variables and functions. Tailwind tokens are kebab-case (`sage-deep`, not `sageDeep`).

**B5. Import hygiene.** Imports order top to bottom: types → content → lib/utils → components → app/pages. Within each group, alphabetize. No deep relative paths (`../../../`); use the `@/*` alias.

**B6. Component contract consistency.** Components in the same family take the same shape of props. All `<StickyNote>` instances use the same prop interface. All card components accept similarly-shaped data. Do not invent one-off prop shapes.

**B7. Data shape consistency.** Every content file exports a typed array. Every type lives in `types/content.ts`. Adding a new field requires updating the type first, then the data, then any consuming components.

---

## C. PROCESS

**C1. One commit per working change.** Each prompt produces one commit. Each commit message is a one-line description of what was added. Don't squash unrelated changes. Don't commit broken code. Test the build (`npm run build`) before committing.

**C2. Visual verification.** When a prompt produces visual output, the dev server should compile clean and the page should render. After major builds, take a screenshot mentally — does it look like the reference?

**C3. No commented-out code.** If code isn't being used, delete it. If you need to preserve it for reference, put it in a markdown file or a git commit note. Production code is live code.

**C4. No console.logs.** No `console.log`, `console.warn`, or `console.error` left in production code. Use proper error handling. If you need to debug, debug, then remove the debug.

**C5. Honest commit messages.** The commit message describes what changed. Do not write "Cleanup" when you actually changed three things. Do not write "Fix" when you added a new feature.

**C6. Show your work before coding.** Before writing component code for a non-trivial prompt, summarize back: file list, dependency chain, tokens you'll add, decisions you're making, things you'll flag. Wait for confirmation. Don't just start writing.

---

## D. VOICE AND COPY

**D1. No em dashes ever.** Use commas, periods, parentheses, or restructure the sentence. The em dash is banned site-wide and in all generated copy.

**D2. Banned AI-isms.** Never use these phrases anywhere in copy or comments: "delve into", "navigate the landscape", "in today's fast-paced world", "leveraging cutting-edge", "synergy", "elevate", "unlock potential", "dive deep", "robust solution", "seamlessly integrated", "transformative experience", "best-in-class", "state-of-the-art", "innovative approach". If output reads like marketing, rewrite it.

**D3. Short sentences.** When in doubt, cut the sentence in half. The voice is direct. Long sentences are for case studies, not interface copy.

**D4. Sentence case.** All headers, button labels, and body copy are sentence case unless explicitly a mono UI label (where uppercase wide-tracking is the convention). No "Title Case Buttons". No "ALL CAPS HEADINGS" except mono labels.

**D5. First-person on builds and About Me. Third-person on case studies.** Builds are *I made this*. Case studies are *the analysis says this*. Maintain this distinction.

**D6. Placeholder visibility.** Placeholders are written as `[ bracketed text in italics ]` so Aana sees them and knows what to replace. They do not get filled in by Claude Code.

---

## E. AESTHETIC

**E1. v7 references are the floor, not the ceiling.** `DESIGN_REFERENCE.html` and `ENTRY_REFERENCE.html` represent the agreed-on minimum bar. Components should match the reference. If something can be slightly more refined while staying faithful to the reference, do that. Do not deviate from the reference's structure or colors.

**E2. Megan benchmark.** The visual quality target is meganyap.me. The site should feel hand-crafted, editorial, and considered — not template-generated.

**E3. Don't undersell, don't be lazy.** If a card has 4 floating SVG motifs in the reference, render 4 motifs. Don't render 2 to "save time". Don't skip the streak pill. Don't simplify the phone screen.

**E4. Lock palette and fonts.** Do not introduce new colors outside the v7 token set. Do not introduce new fonts. If something looks wrong, the fix is not "add a new color" — it's "use the existing tokens differently".

**E5. Motion has purpose.** Every animation in v7 is justified — sticky notes float to feel alive, hover-isolation directs attention, cursor expansion gives feedback, firefly is delight. Don't add motion that doesn't earn its place.

**E6. Mobile-aware.** The reference works at desktop. Mobile (`max-width: 1024px`) gets a different treatment: no custom cursor, no firefly, single-column layouts, no scrapbook absolute positioning. The references show the mobile fallback CSS — mirror it.

**E7. Floaty, not bouncy.** Motion uses cubic-bezier `(0.45, 0.05, 0.55, 0.95)` with durations 4-7s and 12-25px displacement. Never use `ease-in-out` with short durations and big displacements — that's bouncy and was banned in v7.

**E8. Hover isolation is non-negotiable.** Sibling cards must NOT move when one card is hovered. They desaturate, but they do not transform. This was the bug fix from v5 → v6 and must be preserved.

---

## F. COMMUNICATION

**F1. Direct, no apologies.** When something works, say it works. When it doesn't, say what's wrong. No padding ("I hope this helps!"), no apology spirals.

**F2. Status format.** End every prompt response with three sections: **What was done**, **What was skipped or guessed**, **Next**. Brief. Three to ten lines per section.

**F3. No marketing voice in comments.** Code comments are practical. They explain why, not what. They are not hype.

**F4. Plain language in summaries.** When summarizing what was built, use plain English. Don't say "implemented a robust component architecture" when you mean "built 12 components".

---

## G. DECISIONS

**G1. Ask before any 2+ file change that affects shape.** If a decision changes the shape of multiple files (e.g., adding a new field to a type, restructuring a folder, renaming a component family), confirm with Aana before doing it.

**G2. Decide locally.** If a decision affects only one component or one styling detail, decide and flag it in the summary. Don't ask permission to pick between two equivalent choices.

**G3. Ambiguous → ask once.** If a prompt is ambiguous, ask one round of clarifying questions, then proceed. Don't ask serially.

**G4. Surface tradeoffs.** When you make a decision with tradeoffs, name the tradeoff in the summary. "I chose X over Y because Z. Y would be better if we wanted W."

---

## H. HONESTY

**H1. Flag what was skipped.** If a prompt asked for 8 things and you did 7, say so explicitly. Don't bury it.

**H2. Flag what was guessed.** If a value, content, or behavior wasn't specified and you made a choice, name what you chose. Aana can correct.

**H3. Flag what didn't work.** If something doesn't quite render right, doesn't pass the build, or has a known issue — say so. Do not deliver work pretending it's complete.

**H4. Flag any dependency additions.** If you add a new package to `package.json`, say so explicitly with the reason. The default policy is "no new dependencies without justification."

**H5. Flag design drift.** If you ended up making something that doesn't match the reference — even slightly — say so. Reference deviations require Aana's signoff.

---

## CROSS-CUTTING

**X1. Read before edit.** Always read the file you're about to modify (use the `view` tool) immediately before editing. View output is stale after any successful edit — re-view before another edit on the same file.

**X2. Hierarchy-first fixes.** When something looks wrong, fix at the highest reasonable level. CSS variable wrong → fix the variable. Component styling wrong → fix the component, not the page that uses it. Resist the urge to patch downstream.

**X3. Backward compatibility.** When changing a type or content shape, update all consumers in the same commit. Do not leave half-migrations.

**X4. No partial implementations.** Don't ship a component that's 80% styled and "we'll fix the rest later". Either build it complete or don't build it.

**X5. Run before commit.** `npx tsc --noEmit` and `npm run build` must both pass before commit. If they don't, the commit waits.

---

## V7-SPECIFIC RULES

**V1. The two design references are authoritative.** `DESIGN_REFERENCE.html` for the homepage, `ENTRY_REFERENCE.html` for the entry page. When in doubt, the references win over this file.

**V2. No animation libraries.** No framer-motion, no GSAP, no anime.js, no react-spring. All motion is CSS transitions and keyframes plus targeted JavaScript for cursor follow, dispersion, and click handlers.

**V3. The sticky-note + inner-card pattern is universal.** Every card in every grid uses `<StickyNote>` as the outer wrapper. Don't invent a different pattern for one section.

**V4. Hover isolation must work.** When one card is hovered, ONLY that card moves. Test this manually in every grid before committing.

**V5. Cursor is JavaScript, not pure CSS.** The custom cursor needs JavaScript to follow the mouse smoothly. There's no pure-CSS shortcut here. Use `requestAnimationFrame` with lerp factor `0.18`.

**V6. Hide cursor and firefly on mobile.** `max-width: 1024px` → both are hidden. Native cursor returns. All `[data-cursor]` elements get `cursor: pointer` for tap feedback.

**V7. Two-page architecture.** `/` is the entry page. `/home` is the homepage. There's no shared chrome between them — they're independent pages with independent palettes and behaviors.
