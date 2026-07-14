# Zing Resident App — Scheduling

An updated resident mobile experience focused on **time-slot booking**. Residents bundle hospitality tasks into one visit, then reserve a specific time on the building's shared calendar.

## Files
- `index.html` — runnable prototype (phone frame + all styles + script tags). Open this.
- `data.jsx` — service catalogue, packages, operating hours, deterministic "already booked" data, time/date helpers, line icons. All exposed on `window`.
- `components.jsx` — chrome (co-brand app bar, bottom nav, segmented), task/package cards, date navigator, week strip, and the **day Timeline**.
- `app.jsx` — screens + flow wiring.
- `icons/` — task illustrations (webp/svg), the forest `zing-logo.svg`, and the `bezel` co-brand mark.

## The four tabs
1. **Home** — the ordering flow. Tasks / Packages toggle → tap a task → detail sheet (frequency, options, special instructions) → **Add to cart**. Cart bundles tasks and shows the **estimated visit length**, then **Choose a time** opens the booking calendar.
2. **Calendar** — a read-only **availability day-view** of the whole building (Google-calendar style, 8 AM–6 PM). Booked blocks are hatched; open windows are sage. Date arrows + week strip move through business days.
3. **Profile** — resident details and payment, matching the live app.
4. **Cart** — the bundle, estimate and checkout entry point.

## Booking / Timeline
- Zing operates **8 AM – 6 PM, Monday–Friday** (`DAY_START`/`DAY_END`); the week strip and date nav only surface business days.
- The visit length = sum of bundled task durations. On the booking timeline the app auto-places your visit in the first open block, and you can tap any open area or nudge ±15 min. Slots that overlap an existing booking or fall outside hours are unavailable.
- "Already booked" blocks are generated deterministically per date (`busyFor`) so the calendar is stable across reloads.

## Design notes
- Built on the Zing design system tokens via `styles.css` (forest primary, sage accents, cream surfaces, Newsreader + Hanken Grotesk).
- Co-branded **Zing × Bezel Miami** header with a "Text us" concierge pill.
- Entrance motion is transform-only and gated for reduced-motion so content is always visible; the segmented and nav toggles switch instantly.
