<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Drona Productions — Design System & Build Guide

Drona Productions is a **complete event management & production company** (Noida). The site must always feel **premium, modern, cinematic and professional**. Read this before adding or editing any UI.

## Brand & Business Facts (source of truth: `lib/data.js`)

- Name: **DRONA PRODUCTIONS** · Tagline: _Complete Event Management & Production_
- Email: `info@dronaproductions.in` · Address: B-36, Sector 99, Noida, Uttar Pradesh
- Partners: Mohit Mudgal, Mansi Goswami
- Socials: Instagram + Facebook (URLs in `COMPANY.socials`)
- Logo: `/public/images/Drona_png.png`
- **Never hardcode business content in pages.** Add/edit it in `lib/data.js` and import. All copy (events, services, artists, portfolio, stats, nav) lives there.

## Color System — strict ratio: ~75% Black · ~15% Grey/White · ~10% Gold

Gold is an **accent only** — use it for logo highlights, buttons, headings/keywords, active states, icons and important details. **Never** flood a section with gold or use gold backgrounds for large areas.

Tailwind v4 theme tokens are defined in `app/globals.css` (`@theme`). Prefer these over raw hex:

- Backgrounds: `bg-ink` (#000), `bg-night` (#0a0a0a), `bg-charcoal`, `bg-surface`, `bg-elevated`
- Borders/dividers: `border-line` (#262626)
- Text: `text-fog` (near-white, headings), `text-mist` (body light), `text-ash` (muted body), `text-slate` (labels)
- Gold: `text-gold`, `text-gold-soft`, `text-gold-bright`, `text-gold-deep`
- Alternate dark sections between `bg-ink` and `bg-night`/`bg-charcoal` (with `border-y border-line`) for rhythm.

## Typography

- Display/headings: `font-display` (Playfair Display, serif) — large, cinematic, tight leading.
- Body/UI: default sans (`font-body`, Inter).
- Section/hero headings: pair a white lead phrase with a gold keyword using `.text-gold-gradient` (e.g. `In-house <span className="text-gold-gradient">production power.</span>`).
- Eyebrows/kickers: use the `.eyebrow` (and `.eyebrow-center`) utility — uppercase, wide tracking, gold, with a gold rule.
- Nav/labels/buttons: uppercase with wide `tracking`.

## Reusable Utilities & Components (reuse before inventing)

Utilities in `globals.css`: `.container-x`, `.text-gold-gradient`, `.bg-gold-gradient`, `.eyebrow`, `.btn` + `.btn-gold`/`.btn-outline`/`.btn-ghost`, `.card`, `.hairline`, `.glow-gold`, `.grain`, `.reveal`, `.animate-shimmer`/`floaty`/`marquee`.

Components in `components/`:

- `Reveal` — scroll-in animation wrapper (IntersectionObserver). Wrap content blocks; stagger with `delay` (`(i % n) * 70–90`). Respects reduced motion.
- `SectionHeading` — eyebrow + display title + gold keyword + description; `align="left"|"center"`.
- `Icon` — maps a string name to a lucide icon. **lucide-react v1 has NO brand icons** (Instagram/Facebook removed) — use `components/SocialIcons.js` for those. Add new icons to `Icon.js`'s map.
- `ServiceCard`, `PageHero`, `CTABand`, `Navbar`, `Footer`, `ManagementShowcase`, `ProductionShowcase`, `PortfolioGrid`, `ContactForm`.

## Layout & Section Patterns

- Every content section: `py-24 md:py-28`, inside `.container-x`.
- Add depth with 1–2 ambient `glow-gold` blobs (`pointer-events-none absolute … glow-gold`) on `relative overflow-hidden` sections. Keep subtle (`opacity-30/50`).
- Cards: use `.card` (dark gradient, `border-line`, lift + gold border/glow on hover).
- **Prefer image-rich "bento" layouts** for service/feature sections (see `ManagementShowcase` / `ProductionShowcase`): interleave cinematic photo tiles (with gradient overlay + gold label + hover zoom `group-hover:scale-110 duration-[900ms]`) among glass icon cards. Compute grid spans so rows fill evenly.
- Hover motion: gold underline sweep, arrow nudge (`group-hover:translate-x-1`), image zoom, card lift. Keep transitions smooth (`duration-300`–`700`, ease-out).

## Imagery

- All images go through `next/image`. Remote images are Unsplash, allowlisted in `next.config.mjs` (`images.remotePatterns`).
- Use the `IMAGES` map + `img(id)` helper in `lib/data.js`. **Verify any new Unsplash ID returns 200** before using (dead IDs render broken). Provide `alt`, `sizes`, and `fill` (or width/height).
- Always place a dark gradient over photos behind text (`bg-gradient-to-t from-ink …`) for contrast/legibility.
- Replace stock imagery with the client's real event photos/videos when provided (edit `IMAGES`).

## Content Architecture Rules (from the brief — do not violate)

- **Event types and Production services are separate.** Each event category page (`/events/[slug]`) explains only its **event-specific management capability**. Equipment/technical/production details are explained **once** in `/production` — never duplicated on event pages. Link event pages to Production for gear.
- Keep the three service pillars distinct: **Event Management** (planning/coordination/execution), **Production & Technical** (staging/sound/light/LED/rigging/infra), **Artist Management** (talent booking & coordination).
- Navigation order (`NAV`): HOME · EVENTS · EVENT MANAGEMENT · PRODUCTION · ARTIST MANAGEMENT · PORTFOLIO · ABOUT · CONTACT.
- Contact/quote form fields: Name · Phone · Email · Event Type · Event Date · Location · Requirement.

## Quality Gates (always before finishing)

1. Run `npm run lint` and `npm run build` — both must pass. Fix all lint errors (e.g. no `setState` synchronously in effects).
2. Fully responsive & mobile-first; test the mobile nav overlay.
3. Accessible: `alt` on images, `aria-label` on icon-only buttons/links, keyboard-focusable.
4. Respect the color ratio and reuse tokens/components. No inline hex when a token exists.
5. Server Components by default; add `"use client"` only when interactivity/hooks are needed.
