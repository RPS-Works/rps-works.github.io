# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based bento-style linkhub for the RPS Works organization (rps-works.github.io). Features a bento grid layout, blog with content collections, interactive D3 globe, and smooth animations.

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (Astro)
pnpm build            # Production build
pnpm preview          # Preview production build locally
pnpm run eslint       # Lint JS and Astro files
pnpm run check        # TypeScript type checking (astro check)
```

No test framework is configured.

## Architecture

**Multi-framework Astro app** using three UI frameworks simultaneously:
- **Astro components** (.astro) — layouts, cards, page structure (server-rendered)
- **Solid.js components** (.tsx) — client-side interactive elements (Globe, Tooltip)
- **Svelte components** (.svelte) — scroll-based playground experiments

**Routing** (file-based in `src/pages/`):
- `/` — bento grid homepage (linkhub)
- `/blog/` — blog listing
- `/blog/[id]` — individual posts
- `/travel` — interactive globe page
- `/rss.xml` — RSS feed

**Content system**: Blog posts in `src/data/blog/` as Markdown, loaded via Astro Content Collections (`content.config.ts`). Custom remark plugin (`src/lib/remark-reading-time.mjs`) injects reading time.

**Styling**: UnoCSS with Wind 3 preset (Tailwind-compatible utilities). Theme colors in `uno.config.ts`: `darkslate-*` (dark backgrounds), `primary-*` (red accent), `gray-*`. Fonts: Cabinet Grotesk + Satoshi via Fontshare.

**Deployment**: Static output, deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Homepage Bento Grid

The homepage (`src/pages/index.astro`) is a responsive grid: single column on mobile, 2 cols on `md`, 4 cols x 8 rows on `lg`. Cards are arranged using `colSpan`/`rowSpan` props.

Current card layout: IntroCard (3x4), AboutMe (1x6), ContactsCard (1x4), Now (1x2), Globe (1x1), Blog (1x2), Footer (1x1).

To add a new link card to the grid:
```astro
<Card colSpan="md:col-span-1" rowSpan="md:row-span-1" href="https://example.com" title="Link Title">
  <p class="text-sm">Description</p>
</Card>
```

## Key Files

- `astro.config.mjs` — integrations, site URL, remark plugins
- `uno.config.ts` — theme colors, fonts, custom shadows, grid templates
- `src/lib/constants.ts` — social links (GitHub, email), loader animation config
- `src/lib/helpers.ts` — date formatting, text trimming
- `content.config.ts` — blog content collection schema

## Component Pattern

The `Card` component (`src/components/Card/index.astro`) is the core UI primitive — accepts `colSpan`, `rowSpan`, `href`, `title`, and `colorText` props. All homepage sections are Card-wrapped.

Solid.js components use `client:load` or `client:visible` directives for client-side hydration.

## TypeScript

Strict mode, extends `astro/tsconfigs/strict`. JSX configured for Solid.js (`jsxImportSource: "solid-js"`).
