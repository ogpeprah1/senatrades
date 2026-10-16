# Launch checklist

Items that must be resolved before the site goes public. Nothing in this list has been fabricated on the site — each one is either hidden or shown as a clearly marked placeholder until it is supplied.

## Assets still needed

- [x] **Logo mark**: the supplied transparent symbol is used in the header, footer, mobile menu, favicon, Apple touch icon and share image. Its pixels are unchanged; on dark backgrounds it sits on a soft-white tile.
- [ ] **Full logo lockup**: a transparent export (ideally SVG) of the symbol plus the "Sena Trades" wordmark. The only supplied lockup is a 640px JPG on a light background, so the brand name next to the mark is currently typeset.
- [x] **Reversed logo for dark backgrounds**: created at the brand owner's request from the official mark (black strokes → white, red untouched): `public/assets/brand/senatrades-mark-reversed.png`. Replace it with an official export if one exists.
- [x] **CEO photographs**: two supplied photos are integrated. The colour portrait is used wherever the founder portrait appears; the black-and-white portrait is on `/founder`. Photographer watermarks are retained. Consider crediting the photographer.
- [x] **Team**: Prince, Nana Ama Akosah, Reynolds Dagbui and Nikoi Samuel Kotey, all with photos, shown on the homepage and `/team`.
- [x] **Trade-idea screenshots**: nine charts are in the gallery (six on the homepage, all nine on `/education`). Status labels such as "Target reached" are used only where the screenshot visibly shows price trading through the marked target. Please confirm the descriptions.
- [ ] **Testimonials**: confirm each person is happy to be quoted publicly under the name shown.
- [ ] **Subscriber count**: `community.subscribers` in `content/site.ts` is shown as "1,100+" in the community stats only (not in the hero). Keep it as an honest floor and update it as the channel grows.
- [ ] **Founder biography document.** The founder page uses only facts given in the brief. Once the full biography arrives, review the founder page against it and confirm the chronology and credentials.

## Links and configuration

- [ ] **Prince's personal Telegram URL**: set `NEXT_PUBLIC_CEO_TELEGRAM_URL`. All "Connect with Prince on Telegram" CTAs stay hidden until it is set.
- [ ] **Production domain**: set `NEXT_PUBLIC_SITE_URL` to enable canonical URLs, absolute Open Graph URLs and the sitemap reference in `robots.txt`.
- [x] **Contact email**: senatradesadmin@gmail.com, shown in the footer and the Organization structured data.
- [ ] **Analytics provider** (GTM, Plausible, Vercel Analytics, etc.) plus a consent approach appropriate to your audience. Event hooks are already in place.

## Legal (requires professional review)

- [ ] **Risk Disclosure** (`/risk-disclosure`) uses the preliminary wording from the brief plus general statements. Have it reviewed for the jurisdictions you operate in.
- [ ] **Privacy Policy** has not been supplied. It is not linked anywhere; add it via `legal.privacyPolicy` in `content/site.ts`.
- [ ] **Terms of Use** have not been supplied. It is not linked anywhere; add it via `legal.termsOfUse`.
- [ ] Confirm business details and any regulatory disclosures that apply to SenaTrades' activities.

## Content to confirm

- [ ] Community offerings (Market education, Educational trade ideas, Market analysis, Trading psychology, Learning resources, Periodic live educational sessions): confirm each is currently offered.
- [ ] FAQ answers on `/community`.
- [ ] Short social channel descriptions in `content/site.ts`, such as "Short-form lessons and market thoughts" for TikTok. They are generic; adjust them to match what each channel actually posts.
- [ ] TikTok handle is `@senatradess` (double "s") as supplied; confirm it is correct.
