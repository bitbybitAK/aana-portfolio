# Rules — Aana Khanduri Portfolio

These are the rules Claude Code follows when working on this project. Every session starts by reading this file.

If a rule conflicts with a request from Aana, follow the rule and flag the conflict. The point is consistency.

---

## A. SCOPE — what NOT to build

**A1. Moderate scope discipline.** Add small obvious things without asking (favicon, basic meta tags, accessibility attributes, sensible defaults). Confirm anything bigger before building.

**A2. No invented features.** Don't add contact forms, newsletter signups, blog systems, search, dark mode toggles, analytics, or social-share widgets unless explicitly requested.

**A3. No invented content.** Never replace a `[ placeholder ]` with invented text. If content is missing, leave the placeholder visible and flag it.

**A4. No premature optimization.** No CDN setup, no edge functions, no caching strategies, no image CDN integration until the basic site is live and working.

---

## B. CODE ORGANIZATION — where things live

**B1. Content separation.** All user-facing copy lives in `/content/*.ts`. One file per content type:
- `/content/case-studies.ts`
- `/content/analytics-projects.ts`
- `/content/builds.ts`
- `/content/reading-list.ts`
- `/content/field-notes.ts`
- `/content/about.ts`
- `/content/site.ts` (hero text, sidebar, status messages, etc.)

Components import content. Components do not define content.

**B2. Style discipline.** All colors, spacing, fonts, and animations come from `tailwind.config.ts` design tokens. No inline hex codes. No arbitrary Tailwind values like `mt-[37px]`. If a token doesn't exist for what's needed, add it to the config first.

**B3. Component file size limit.** No component file over 200 lines. If a component grows past that, split it. The homepage is a thin shell that composes Sidebar, Hero, CaseStudiesSection, etc. — never one giant file.

**B4. Naming conventions.**
- Components: `PascalCase.tsx` (e.g., `CaseStudyCard.tsx`)
- Content files: `kebab-case.ts` (e.g., `case-studies.ts`)
- Utility functions: `camelCase.ts`
- Types: `PascalCase` interfaces in `/types/*.ts`
- No abbreviations that aren't standard. Write `caseStudy`, not `cs`.

**B5. Import hygiene.** Dependency flow: `types → content → lib/utils → components → app/pages`. No circular imports. No reaching upward (a component can't import from a page). No importing from a downstream module into an upstream one.

**B6. Component contract consistency.** Components have stable, typed prop interfaces. If a component's props change, update every place it's used in the same commit. No silent breaking changes.

**B7. Data shape consistency.** All content follows the TypeScript types in `/types/content.ts`. If a type changes, update the data file and every component reading it in the same commit.

---

## C. PROCESS — how Claude Code works

**C1. Commit after every working change.** Each working change is its own git commit with a clear message describing what changed and why. Never batch unrelated changes. Never commit broken code.

**C2. Visual verification.** After any change that affects rendering, run `npm run dev` (or rely on the running dev server) and confirm the affected page renders correctly before committing. If the change crosses pages (shared component), check every affected page.

**C3. No commented-out code.** Delete unused code. Git history is the archive. Commented blocks accumulate and rot.

**C4. No console.logs in committed code.** Use them while debugging. Remove before committing.

**C5. Honest commit messages.** Commits describe what changed and why, not what the prompt was. Good: `Add bloom hover state to case study cards`. Bad: `Implement user request`.

**C6. Show your work before coding.** Before writing code, briefly state: which files will be created or modified, the dependency chain, and any existing code that needs to stay consistent.

---

## D. VOICE — copy and language

**D1. No em dashes. Ever.** Use commas, periods, parens, or colons. If a sentence needs an em dash, rewrite it.

**D2. No AI-isms.** Banned words and phrases:
- leverage / leveraging / leveraged
- unlock / unlocking
- synergize / synergy
- delve / delving
- "in today's fast-paced world"
- "I'm passionate about..."
- "transformative"
- "game-changer"
- "deep dive"
- "rich tapestry"
- "navigate the landscape"
- "elevate"
- "seamless" (unless literally describing a UX seam)

**D3. Short sentences over long ones.** Prefer two short sentences to one long one. Periods are friends.

**D4. Sentence case headings.** Never title case. Never ALL CAPS. The exceptions are mono labels like `01 — case studies` which use lowercase by convention.

**D5. First person on Aana's voice. Third person on case studies.** "I built this because..." for builds and About. "Cal AI's bottleneck is..." for case studies.

**D6. Placeholder visibility.** All placeholder text uses square brackets and italic styling: `[ tell me what real echo is ]`. Never replace a placeholder silently.

---

## E. AESTHETIC — visual decisions

**E1. The v6 design is the floor, not the ceiling.** The portfolio gets better as we go. Never worse. If a change would make the site feel less alive, less editorial, or less "Aana's site," don't ship it.

**E2. The bar is Megan Yap's site (meganyap.me) and beyond.** When making aesthetic decisions, ask: would this look right next to Megan's site? Better? Worse? Aim for "matches and surpasses." Don't settle for "good enough."

**E3. Don't undersell. Don't be lazy.** When proposing visual changes, propose the more ambitious option, not the safer one. If there's a 10-minute version and a 60-minute version, propose both and explain the tradeoff. Default toward more craft, not less.

**E4. Lock the v6 design language.**
- Color palette: cream `#FAFAF7`, forest `#2D4A3E`, dusty rose `#B5797E`, ink blue `#1D2A44`, mustard `#B8821F`, deeper mustard `#6B4810`. Add new colors only via tokens in `tailwind.config.ts`.
- Fonts: Lora (display, italic), Inter (body), JetBrains Mono (labels), Caveat (handwritten captions). Adding fonts requires explicit approval.
- No generic gradients (rainbow, neon, vaporwave). Existing gradients (rose card, forest card, ochre card, wooden bookshelf) are part of the design language and stay.
- No drop shadows except on polaroids and book covers. No glassmorphism. No glow effects. No neon.

**E5. Motion has a purpose.** Every animation justifies itself by guiding attention, revealing content, or signaling state. Decorative animation that doesn't earn its place gets cut.

**E6. Mobile-aware from day one.** New components are designed to work at 375px width. They don't have to be pixel-perfect on mobile yet, but they shouldn't break.

---

## F. COMMUNICATION — how Claude Code talks to Aana

**F1. Direct, no apologies, no padding.** No "I'd be happy to help!" No "Great question!" No "Of course!" Get to the point.

**F2. State what you did, what you didn't, what's next.** End every response with a short status: completed, skipped, blocked, recommended next step.

**F3. No marketing voice in code comments.** Comments explain why, not what. The code shows what.

**F4. Use plain language for technical things.** Don't say "we'll instantiate a memoized callback" if you mean "we'll cache the click handler."

---

## G. DECISIONS — when to ask vs decide

**G1. Ask before any decision affecting 2+ files or that Aana might disagree with.** This includes:
- Adding a dependency
- Changing a shared component's API
- Restructuring folders
- Renaming exports
- Changing a design token
- Anything affecting the homepage layout

**G2. Decide locally and tell.** For changes inside one file or one component, decide and report what was done. No need to ask.

**G3. When ambiguous, ask once and remember.** If Aana says "use Lora for headings," that's the rule for the rest of the project. Don't ask again.

**G4. Surface tradeoffs.** When asking, present 2-3 options with a recommendation and a one-line rationale. Don't dump open-ended questions.

---

## H. HONESTY — what to flag

**H1. Flag everything skipped.** If a request had three parts and only two are done, say so explicitly. Never claim false completion.

**H2. Flag everything guessed.** If filling in a value, color, or behavior without being told, say "I guessed X — confirm or change."

**H3. Flag everything that didn't work.** If a build fails, a test fails, an animation looks wrong, a font doesn't load — say so. Don't paper over.

**H4. Flag dependency additions.** If a new npm package gets added, name it, explain what it does, and confirm before installing.

**H5. Flag design drift.** If a change pushed the site away from the v6 design language, say so.

---

## Cross-cutting rules

**X1. Read before edit.** Never overwrite or restructure existing files without showing the diff first. If a file exists, read it before editing.

**X2. Hierarchy-first fixes.** Trace bugs to their root cause. Fix at the highest abstraction level that resolves it. Don't patch downstream consumers individually.

**X3. Backward compatibility.** Every change preserves existing function signatures, return types, and export names. If a signature must change, update every caller in the same commit.

**X4. No partial implementations.** No "TODO" stubs, no "implement later" placeholders unless explicitly asked. Every function written is complete and working.

**X5. Run before commit.** Never commit code that hasn't been verified to run. If `npm run dev` fails, fix it before committing.

---

## What "done" looks like

A piece of work is done when:
1. The change works in `npm run dev` without errors or warnings
2. It follows every rule in this file
3. It's been committed with a clear message
4. Anything skipped, guessed, or unclear has been flagged

Anything less is in progress, not done.
