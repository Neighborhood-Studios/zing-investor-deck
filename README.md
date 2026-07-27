# Zing Investor Deck V2

Full-page, presenter-mode pitch deck built for recording a Loom. Static site — no backend, no build step. 14 slides following Alvaro's V6 script, including in-slide click builds.

## Run / deploy

Serve the folder over HTTP — **not** via `file://` (scripts are fetched at runtime):

```bash
# from inside this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Or drop the whole folder on any static host (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages). Root `index.html` redirects into the deck; the deck entry is `templates/investor-deck-v2/InvestorDeckV2.dc.html`.

## Presenting (Loom mode)

- Welcome screen → click to begin (always starts at slide 1).
- **Advance:** click anywhere, Space, or → . **Back:** ← . No visible chrome: the bottom toolbar is removed; edge arrows and the cover hint appear only on hover; the slide-panel button (bottom-left) is invisible until hovered.
- **In-slide builds:** slide 3 (Sarah) — 1 click crosses $250 → $69. Slide 5 (map) — 4 clicks: zoom to target building → $ badge → nearby buildings turn green → zoom out, whole neighborhood converts. Space/→ plays builds before advancing; ← rewinds them.
- **Re-takes:** jumping back to any slide resets its animations and builds — no refresh needed.
- Slide 13 has no CTA; the end slide links to Calendly.

## Structure (keep this layout — relative paths matter)

- `templates/investor-deck-v2/` — the deck
  - `InvestorDeckV2.dc.html` — entry
  - `support.js` — runtime
  - `ds-base.js` — loads the design-system CSS + bundle from two levels up
  - `deck-stage.js`, `image-slot.js` — stage + drag-to-replace image slots
  - `img/` (compressed ≤1920px JPEGs), `icons/`
- `styles.css`, `tokens/`, `components/components.css`, `_ds_bundle.js` — Zing design system

## Image drop-slots

Cover background and the Sarah photo are `<image-slot>` placeholders containing detailed generation prompts — replace by dropping generated images on them (in the editor) or by editing the `src` in the deck HTML. Team headshots: `img/alvaro.jpg` / `img/tapan.jpg`.

## External dependencies (CDN, internet required)

- Google Fonts: Newsreader + Hanken Grotesk

## Notes

- All images are pre-compressed (the deck totals ~2 MB of imagery) — keep new images similarly sized to avoid memory pressure in embedded browsers.
- Calendly link is set on the end slide; edit the `href` in `InvestorDeckV2.dc.html` to change it.
