# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-route static landing page for a fictional SaaS consultation & development
studio ("Northpeak"). **Astro 5** (static output) + **Tailwind CSS v4**. English
copy. Dark tech-luxury visual direction (indigo→violet, Space Grotesk display).

## Commands

```bash
pnpm install        # pnpm is the package manager
pnpm dev            # dev server at http://localhost:4321
pnpm build          # `astro check` (type-check) THEN `astro build` -> dist/
pnpm preview        # serve the production build
pnpm check          # type-check only
```

No test runner is configured; a clean `pnpm build` is the bar for "done".

## Architecture

- **`src/pages/index.astro`** is the whole page: it is self-contained, holding
  its own HTML shell (`<head>`, fonts, JSON-LD `ProfessionalService`, ambient
  background) and every section inline (header, hero, capabilities, process,
  pricing, CTA, footer). Edit sections here.
- **`src/data/agency.ts`** is the single source of truth for content: brand,
  `stats`, `capabilities` (each tagged `group: "Consultation" | "Development"`),
  `steps`, and `plans`. Components/markup read from it — change copy here.
- **`src/components/Icon.astro`** is an inline-SVG icon set keyed by name; the
  `capabilities` entries reference icons by string key. Add a path to its `paths`
  map to add an icon.

## Styling

- Tailwind v4 via the **Vite plugin** (`@tailwindcss/vite` in `astro.config.mjs`),
  no `tailwind.config.js`. `src/styles/global.css` is just `@import "tailwindcss"`
  plus a small base layer.
- This page uses Tailwind's **built-in palette** (zinc/indigo/violet) directly
  rather than custom design tokens. Space Grotesk (`.font-grotesk`) is defined in
  the page's inline `<style>`; Inter is the body font.
- Path alias `@/*` → `src/*` (`tsconfig.json`).

## Content

All copy/contact in `src/data/agency.ts` is fictional placeholder data — replace
before launch. CTAs currently use `mailto:`; wire to a booking link/form for production.
