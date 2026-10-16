# SenaTrades website

Marketing and community website for **SenaTrades** — forex trading education, market analysis, mentorship and community, founded by Kwashie Senanu Charles Prince.

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · Motion.

> Before public launch, work through **[LAUNCH.md](LAUNCH.md)** — several assets and legal items are still outstanding.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — see "Configuration"
npm run dev                  # http://localhost:3000
```

| Command         | Purpose                         |
| --------------- | ------------------------------- |
| `npm run dev`   | Development server (Turbopack)  |
| `npm run build` | Production build                |
| `npm run start` | Serve the production build      |
| `npm run lint`  | ESLint                          |

Every route is prerendered as fully static HTML.

## Configuration

| Variable                       | Purpose                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Production domain (no trailing slash). Enables canonical URLs and the sitemap link in `robots.txt`.        |
| `NEXT_PUBLIC_CEO_TELEGRAM_URL` | Prince's personal Telegram. While unset, all "Connect with Prince on Telegram" CTAs are hidden.            |

These are inlined at build time — rebuild/redeploy after changing them.

## Project structure

```text
app/                    Routes (/, /about, /founder, /team, /education, /community,
                        /risk-disclosure), 404, sitemap, robots, OG image, icon
components/
  layout/               Header, mobile nav (<dialog>), footer, mobile sticky CTA
  sections/             Homepage sections, page hero, final CTA
  ui/                   Button, SmartLink, Section/Eyebrow/SectionHeading, Reveal,
                        Portrait, Wordmark, social icons, risk notice
  founder/ team/ gallery/ education/ community/
content/                ALL editable content and links (single source of truth)
  site.ts               Brand info, official URLs, legal links, risk notice, logo config
  navigation.ts         Nav items + CTA labels
  founder.ts            Founder bio, photos, timeline
  team.ts               Team members (empty until supplied)
  trade-ideas.ts        Gallery screenshots (empty until supplied)
  education.ts          Methodology, concepts, values, community offerings, FAQ
lib/                    analytics.ts, seo.ts (metadata + JSON-LD), utils.ts
public/assets/          brand/ founder/ team/ trade-ideas/
app/globals.css         Design tokens (colour, type scale, radii, shadows, motion)
```

## Updating content

- **Links** — edit `content/site.ts`. Every CTA and social link reads from there.
- **Logo** — the official mark lives at `public/assets/brand/senatrades-mark.png` and is configured in `brandAssets` (`content/site.ts`). `components/ui/wordmark.tsx` renders it next to the brand name. `app/icon.png`, `app/apple-icon.png` and the share image are built from the same mark.
- **Founder photos** — `public/assets/founder/`, configured in `founder.photos` (`content/founder.ts`) with `width`, `height`, `alt` and an optional `focus` (e.g. `"50% 25%"`) to keep the face in frame when cropped.
- **Team** — append entries to `team` in `content/team.ts`. Profiles appear on `/team`, and a preview appears on the homepage once at least one member exists.
- **Trade ideas** — add screenshots to `public/assets/trade-ideas/` and entries to `content/trade-ideas.ts`. The gallery and full-screen viewer appear automatically; until then the section shows an explanatory panel and the Telegram CTA. Never label an idea as profitable unless the material reliably shows it.

## Design system

- **Hybrid dark / light.** Sections opt in with `.theme-dark` or `.theme-light`, which set semantic tokens (`fg`, `muted`, `line`, `surface`, `accent-text`). Components use only those tokens, so they work on either background.
- **Colour.** Sena Red `#CF1025` is used for CTAs and accents. On dark backgrounds, small red text uses `sena-red-bright` (`#FF4D5E`) to keep WCAG AA contrast.
- **Type.**
  - Barlow Condensed for display headlines.
  - Geist for body text.
  - Geist Mono for labels.
  - Instrument Serif, reserved for quotations and mission statements.
- **Motion.** The hero uses CSS-only entrance animation, so the largest content paint never waits on JavaScript. Scroll reveals use `motion/react` via `LazyMotion` (`domAnimation` features only). `prefers-reduced-motion` is respected throughout.

## Analytics

`lib/analytics.ts` exposes a typed `track()` used on every Telegram CTA, CEO CTA, social link, gallery interaction and key page view (`/founder`, `/community`). Each CTA event carries its `location`. **No provider is connected.** `track()` forwards to `window.dataLayer` (GTM), `window.plausible` or `window.va` (Vercel Analytics) only if one is present. Add a provider (respecting consent requirements) and events will flow without code changes.

## Deployment

Deploys to Vercel with zero configuration. Set the environment variables above in the project settings, then deploy. Any Node.js host that runs `next start` also works.
