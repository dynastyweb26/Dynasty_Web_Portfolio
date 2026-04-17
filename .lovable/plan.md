

## Goal
Convert the uploaded `DynastyWeb_portfolio.html` (a single-file portfolio for Dynasty Web) into the existing React + Vite + Tailwind + TypeScript Lovable project as a fully responsive page on `/`.

## Design system (added to `index.css` + `tailwind.config.ts`)
- Tokens (HSL):
  - `--gold`, `--gold-light`, `--gold-dim`, `--bg` (#0A0A0A), `--surface-1/2/3`, `--text` (#F5F0E8), `--muted` (#888880), border `rgba(gold, 0.12)`.
  - Set `--background` and `--foreground` to dark by default for this page.
- Fonts: load Playfair Display (700/900) and DM Sans (300/400/500) via `<link>` in `index.html`; map `font-display` → Playfair, `font-sans` → DM Sans.
- Custom `fadeUp` keyframe + animation utility.
- Smooth scroll on `html`.

## Asset extraction (one-time, during implementation)
The HTML inlines 10 base64 JPEG images (despite `data:image/png` prefix, payload is JPEG — `/9j/...`). During implementation I'll write a small Node script in `/tmp` to:
1. Read the uploaded HTML.
2. Extract each `<img src="data:image/png;base64,...">` in order.
3. Save them as `.jpg` to `src/assets/`:
   - `logo-nav.jpg`, `crazy-1.jpg`, `crazy-2.jpg`, `crazy-3.jpg`, `vydale-1.jpg`, `vydale-2.jpg`, `vydale-3.jpg`, `vydale-4.jpg`, `logo-footer.jpg` (deduped if identical).

## Component structure (`src/pages/Index.tsx` + small components in `src/components/dynasty/`)
- `Nav` — fixed, blurred, gold border-bottom, logo + links (Work / Services / Contact) + "Get a Quote" CTA. Mobile: hide links.
- `Hero` — badge, big serif headline ("We Build Sites That *Win* Clients"), sub, gold divider, 3 stats. Radial gold glow background. Staggered fadeUp animation.
- `Services` — section tag + title + 6-card grid (`01–06`) with hover surface change.
- `Portfolio` — 2 alternating projects (`Crazy Door`, `Vydale T.C. Projects`):
  - `ProjectCard` component takes `{ tag, name, niche, bullets, palette, images, reverse }`.
  - Auto-rotating screenshot stack (3s interval) using `useEffect` + `useState` + click-to-jump dots.
  - Reverse layout on every other project (CSS grid order swap on `md+`).
- `CTA` — centered headline with italic gold "your", description, mailto button.
- `Footer` — brand + copyright.

## Routing & metadata
- Replace placeholder `Index.tsx` with the new page.
- Update `index.html` `<title>` → "Dynasty Web — Portfolio", description, og tags, font preconnect/links.

## Responsiveness
- Mobile breakpoint (`md`): nav links collapse, projects stack to single column (no reverse), reduced padding, stat gap tightens. Matches original 768px breakpoint.

## Files to create / modify
- modify: `src/index.css` (tokens, fonts class, fadeUp animation, smooth scroll, dark default body)
- modify: `tailwind.config.ts` (add `gold*` colors, font families, fadeUp animation)
- modify: `index.html` (title, meta, Google Fonts links)
- modify: `src/pages/Index.tsx` (replace placeholder with composition)
- create: `src/components/dynasty/Nav.tsx`
- create: `src/components/dynasty/Hero.tsx`
- create: `src/components/dynasty/Services.tsx`
- create: `src/components/dynasty/ProjectCard.tsx`
- create: `src/components/dynasty/Portfolio.tsx`
- create: `src/components/dynasty/CTA.tsx`
- create: `src/components/dynasty/Footer.tsx`
- create: `src/assets/*.jpg` (extracted images, imported as ES modules)

## Out of scope (can be added later)
- Real form handling (currently mailto link, identical to source).
- CMS / dynamic project list.
- Backend (Lovable Cloud) — not needed for a static portfolio.

