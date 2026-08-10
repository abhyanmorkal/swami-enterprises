# Impeccable (Design System for AI)

This project uses [Impeccable](https://github.com/pbakaus/impeccable) so Cursor and the CLI can follow consistent design rules.

## Project context files

| File | Purpose |
|------|---------|
| `PRODUCT.md` | Product truth: users, positioning, brand commitments |
| `DESIGN.md` | Visual system: colors, typography, components, do's/don'ts |
| `.impeccable/config.json` | Detector + hook settings |
| `.cursor/skills/impeccable/` | Cursor skill (23 design commands) |

## In Cursor

1. Enable **Agent Skills** in Cursor Settings → Rules (Nightly/Beta if required).
2. Reload Cursor after first install.
3. Use commands in chat:

```
/impeccable init          # already done — PRODUCT.md + DESIGN.md exist
/impeccable audit         # technical checks (a11y, responsive)
/impeccable polish        # final design-system alignment
/impeccable critique      # UX design review
/impeccable layout        # spacing and rhythm fixes
/impeccable typeset       # typography fixes
```

Focus on an area:

```
/impeccable audit src/pages/Home.jsx
/impeccable polish header
```

Pin a shortcut: `/impeccable pin audit` → `/audit`

**Live mode** (browser iteration): `/impeccable live` — requires dev server (`npm run dev`).

## CLI (no AI)

```bash
npm run impeccable:detect     # scan src + index.html
npx impeccable detect --json .  # CI-friendly output
npx impeccable skills update    # refresh skill (Windows: may need manual bundle copy)
```

## Updating skills on Windows

The official installer uses `unzip`, which is not always available in PowerShell. To update:

1. Download the universal bundle: https://impeccable.style/api/download/bundle/universal
2. Extract and copy `.cursor` into the project root.

Or use Git Bash / WSL: `npx impeccable skills install`

## Design hook

`.cursor/hooks.json` runs the design detector before UI file edits. On Windows, hooks use shell syntax; if hooks fail, detection still works via `npm run impeccable:detect`.

## Docs

- https://impeccable.style
- https://github.com/pbakaus/impeccable
