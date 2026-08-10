---
name: Swami Enterprises
description: Corporate real estate marketing agency — minimal, trustworthy, premium
colors:
  primary-yellow: "#F5B301"
  secondary-yellow: "#FFD447"
  primary-gray: "#2E2E2E"
  secondary-gray: "#6E6E6E"
  light-gray-bg: "#F5F5F5"
  white: "#FFFFFF"
  border: "#E5E5E5"
typography:
  heading:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: 1.6
rounded:
  sm: "6px"
  lg: "10px"
spacing:
  section: "5rem"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.primary-yellow}"
    textColor: "{colors.primary-gray}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary-gray}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
---

## Overview

Corporate minimal marketing site for an Indian real estate agency. Gray and white form the base; yellow appears only on CTAs, highlights, icons, and accents. Avoid card nesting, purple gradients, bounce easing, and flashy motion. Feel: trustworthy, professional, premium B2B/B2C.

## Colors

| Role | Token | Usage |
|------|-------|-------|
| CTA / accent | `#F5B301` | Primary buttons, badges, stats highlights |
| Accent light | `#FFD447` | Hover states on yellow elements |
| Text / UI dark | `#2E2E2E` | Headings, primary text, dark sections |
| Muted text | `#6E6E6E` | Body copy, secondary labels |
| Section bg | `#F5F5F5` | Alternating section backgrounds |
| Surface | `#FFFFFF` | Cards, header, main background |

Do not use gray text on colored backgrounds without sufficient contrast. Tint blacks/grays rather than pure `#000`.

## Typography

- **Headings:** Poppins, medium–semi-bold (500–700).
- **Body:** Inter, regular (400), 16px base, line-height 1.6.
- Hierarchy: one H1 per page; H2 for sections; H3 for cards and subsections.

## Layout

- Max content width: 1200px, centered, padding 1.25rem.
- Grid-based sections with generous whitespace.
- Two-column splits for about/contact; card grids for services and portfolio.
- Sticky header (72px). Section padding ~5rem desktop, ~3.5rem mobile.

## Elevation & Depth

- Subtle shadows: `0 4px 24px rgba(46,46,46,0.08)` on cards and images.
- No dark glows or heavy drop shadows.
- Hero uses dark overlay on photography, not gradient slop.

## Shapes

- Button/card radius: 6px (minimal rounded).
- Large media: 10px radius on images.
- Logo mark: 6px radius square tile.

## Components

- **Primary CTA:** Solid yellow, gray text, subtle hover lift.
- **Secondary CTA:** Gray outline, fills gray on hover.
- **Cards:** Single border or light shadow; do not nest cards inside cards.
- **Header:** Logo left, nav center/right, phone + yellow CTA.
- **Footer:** 4-column dark gray, map thumbnail, social icons.
- **Floating:** WhatsApp (green), scroll-to-top (gray/yellow hover).

## Do's and Don'ts

**Do:** Subtle fade-in on scroll, smooth hover transitions, line-style icons, high-quality property photography, consistent NAP.

**Don't:** Purple/blue gradients, bounce easing, emoji as icons, stock cliché imagery, overuse of yellow, nested card layouts, Inter-as-only-signal of "AI slop" (Inter is an explicit brand choice here).
