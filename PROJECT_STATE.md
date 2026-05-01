# Project State — Aana Khanduri Portfolio

**Last updated:** [ update this date when you edit the file ]
**Maintained by:** Aana (with help from Claude in chat)

This file is the recovery doc. If you start a new chat with Claude (in claude.ai or Claude Code) and need to bring it up to speed, upload:
1. This file (`PROJECT_STATE.md`)
2. `CLAUDE.md`
3. `RULES.md`
4. `DESIGN_REFERENCE.html`

That's enough for any Claude session to fully understand the project in 30 seconds.

---

## The 30-second summary

Aana Khanduri is building a portfolio website to showcase her product analytics work, data projects, and personal builds. The visual concept is "Field Notebook Vol. I." The benchmark is meganyap.me. The goal is to deploy a live version, then iterate on real content and UX.

Stack: Next.js 14, TypeScript, Tailwind, Vercel.

The complete v6 homepage design exists as a working HTML mockup in `DESIGN_REFERENCE.html`. The current work is porting that mockup into a real Next.js codebase.

---

## Current build state

- [ ] Claude Code installed and authenticated
- [ ] Project folder created (`aana-portfolio/`)
- [ ] `CLAUDE.md`, `RULES.md`, `DESIGN_REFERENCE.html`, `PROJECT_STATE.md` saved in folder
- [ ] Next.js 14 scaffold created
- [ ] Fonts wired (Lora, Inter, JetBrains Mono, Caveat)
- [ ] Tailwind config with color tokens
- [ ] Hello-world dev server runs locally
- [ ] Homepage components built (Sidebar, Hero, etc.)
- [ ] Homepage matches v6 design reference
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel (live at *.vercel.app)
- [ ] Custom domain (aanakhanduri.com or similar) — defer until Stage 6

Update this checklist as you go. Mark `[x]` when done.

---

## Where we left off

[ Write a 2-3 sentence note here every time you stop work. Examples below. ]

Example 1:
> Just finished scaffolding the Next.js project. Fonts and Tailwind work. Stuck on the sidebar — the rotating status doesn't update. Going to debug tomorrow.

Example 2:
> Homepage is fully ported and matches the v6 design. Deployed to Vercel. Live at aana-portfolio.vercel.app. Next: build the Cal AI deep case study page.

Example 3:
> Aana sent the real Cal AI numbers from her writeup. Need to swap them into /content/case-studies.ts and update the deep page. The number for D30 retention is 64% above threshold, 11% below.

---

## Open questions / blockers

[ List anything that's blocking progress. Delete when resolved. ]

- [ ] Need real photo for hero polaroid (currently a forest-green gradient placeholder)
- [ ] Need to know what Real Echo actually is
- [ ] Need real Cal AI numbers to swap into placeholder text
- [ ] Need actual book covers + opinions for reading list
- [ ] Need to decide: does field notes section get a deep `/field-notes` page, or stay as-is?

---

## Recent decisions

[ Log each meaningful decision with a date. Newest at top. ]

| Date | Decision |
|------|----------|
| [ today's date ] | Locked v6 as the visual baseline. Lora as the serif. 16-rule rule book accepted. |
| [ date ] | Demoted Baddie in Progress from build headliner to one of several builds. Real Echo and a weekly digest are the others. |
| [ date ] | Locked the seven Megan-inspired elements: reactive sidebar, hero with polaroids, blooming project cards, color rooms, hidden door section, textured backgrounds, tilted books. |

---

## Voice notes

How Aana writes:
- Short sentences. Periods are friends.
- Direct, no hedging, no filler.
- First person on builds and About. Third person on case studies.
- No em dashes. Use commas, periods, parens, or colons.
- No AI-isms (leverage, unlock, synergize, deep dive, etc).

When Claude writes for Aana, it should feel like a smart friend wrote it, not a marketing intern.

---

## Master content doc

Aana is filling in `portfolio_master_content.docx` (sent earlier). When she sends sections back, Claude swaps the placeholder content for real content, page by page.

Highest priority sections in the master doc:
1. Voice & style (section 02)
2. Builds list (section 05)
3. Cal AI numbers (section 03)

---

## Files in the kit

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Project memory. Stack, color tokens, file structure, conventions. |
| `RULES.md` | The 8-category rule book. Rules Claude Code follows on every change. |
| `DESIGN_REFERENCE.html` | The complete v6 homepage as a working HTML mockup. The visual source of truth. |
| `PROJECT_STATE.md` | This file. Where we are, what's open, where we left off. |
| `portfolio_master_content.docx` | Aana's content fill-in doc. Real text and numbers go here, then into `/content/*.ts`. |

---

## How to resume after context loss

1. Open a new chat with Claude (claude.ai or Claude Code)
2. Upload (or paste) all four kit files: this one + CLAUDE.md + RULES.md + DESIGN_REFERENCE.html
3. Say: "Read these four files. I'm Aana, building a portfolio. Where I left off is in PROJECT_STATE.md."
4. Claude reads, summarizes back what it understands, and you correct any gaps.
5. Continue from where you left off.

This should take 60-90 seconds to get a fresh Claude fully up to speed.
