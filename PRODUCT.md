# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React (SPA). Deploy target: static hosting (Vercel/Netlify or similar).

## Users

- **Primary:** Real estate developers, builders, and property owners in India who need marketing, lead generation, and operations support for projects.
- **Secondary:** Channel partners, brokers, and corporate tenants evaluating commercial properties.

## Product Purpose

Swami Enterprises markets itself as a real estate marketing and operations management agency. The website must generate qualified consultation inquiries, establish trust with a corporate B2B/B2C audience, showcase portfolio work, and maintain consistent local SEO (NAP) for Agra and Uttar Pradesh.

Success means: clear service positioning, credible portfolio proof, fast contact paths (phone, WhatsApp, forms), and SEO-ready structure across all pages.

## Positioning

End-to-end real estate marketing and operations from a single Agra-based partner — not a generic digital agency. Combines local market expertise with measurable campaign results and transparent reporting.

## Operating Context

- Business hours: Mon–Sat, 10:00 AM–7:00 PM (IST).
- Office: 39 A, DayalBagh, Agra, Uttar Pradesh 282005.
- Primary contact: +91 7351531158 (phone and WhatsApp).
- Email: info@swamienterprises.in.

## Capabilities and Constraints

- Multi-page marketing site: Home, About, Services, Portfolio (with detail pages), Contact.
- Contact forms integrate with email notification + optional CRM/webhook (`VITE_FORM_ENDPOINT`).
- Content editable via data files (`src/data/`) until a CMS is added.
- SEO: unique meta per page, schema markup, sitemap, robots.txt, canonical tags, local keywords (Agra, UP, real estate marketing).

## Brand Commitments

- Name: Swami Enterprises.
- Tagline: Real Estate Marketing & Operations Management Experts.
- Tone: Professional, confident, trustworthy, concise — no slang or overly salesy language.
- Visual lane: Corporate, minimal, premium — NOT trendy/flashy. Gray and white dominate; yellow (#F5B301) for CTAs and accents only.

## Evidence on Hand

- Portfolio projects and testimonials in `src/data/` (placeholder imagery from Unsplash; replace with real assets).
- Team bios in `src/data/team.js`.
- No fabricated client metrics beyond stated marketing figures in content data files.

## Product Principles

1. Trust before hype — credibility signals (stats, testimonials, case studies) above decorative design.
2. Lead capture everywhere — phone, WhatsApp, and forms on key conversion paths.
3. Local SEO consistency — identical NAP across all pages and schema.
4. Corporate minimalism — generous whitespace, sharp alignment, subtle motion only.
5. Mobile-first — sticky header, click-to-call, responsive layouts.

## Accessibility & Inclusion

- Semantic HTML, single H1 per page, structured headings.
- Form labels, focus states, descriptive alt text on images.
- Target: WCAG 2.1 AA where practical for a marketing site.
