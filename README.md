# Swami Enterprises — Real Estate Website

Corporate marketing site for Swami Enterprises (Agra). Built with **Vite + React**.

## View the site (important)

Skills (Impeccable, Taste Skill) **do not change the website by themselves**. They are AI instructions in Cursor. Code changes happen when you run commands like `/impeccable polish` in chat.

**Always use this project's dev server — not `localhost:5173`**, which may be another app on your machine.

```bash
cd "d:\real-estate website"
npm install
npm run dev
```

Open: **http://localhost:5240/**

You should see **“Swami Enterprises | Real Estate Marketing Agency in Agra”** in the browser tab. If you see “Adwizly” or another brand, you are on the wrong port.

Production preview:

```bash
npm run build
npm run preview
```

## What was built

- Pages: Home, About, Services, Portfolio (+ detail), Contact, 404
- Brand: yellow/gray corporate design (`DESIGN.md`)
- SEO: meta tags, schema, sitemap, robots.txt
- Forms: contact form (`VITE_FORM_ENDPOINT` optional)

## AI design tools (installed)

| Tool | Docs | What it does |
|------|------|----------------|
| Impeccable | `IMPECCABLE.md` | `/impeccable polish`, audit, live mode |
| Taste Skill | `TASTE_SKILL.md` | Anti-slop redesign rules in Cursor |

Reload Cursor after installing skills. Enable **Agent Skills** in Settings → Rules.

## Project docs

- `PRODUCT.md` — product/brand truth
- `DESIGN.md` — colors, typography, components
