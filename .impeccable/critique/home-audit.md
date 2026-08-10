# Audit: Home (`src/pages/Home.jsx`)

**Target:** `src/pages/Home.jsx` (+ related layout/styles)  
**Date:** 2026-08-10  
**Scope:** Technical quality audit (not design critique)

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3 | Missing `prefers-reduced-motion`; emoji USP icons vs line-icon spec |
| 2 | Performance | 3 | Hero CSS background is remote URL; many scroll observers |
| 3 | Theming | 4 | CSS variables align with DESIGN.md tokens |
| 4 | Responsive Design | 3 | Layout breakpoints solid; some touch targets below 44px in header |
| 5 | Implementation Integrity | 3 | Emoji icons drift from DESIGN.md; detector clean on CSS |
| **Total** | | **16/20** | **Good** |

**Rating band:** Good — address weak dimensions (a11y motion, header touch targets, icon consistency).

## Implementation Integrity Verdict

**Pass with minor drift.** The page expresses the Swami Enterprises corporate system (gray/white base, yellow accents, Poppins/Inter). Deterministic detector reports zero issues on scanned files. Drift: USP section uses emoji instead of line-style icons specified in DESIGN.md.

## Executive Summary

- **Audit Health Score:** 16/20 (Good)
- **Issues:** P0: 0 · P1: 2 · P2: 4 · P3: 3
- **Top issues:** No reduced-motion alternative; header mobile touch targets; emoji USP icons; hero background not optimized
- **Next steps:** `/impeccable polish header` (done in this session), `/impeccable animate` for motion policy, replace USP emojis with SVG icons

## Detailed Findings

### P1 — Major

**[P1] No `prefers-reduced-motion` handling**  
- **Location:** `src/index.css` (`.aos`), `AnimateOnScroll.jsx`  
- **Category:** Accessibility  
- **Impact:** Users with vestibular disorders see slide-up animations without alternative  
- **WCAG:** 2.3.3 Animation from Interactions (AAA), best practice for AA sites  
- **Recommendation:** Disable or shorten transforms when `prefers-reduced-motion: reduce`  
- **Suggested command:** `/impeccable animate`

**[P1] Mobile header touch targets undersized**  
- **Location:** `Header.jsx`, `index.css` `.menu-toggle`, `.header-phone`  
- **Category:** Responsive / Accessibility  
- **Impact:** Hamburger and phone controls may be hard to tap on mobile  
- **WCAG:** 2.5.5 Target Size  
- **Recommendation:** Min 44×44px hit areas, visible focus rings  
- **Suggested command:** `/impeccable polish header`

### P2 — Minor

**[P2] USP icons use emoji instead of line icons**  
- **Location:** `Home.jsx` lines 12–17, USP cards  
- **Category:** Implementation Integrity  
- **Impact:** Inconsistent with DESIGN.md “line-style minimal icons”  
- **Recommendation:** Replace with inline SVG icons (gray + yellow hover)  
- **Suggested command:** `/impeccable polish` (USP section)

**[P2] Hero background image in CSS only**  
- **Location:** `index.css` `.hero-bg`  
- **Category:** Performance  
- **Impact:** Large remote image in CSS; no `image-set` / WebP; blocks LCP paint  
- **Recommendation:** Use `<img>` with `fetchpriority="high"` or optimized local WebP  
- **Suggested command:** `/impeccable optimize`

**[P2] Multiple IntersectionObserver instances**  
- **Location:** Every `AnimateOnScroll` wrapper on Home  
- **Category:** Performance  
- **Impact:** Minor overhead on long page  
- **Recommendation:** Shared observer hook (single instance)  
- **Suggested command:** `/impeccable optimize`

**[P2] Mobile menu lacks backdrop and Escape close**  
- **Location:** `Header.jsx`  
- **Category:** Accessibility  
- **Impact:** Menu overlay doesn’t dim page; keyboard users may struggle to dismiss  
- **Recommendation:** Backdrop + Escape handler + `aria-controls`  
- **Suggested command:** `/impeccable polish header`

### P3 — Polish

**[P3] Section landmarks** — Sections could use `aria-labelledby` tied to visible headings  
**[P3] Trust bar** — Stats are visual only; consider `dl`/`dt`/`dd` for semantics  
**[P3] Duplicate CTA** — “Get Free Consultation” in header and hero (intentional for conversion)

## Positive Findings

- Single H1 in hero; logical H2/H3 hierarchy in sections
- Descriptive `alt` text on images with location/keywords
- `loading="lazy"` on below-fold images
- SEO component with schema on home route
- Semantic `nav`, `blockquote` for testimonials, form labels in contact section
- CSS custom properties match DESIGN.md palette

## Recommended Actions

1. **[P1] `/impeccable polish header`** — Touch targets, focus states, mobile menu a11y (in progress)
2. **[P1] `/impeccable animate`** — `prefers-reduced-motion` policy sitewide
3. **[P2] `/impeccable polish`** — Replace USP emoji with line SVG icons
4. **[P2] `/impeccable optimize`** — Hero image strategy, shared scroll observer
