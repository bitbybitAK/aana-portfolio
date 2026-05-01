# Aana Khanduri — Portfolio

This file is the project's standing context. Claude Code reads it at the start of every session.

---

## Owner

**Aana Khanduri** — new graduate with a Master's in CS, working as a product analyst.
- GitHub: github.com/bitbybitAK
- Location: San Francisco
- Target audience: recruiters and hiring managers for product analytics, growth, and decision-science roles

## What this site is

A personal portfolio. Editorial, warm, designed to feel hand-built. The visual concept is "Field Notebook Vol. I" — a curated journal of analyst case studies, data projects, and personal builds.

The benchmark: meganyap.me. Aim to match and surpass.

The thesis: "I read the strategy first, then the data, then I ship something a team can act on."

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Fonts:** Lora (display), Inter (body), JetBrains Mono (labels), Caveat (handwritten captions)
- **Hosting:** Vercel
- **Repo:** github.com/bitbybitAK/aana-portfolio

---

## Design reference

The complete v6 homepage design is in `DESIGN_REFERENCE.html`. Recreate it as Next.js components, preserving all motion, color rooms, hover states, and interactions.

When in doubt about how something should look, behave, or feel — open `DESIGN_REFERENCE.html` and match it.

---

## Color tokens (define in `tailwind.config.ts`)

```
cream:        #FAFAF7   /* page background */
forest:       #2D4A3E   /* primary, case studies room */
forest-light: #4A6B5E
rose:         #B5797E   /* builds room, secondary accent */
rose-deep:    #8A4A4F
ink:          #1D2A44   /* Hopper card, ink blue */
mustard:      #B8821F   /* analytics room */
mustard-deep: #6B4810
border:       #E5E3DD
ink-primary:  #1A1A1A   /* main text */
ink-muted:    #444441   /* secondary text */
ink-subtle:   #888780   /* metadata text */
shelf:        #4A3008   /* wooden bookshelf */
```

---

## Font setup (use `next/font`)

```typescript
import { Lora, Inter, JetBrains_Mono, Caveat } from 'next/font/google';

export const lora = Lora({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-lora' });
export const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter' });
export const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });
export const caveat = Caveat({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-caveat' });
```

Use Lora for all serif display text (replaces Instrument Serif from the design reference).

---

## File structure (target)

```
aana-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    (homepage)
│   ├── work/
│   │   ├── page.tsx                (all case studies index)
│   │   └── [slug]/page.tsx         (deep case study page)
│   ├── builds/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── analytics/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── about/page.tsx
│
├── components/
│   ├── Sidebar.tsx
│   ├── Hero.tsx
│   ├── sections/
│   │   ├── CaseStudiesSection.tsx
│   │   ├── AnalyticsSection.tsx
│   │   ├── BuildsSection.tsx
│   │   ├── ReadingList.tsx
│   │   ├── FieldNotes.tsx
│   │   └── About.tsx
│   ├── cards/
│   │   ├── CaseStudyCard.tsx
│   │   ├── BuildCard.tsx
│   │   ├── AnalyticsCard.tsx
│   │   └── BookCard.tsx
│   └── ui/
│       ├── Polaroid.tsx
│       ├── StatusRotator.tsx
│       └── VisitorCard.tsx
│
├── content/
│   ├── case-studies.ts
│   ├── analytics-projects.ts
│   ├── builds.ts
│   ├── reading-list.ts
│   ├── field-notes.ts
│   ├── about.ts
│   └── site.ts                     (hero text, status messages, etc.)
│
├── types/
│   └── content.ts                  (CaseStudy, Build, Book, Note types)
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── images/                     (photos, screenshots)
│
├── CLAUDE.md
├── RULES.md
├── DESIGN_REFERENCE.html
└── PROJECT_STATE.md
```

---

## Sections (homepage v6)

1. **Hero** — name, italic accent, thesis line, linked-name bio paragraph, three drifting polaroids
2. **Case studies** (forest room) — 3 bloom cards: Cal AI, Hopper, Hinge
3. **Analytics** (ochre room) — 2 cards with self-drawing chart graphics
4. **Builds** (rose room) — 3 cards: Baddie in Progress, Real Echo, weekly digest automation
5. **Reading list** — 4 tilted bouncing books on a wooden shelf, flip on hover
6. **Field notes** (the "door") — 6 hot-take note strips
7. **About** — short version with link to long page

---

## Conventions

- Sidebar is sticky, full height, has rotating status (4 states, 6s cycle)
- All section headers use mono numbered prefix: `01 — case studies`
- All content placeholders are bracketed and italic: `[ tell me what real echo is ]`
- Sentence case throughout. Never title case. Never ALL CAPS.
- No em dashes anywhere in copy.
- One git commit per working change.

---

## Roadmap

**Stage 1 (now):** Scaffold Next.js project, port v6 homepage, deploy to Vercel
**Stage 2:** Deep pages for Cal AI, Baddie in Progress, About
**Stage 3:** Index pages for /work, /analytics, /builds
**Stage 4:** Real content swap (Aana writes the master content doc)
**Stage 5:** Mobile responsive pass
**Stage 6:** Custom domain, SEO, OG previews

Stage 1 is the priority. Don't get ahead of it.

---

## See also

- `RULES.md` — the rules Claude Code follows on every change
- `DESIGN_REFERENCE.html` — the complete v6 homepage design as a single HTML file
- `PROJECT_STATE.md` — current build state, used for resuming work after context loss
