# Taste Skill

[Taste Skill](https://github.com/Leonxlnx/taste-skill) is installed to improve layout, typography, motion, and spacing without generic “AI slop” patterns.

## Installed skills

| Install name | Path | Use for |
|--------------|------|---------|
| `design-taste-frontend` | `.cursor/skills/design-taste-frontend/` | General anti-slop frontend rules (v2) |
| `redesign-existing-projects` | `.cursor/skills/redesign-existing-projects/` | Auditing and upgrading existing sites |

Also available at `.agents/skills/` (installer default).

## Design read (this project)

**Reading this as:** B2B real estate marketing landing for developers and builders in India, with a **trust-first corporate minimal** language — preserving Swami Enterprises yellow/gray brand (see `DESIGN.md`).

**Dials (conservative):** low variance, low motion, medium density — aligned with `PRODUCT.md` principles.

## In Cursor

Reload Cursor after install. Reference skills in chat:

```
Apply redesign-existing-projects to improve the homepage
Use design-taste-frontend with trust-first B2B dials — keep Poppins/Inter and brand yellow
```

## Update skills

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend" -y
```

## Works with Impeccable

- **Impeccable** — design system, detector, live mode (`IMPECCABLE.md`)
- **Taste Skill** — anti-slop patterns and redesign audit checklist

Both respect `PRODUCT.md` and `DESIGN.md` as the brand authority.

## Resources

- [taste-skill on GitHub](https://github.com/Leonxlnx/taste-skill)
- [tasteskill.dev](https://tasteskill.dev)
