# Zing Investor Deck

Full-page, presenter-mode pitch deck (pitch.com-style) for Zing. Static site — no backend, no build step.

## Run / deploy

Serve the folder over HTTP and open it — **not** via `file://` (the deck and the embedded app fetch `.js`/`.jsx` at runtime, which browsers block on `file://`).

```bash
# from inside this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

`index.html` at the root redirects to the deck. Or drop the whole folder on any static host (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages).

The deck entry itself is `templates/investor-deck/InvestorDeck.dc.html`.

## Presenting

- **Advance:** click anywhere, press Space, or press → . **Back:** press ← , or hover the left/right edge and click the arrow.
- Loads full-screen with the slide panel hidden. The round button (bottom-left) shows/hides the slide thumbnail rail; the choice is remembered.
- 15 slides. Slides 2, 10 and 14 embed the **live resident app** (fully clickable mid-presentation). Slide 15 has a **Download** (one-pager) and a **Schedule a Calendly call** button.

## Structure (relative paths matter — keep this layout)

- `templates/investor-deck/` — the deck and its assets
  - `InvestorDeck.dc.html` — the deck (open this)
  - `support.js` — deck runtime (assembled by the design-system tooling)
  - `ds-base.js` — loads the design-system CSS + bundle (paths point two levels up)
  - `deck-stage.js` — slide-stage web component (scaling, nav, rail, print)
  - `image-slot.js` — drag-to-replace headshots on the team slide
  - `one-pager.html` — printable one-pager opened by the Download button
  - `img/`, `icons/` — deck imagery
- `styles.css`, `tokens/`, `components/components.css`, `_ds_bundle.js` — Zing design system (referenced by `ds-base.js`)
- `ui_kits/resident-scheduling/` — the live resident app embedded in the demo slides

> The deck uses relative `../../` references to reach the shared design-system files and the app. Keep the folder layout intact when deploying.

## External dependencies (CDN, internet required)

- React 18 + ReactDOM (UMD) and Babel Standalone — used by the embedded resident app (pinned with integrity hashes)
- Google Fonts: Newsreader + Hanken Grotesk

## Notes

- The embedded app transpiles its `.jsx` in-browser via Babel for prototype convenience. For production, precompile it (Vite/esbuild) and drop the Babel CDN script.
- Founder headshots on the Team slide can be swapped by dropping images onto the circles (in the live editor) or replacing `img/alvaro.jpg` / `img/tapan.jpg`.
- Calendly button points at the provided scheduling link; edit the `href` in `InvestorDeck.dc.html` to change it.
