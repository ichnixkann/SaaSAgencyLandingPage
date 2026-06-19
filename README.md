# Northpeak — SaaS Agency Landing Page

A fast, static landing page for a fictional SaaS consultation & development studio
("Northpeak"), built with **Astro 5** and **Tailwind CSS v4**. Dark tech-luxury
direction (indigo→violet, Space Grotesk display). All content is placeholder data.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:4321
```

## Scripts

| Command        | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `pnpm dev`     | Dev server with HMR                              |
| `pnpm build`   | Type-check (`astro check`) then build to `dist/` |
| `pnpm preview` | Serve the production build                        |
| `pnpm check`   | Type-check only                                  |
| `pnpm format`  | Prettier over `src/`                             |

## Editing content

All copy — brand, stats, capabilities, process steps, pricing plans — lives in
`src/data/agency.ts`. The page (`src/pages/index.astro`) reads from it.

## Before going live

- Replace placeholder copy/contact in `src/data/agency.ts`.
- Set the real domain in `astro.config.mjs` (`site`).
- Wire the CTA buttons (currently `mailto:`) to a real booking link / form.
