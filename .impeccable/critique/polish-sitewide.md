# Polish pass — sitewide

**Date:** 2026-08-10  
**Scope:** Full marketing site (preserve Swami corporate minimal identity)

## Changes applied

### Interaction & accessibility
- Button `:disabled` styling; hover lift only when not disabled
- Form success `role="status"` + `aria-live`; errors `role="alert"`
- Filter tabs: restored yellow active state + hover; focus rings
- FAQ and service accordion headers: focus-visible rings
- Footer logo mark `aria-hidden`

### Layout & cards
- Portfolio cards: equal-height grid, flex bodies, aligned “View Details” links
- Portfolio empty state when filter returns no results
- CTA banner: subtitle width cap, button won’t shrink on wide screens
- Page hero: balanced titles, subtitle measure

### Typography & data
- Case study stats: tabular numerals
- Testimonial avatars: `flex-shrink: 0` (no squish)

### Motion & shadows
- Portfolio hover matches service cards (`shadow-tinted`, -3px lift)
- Consistent with DESIGN.md — no new motion patterns

## Detector

`npx impeccable detect src/ index.html` — clean after pass.

## Intentional exceptions

- Inter/Poppins retained (brand + `.impeccable/config.json` ignores)
- Hero remote background URL (optimize in future `/impeccable optimize` pass)

## Optional next steps

- `/impeccable optimize` — hero image, shared scroll observer
- `/impeccable layout` — Services page accordion rhythm
- `/impeccable animate` — stagger timing audit only (keep low motion)
