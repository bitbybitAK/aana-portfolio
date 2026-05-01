# CLAUDE.md — Project Memory

This is the persistent memory file for Aana Khanduri's portfolio website. Claude Code should read this at the start of every session before doing anything else.

**Last updated:** 2026-05-01 (v7 design phase complete)

---

## Project at a glance

A two-page personal portfolio for **Aana Khanduri** — Master's in CS, working as a product analyst, based in San Francisco. The site exists to demonstrate her thinking about consumer products and analytics to recruiters and hiring managers. GitHub: `bitbybitAK`. Email: `khandduriaana2001@gmail.com`.

The site is **two pages**:

1. **`/` — Entry page.** A pastel dreamscape with cursor-reactive text dispersion, drifting dust motes and petals, a sun-through-fog orb, and a single CTA button. Reference: `ENTRY_REFERENCE.html`.
2. **`/home` — Homepage.** A long scrolling page with a sticky sidebar nav, four content sections (About Me, Builds, Analytics Projects, Case Studies), a placeholder stub at the bottom, and a roaming firefly mascot. Reference: `DESIGN_REFERENCE.html`.

Deep pages for individual case studies (`/case-studies/cal-ai`, etc.) and builds will come later. Not in scope for the initial build.

---

## Design references — the source of truth

There are two locked HTML reference files in the project root. **These are authoritative.** When in doubt, the references win.

- `DESIGN_REFERENCE.html` — the homepage spec (v7 grid v6, locked).
- `ENTRY_REFERENCE.html` — the entry page spec (v2, locked).

If anything in this CLAUDE.md contradicts the references, the references win.

---

## Stack

- **Next.js 14** with App Router
- **TypeScript** strict mode
- **Tailwind CSS** with custom tokens
- **Fonts** loaded via `next/font/google`:
  - **Lora** — display serif (regular + italic)
  - **Inter** — body sans (300, 400, 500, 600)
  - **JetBrains Mono** — labels, mono UI
  - **Caveat** — *unused in v7*. Caveat was removed when we replaced the cursive firefly dialogue with a yellow speech bubble. Keep the import in `app/layout.tsx` only if needed for some future flourish; otherwise it's dormant.

No animation libraries. **No framer-motion, no GSAP, no anime.js.** All motion is CSS keyframes or transitions, plus targeted JavaScript for cursor follow, letter dispersion, scroll-spy, and firefly click handling.

---

## Color tokens (pastel palette, v7)

The deep saturated palette from v6 (`forest`, `dusty-rose`, `ink-blue`, `mustard`) is **gone**. The v7 palette is pastel-anchored.

```ts
// tailwind.config.ts colors
{
  cream:    '#FAFAF7',  // page background, primary anchor
  'cream-2':'#F2EEE3',  // sidebar background, soft surface
  'cream-3':'#ECE6D6',  // nested panels, deeper paper
  paper:    '#FFFFFF',  // card interiors

  ink:      '#1A1A1A',  // primary text
  'ink-2':  '#4A4A47',  // secondary text
  'ink-3':  '#888780',  // muted text, mono labels
  border:   '#E0DCCF',
  'border-soft': '#EDE9DE',

  sage:        '#B8CFB7',  'sage-deep':   '#94B294',  'sage-darker':   '#6E8E72',
  pink:        '#F2C9CD',  'pink-deep':   '#D8A0A6',  'pink-darker':   '#B47C82',
  powder:      '#C8D6E2',  'powder-deep': '#A0B4C5',  'powder-darker': '#708798',
  honey:       '#F0DAA8',  'honey-deep':  '#D4B97E',  'honey-darker':  '#A38B58',
  lilac:       '#DAD0E5',  'lilac-deep':  '#B8A8CC',
  peach:       '#F5D5BC',  'peach-deep':  '#D8AE89',
}
```

Each pastel has a `-deep` variant (for outlines, accents, hover backgrounds) and most have a `-darker` variant (for text contrast within a colored card).

**The cursor is `pink-deep` (`#D8A0A6`) on the homepage.** Expanded pill is `pink` (`#F2C9CD`) with `pink-darker` (`#B47C82`) text.

The entry page uses a **separate cocoa palette** (deeper, warmer) detailed in `ENTRY_REFERENCE.html`. Don't reuse those values on the homepage.

---

## File structure

```
aana-portfolio/
├── app/
│   ├── layout.tsx          (root layout: fonts, html structure)
│   ├── globals.css         (Tailwind directives + global keyframes)
│   ├── page.tsx            (entry page at /)
│   └── home/
│       └── page.tsx        (homepage at /home)
├── components/
│   ├── Sidebar.tsx
│   ├── Cursor.tsx          (cursor-tail with context-aware expansion)
│   ├── Firefly.tsx         (sidebar mascot with bottom-edge path)
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Builds.tsx
│   │   ├── AnalyticsProjects.tsx
│   │   ├── CaseStudies.tsx
│   │   └── PlaceholderStub.tsx
│   ├── cards/
│   │   ├── StickyNote.tsx     (universal wrapper: paper + tilt + isolated hover)
│   │   ├── ScenicCard.tsx     (case studies inner)
│   │   ├── BuildCard.tsx
│   │   ├── ProjectCard.tsx    (analytics)
│   │   ├── CommunityCard.tsx
│   │   └── BookCard.tsx       (hover-flip)
│   └── ui/
│       ├── HeroPhotos.tsx     (scrapbook layout)
│       ├── PhoneFrame.tsx     (stylized phone with screen content)
│       ├── Motif.tsx          (drifting decorative SVG)
│       ├── StatusRotator.tsx  (sidebar bottom rotator)
│       └── LiveClock.tsx      (entry page clock)
├── content/                  (already exists from Prompt 2)
│   ├── case-studies.ts
│   ├── builds.ts
│   ├── analytics-projects.ts
│   ├── reading-list.ts
│   ├── communities.ts        (NEW — to be created in Prompt 3)
│   ├── about.ts
│   └── site.ts
├── types/
│   └── content.ts            (already exists, may need additions for Community)
├── DESIGN_REFERENCE.html     (locked v7 homepage)
├── ENTRY_REFERENCE.html      (locked v7 entry page)
├── CLAUDE.md, RULES.md, PROJECT_STATE.md
└── tailwind.config.ts, package.json, etc.
```

---

## Section order on the homepage

Final and locked.

1. **About Me** — tagline → 4 scrapbook hero photos → "Communities I'm part of" sub-section (3 sticky cards) → "On my reading list" sub-section (4 books).
2. **Builds** — 2 sticky cards (Baddie in Progress, Weekly digest automation), each holding a stylized phone frame.
3. **Analytics Projects** — 3 sticky cards (BOTM recommender, Modeling Epidemics, optional third), smaller, each with title / why / stack / GitHub link.
4. **Case Studies** — 4 sticky cards in 2x2 grid (Cal AI, Hopper, Hinge, Duolingo), each holding a scenic stage with stylized phone + floating motifs. Cards expand on hover to reveal a 2-3 line intro.
5. **Placeholder stub** — small dashed-border block at the bottom labeled "05 — coming soon" for visual rhythm. Holds the space for a future section.

Reading List and Field Notes are **NOT** standalone sections. Reading List is a sub-section inside About Me. Field Notes was removed entirely.

---

## Universal patterns (apply across all card grids)

These patterns appear in 4+ places and must be implemented consistently. The `StickyNote.tsx` component is the universal wrapper.

### Pattern 1 — Sticky note + inner card

Every card in every grid (case studies, builds, analytics, communities) follows this:
- **Outer:** `<StickyNote tilt="t1|t2|t3|t4">` — soft cream-2 paper backing, ~12-14px padding margin visible around the inner content, soft shadow, slight rotation, slow independent float animation.
- **Inner:** the actual card content (`ScenicCard`, `BuildCard`, etc.) — pastel background, content, mounted on the paper backing.

### Pattern 2 — Scrapbook arrangement

Each card has a slight rotation between `-2°` and `+2.5°`. Different cards in the same row use different tilt values (`t1`, `t2`, `t3`, `t4`) so they look hand-placed, not grid-aligned. Each tilt has its own float-keyframe animation with staggered delay so cards never breathe in sync.

### Pattern 3 — Hover isolation (the bug fix from v5)

When the user hovers one card:
- That card straightens (`rotate(0deg)`), lifts (`translateY(-12px) scale(1.012)`), and gains shadow.
- Its float animation pauses.
- It gets `z-index: 5`.
- For case studies specifically, its inner `.scene-expand` reveals 2-3 lines of intro text.
- **Sibling cards in the same row** desaturate to `~0.5` and dim to `0.96 brightness`.
- **No other card moves or expands.** This is critical. The bug in earlier versions was that synchronized float animations made all cards in a row appear to move together. Solution: float lives on the outer `StickyNote`, hover transforms also live there, and each card is fully self-contained.

CSS pattern in `globals.css`:
```css
.sticky-row:hover .sticky:not(:hover) { filter: saturate(0.5) brightness(0.96); }
.sticky:hover { /* straighten, lift, pause float */ }
```

### Pattern 4 — Hover-fade-others on rows

Photos, books, and any row of items where the user might want to focus on one. Hovering one item desaturates the siblings to ~0.55 saturation, ~0.94 brightness. Hovered item keeps full color.

---

## Cursor (signature interaction)

Custom cursor follows the mouse. Default state is a 14px pink-deep dot with soft shadow. When the cursor enters a `[data-cursor]` element, it expands into a context-aware pastel pink pill displaying `data-cursor-text`.

Context-text mapping:
- Case study cards → `view case study`
- Build cards → `view project`
- Analytics project cards → `view code`
- Community cards → `learn more`
- Books → `flip`
- Hero photos → caption text (e.g., `east village`, `mission`)
- Sidebar nav links → `jump`
- Placeholder stub → `coming`
- Firefly → `click me`

The cursor element is a single fixed-position div managed by JavaScript. Movement uses `requestAnimationFrame` with lerp factor `0.18` for smooth follow.

Mobile (`max-width: 1024px`): cursor is hidden, native cursor returns, all `[data-cursor]` elements get `cursor: pointer`.

---

## Firefly mascot

Lives along the **bottom edge of the entire viewport** (full width, low altitude, never overlapping content above). 52×42px SVG with three layers: silhouette body, two translucent wings, glowing yellow-amber abdomen. Floats on a 38-second cubic-bezier path. Six escalating click prompts cycle indefinitely:

1. `I'm so happy you're here.`
2. `this is not a button.`
3. `ooh, baited, you got me.`
4. `okay, now actually stop it.`
5. `you're really committed huh.`
6. `fine. I keep flying.`

Click triggers a small **yellow speech bubble** (`honey` background, `honey-darker` text, `honey-deep` border) positioned dynamically above the firefly's current screen position. Bubble fades out after 4 seconds. Caveat font is **NOT** used.

Mobile: firefly is hidden.

---

## Sidebar

- Background: `cream-2`
- Sticky: `position: sticky; top: 0; height: 100vh; width: 280px`
- Contents top to bottom:
  1. Name in Lora display (`Aana Khanduri`, 32px)
  2. Tagline placeholder: `[ a tagline you'll add — your own ]`, italic Lora, ink-3 color
  3. Nested **Explore panel** (`cream-3` background, rounded 14px, padding) containing:
     - Mono label: `EXPLORE` (uppercase, wide-tracking)
     - Four nav links: 01 About me / 02 Builds / 03 Analytics projects / 04 Case studies
     - Active link uses `honey` background with `honey-darker` number color
     - Hover uses subtle `rgba(0,0,0,0.04)` background
  4. `FIND ME AT` block: email, linkedin, github
  5. Bottom: `currently working on` rotator (cream-2 sub-block) — rotates 4 placeholder messages every 6 seconds with opacity fade transition

The placeholder status messages are exactly:
- `[ status one ]`
- `[ status two ]`
- `[ status three ]`
- `[ status four ]`

Aana will replace these in `content/site.ts` before deploy.

---

## Card-specific scenic content

For the build prompts, the scenic content inside each case study card needs explicit visual specs. The references show all of these — these notes are pointers to remember the *what*.

- **Cal AI:** sage gradient stage. Phone shows: time, "Today", "1,840 cal · scan 3 of 3", two food-card rows (avocado toast, greek salad), a sage-deep "streak unlocked · 3 scans" pill, dark "+ scan meal" CTA. Floating motifs: 4 small SVGs (apple, target circle, grid/list, star) in sage-darker at low opacity.
- **Hopper:** powder-blue gradient stage. Phone shows: time, "SFO → JFK", "price watch · active", two date-card rows ($187 down from $241, $203 stable), a powder-darker "price drop alert" pill, dark "view alert" CTA. Floating motifs: 3 paper plane SVGs sliding across with a `plane-drift` keyframe (linear travel + fade).
- **Hinge:** pink gradient stage. Card has a `video · auto` indicator pill at the top of the phone frame. Phone screen shows two stylized profile cards swiping (CSS animation `hinge-swipe-1` and `hinge-swipe-2` cycling 4.5s). Floating motifs: hearts and question-mark text glyphs in pink-darker. Tagged `compact` and `video` (the video tag indicates "real footage to be swapped in later").
- **Duolingo:** honey gradient stage. Phone shows: time, progress bar (65% honey-deep fill), translation question card, 4 answer options in a 2x2 grid (one marked correct in honey), honey-darker "check" CTA. Floating motifs: A/B answer-block icons in honey-darker.

Cards Hinge and (later) Spotify and Sephora all carry the `video` tag. They'll get real video swapped in later. Cal AI, Hopper, Duolingo stay stylized permanently.

---

## Hero photos (About Me)

Four photos in a scrapbook arrangement with absolute positioning. Sizes 280×340, 320×240, 240×290, 200×200. Rotations -6°, +4°, -3°, +8°. Z-index varies for natural overlap. Each has its own `floaty-slow` animation with a staggered delay.

Currently they're cream-pastel gradient placeholders (sage, powder, peach, honey). Aana will replace with real photos in `content/site.ts` (`polaroids[]` array — naming legacy from v6, keep as-is or rename to `heroPhotos[]`).

Hovering one photo desaturates the others. Caption appears as a dark mono pill at the bottom of the photo on hover.

---

## Reading list (inside About Me)

Four books in a 4-column grid. Each book is a 3D card-flip:
- **Front face:** pastel cover (sage, pink, powder, honey for books 1-4 respectively), with a mono genre tag at top, Lora title, italic author at bottom.
- **Back face:** cream background, italic Lora opinion quote, mono "flip back ↻" hint.

Hover the book → 3D `rotateY(180deg)` flip. Hover-fade-others on the row.

Two books have real content (`Trustworthy Online Controlled Experiments` by Kohavi/Tang/Xu, and `Lean Analytics` by Croll/Yoskovitz) with real opinions. Two are bracketed placeholders Aana will replace.

Eventually books 3 and 4 will use real cover screenshots without the colored backgrounds. Architecture should support either (cover image OR pastel + text).

---

## Entry page (`/`)

Separate page. Different palette (cocoa anchor over warm ivory). Different cursor (cream/peach glow instead of pink). Reference is `ENTRY_REFERENCE.html`.

Key elements:
- Center stack: eyebrow `the field notebook of` / headline `Aana Khanduri` / italic quote `Following quiet curiosities into thoughtful products.` / dot accent / CTA `come on in`
- **Cursor-reactive letter dispersion** on headline and quote: letters within 130px of cursor scatter outward up to 18px with blur up to 1.6px and opacity drop to 0.65, easing back over 850ms when cursor leaves
- CTA button does NOT disperse — it stays solid
- Sun-through-fog orb upper-right (3 layered radial gradients with 7s breathing animation)
- Secondary lavender orb peeking from bottom-left
- 90 dust motes drifting in irregular Brownian patterns
- 7 petals occasionally falling top to bottom
- Footer: live clock + `writing notebook · vol. i` (left), `san francisco / 37.77° N · 122.42° W` (right)
- Click CTA → fade transition to cream + cursor color shift to pink → navigate to `/home`

---

## Voice and content notes

- All copy is sentence case unless it's a JetBrains Mono label (UPPERCASE WITH TRACKING).
- No em dashes anywhere.
- The placeholder format is `[ bracketed text ]` — Aana sees these and knows what to replace.
- All real bio copy is preserved verbatim from `DESIGN_REFERENCE.html`. Do not paraphrase.
- The sidebar "Aana Khanduri" name is in Lora 32px. Don't change the font weight — 400 is correct.
- The case study titles are full sentences ending in periods. They're written as theses, not headlines:
  - `The bottleneck isn't accuracy. It's the third scan.` (Cal AI)
  - `The funnel leaks before users see a price.` (Hopper)
  - `"Engagement" is two metrics in a trench coat.` (Hinge)
  - `Streak isn't a metric, it's a tax.` (Duolingo)

---

## Things explicitly removed from v6

If you see code or styles for any of these in older files, delete:
- Polaroid white frames around photos
- Caveat handwritten font on photo captions or anywhere except possibly dormant
- Wooden bookshelf gradient
- Field Notes section
- "Real Echo" build (it was removed; only Baddie in Progress and Weekly digest)
- Dusty rose / forest / ink-blue / mustard saturated palette
- The "communities section as a separate top-level section" — communities are now a sub-section inside About Me

---

## Build status

- ✅ Prompt 1 (foundation) — committed `a3fd6c5`
- ✅ Prompt 2 (content layer) — committed `6887394`
- ✅ Design phase v7 — references locked, committed `ae37e14`
- ⬜ Prompt 3 (homepage component build) — next
- ⬜ Prompt 4 (entry page route) — after Prompt 3
- ⬜ Prompt 5 (deployment) — after Prompt 4

When Prompt 3 is run, Claude Code should add a fourth commit. Each subsequent prompt produces its own commit.
