# PROJECT_STATE.md

A live snapshot of where the portfolio project stands. Update at the end of every working session.

**Last updated:** 2026-05-01 (morning, after design phase)

---

## Where we left off

Design phase v7 is complete. Two locked design references live in the repo: `DESIGN_REFERENCE.html` (homepage) and `ENTRY_REFERENCE.html` (entry page). Both are committed.

`CLAUDE.md` and `RULES.md` have been updated to v7 spec.

Ready to write Prompt 3 (homepage component build) for Claude Code to execute.

---

## Build state

### Phase 1 — Foundation
- [x] Claude Code installed and authenticated (ARM64 Node, Homebrew, working)
- [x] Project folder created at `/Users/aanakhanduri/aana-portfolio/`
- [x] Cursor IDE installed
- [x] Git initialized, identity configured (Aana Khanduri / khandduriaana2001@gmail.com)
- [x] Next.js 14 scaffolded with App Router, TypeScript strict, Tailwind, ESLint
- [x] Fonts wired via next/font (Lora, Inter, JetBrains Mono, Caveat)
- [x] Tailwind v6 color tokens initial (will be updated to v7 in Prompt 3)
- [x] Font test page rendering at localhost:3000
- [x] Committed as `a3fd6c5` — Initial scaffold

### Phase 2 — Content layer
- [x] `types/content.ts` created
- [x] All content data files in `/content/`: case-studies, builds, analytics-projects, reading-list, field-notes, about, site
- [x] Bracketed placeholders preserved
- [x] `npm run build` passes clean
- [x] Committed as `6887394` — Add content layer

### Phase 3 — Design (locked)
- [x] v7 grid v6 (homepage) finalized through 6 design iterations
- [x] Entry page v2 finalized
- [x] DESIGN_REFERENCE.html saved in project root (replaces old v6)
- [x] ENTRY_REFERENCE.html saved in project root (new)
- [x] Committed as `ae37e14` — Lock v7 design references
- [x] CLAUDE.md updated to v7 spec
- [x] RULES.md updated to v7 spec
- [x] PROJECT_STATE.md (this file) updated
- [ ] Updated CLAUDE.md, RULES.md, PROJECT_STATE.md committed

### Phase 4 — Homepage build (pending)
- [ ] Prompt 3 written
- [ ] Prompt 3 executed by Claude Code
- [ ] `tailwind.config.ts` updated to v7 pastel palette (replacing v6 saturated colors)
- [ ] Some content files may need updates: builds.ts (remove Real Echo if still present), reading-list.ts (still valid), field-notes.ts (no longer used as section but content stays for `/notes` if Aana decides later), site.ts (ensure 4 status messages and tagline placeholder match the new format), communities.ts (NEW file to be created with 3 placeholder community cards)
- [ ] `app/page.tsx` rewritten as entry page (currently it's the font test page — moves to `/home`)
- [ ] `app/home/page.tsx` created as the homepage
- [ ] All components built per CLAUDE.md file structure
- [ ] StickyNote universal wrapper component
- [ ] Cursor component with cursor-tail behavior
- [ ] Firefly component with bottom-edge path
- [ ] Sidebar, Hero, all section components, all card components
- [ ] `npm run build` passes
- [ ] Committed

### Phase 5 — Entry page route (pending)
- [ ] Prompt 4 written
- [ ] `/` route built per ENTRY_REFERENCE.html
- [ ] Letter dispersion working
- [ ] Sun-through-fog orb working
- [ ] Dust motes + petals working
- [ ] CTA navigation to /home with fade transition
- [ ] Committed

### Phase 6 — Deployment (pending)
- [ ] Repo pushed to GitHub (github.com/bitbybitAK/aana-portfolio)
- [ ] Vercel project linked
- [ ] Deployed to vercel.com URL
- [ ] (Optional, later) Custom domain

### Phase 7 — Real content (Aana's work, post-launch)
- [ ] Real tagline written (replaces sidebar placeholder)
- [ ] Real status messages (4) for sidebar rotator
- [ ] 4 hero photos uploaded
- [ ] Books 3 and 4 chosen with opinions
- [ ] Optional 3rd analytics project written
- [ ] 3 communities populated
- [ ] Cal AI / Hopper / Hinge / Duolingo case study deep pages drafted (`/case-studies/...`)
- [ ] Real screen recordings for Baddie + Weekly digest builds
- [ ] Real video clips sourced for Hinge / Spotify / Sephora cards
- [ ] LinkedIn / GitHub / email URLs swapped from `#` placeholders to real URLs

---

## Critical files and their roles

| File | Role | State |
|---|---|---|
| `DESIGN_REFERENCE.html` | Homepage spec, authoritative | Locked |
| `ENTRY_REFERENCE.html` | Entry page spec, authoritative | Locked |
| `CLAUDE.md` | Project memory for Claude Code | Updated to v7 |
| `RULES.md` | Behavioral rules for Claude Code | Updated to v7 |
| `PROJECT_STATE.md` | Live progress tracking (this file) | Updated to v7 |
| `tailwind.config.ts` | Color tokens, font config | Has v6 tokens, needs Prompt 3 update |
| `app/page.tsx` | Currently font test page | Will become entry page in Prompt 4 |
| `content/*.ts` | Content data layer | Some files may need v7 updates |
| `types/content.ts` | TypeScript types | May need additions for Community type |

---

## Git history

```
ae37e14 (HEAD -> main) Lock v7 design references: homepage and entry page
6887394 Add content layer: types and homepage data files
a3fd6c5 Initial scaffold: Next.js, fonts, color tokens, font test page
```

---

## Known issues / things to watch

- The current `app/page.tsx` is the font test page. Prompt 3 needs to handle the move: either rename it temporarily or carefully replace it.
- `content/builds.ts` may still reference `Real Echo` (it was removed from the design but the content file may need a check).
- `content/field-notes.ts` exists but Field Notes are no longer a homepage section. Decision: keep the file (for a possible future `/notes` route) but unused on homepage.
- `tailwind.config.ts` has v6 saturated colors that need to be replaced with v7 pastel palette.
- `app/globals.css` will need v7 keyframes (floaty-slow, motif-drift, plane-drift, etc.) added.

---

## Next session goal

Write and execute Prompt 3 (homepage component build). When this session ends, Aana should be able to view her real homepage at `localhost:3000/home`, looking like `DESIGN_REFERENCE.html`.
