# RPS Works Linkhub

Bento-style linkhub for the RPS Works organization, built with [Astro](https://astro.build/).

## Development

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm preview          # Preview production build
```

## Deployment

Deploys to GitHub Pages via GitHub Actions on push to `main`.

Make sure GitHub Pages is configured to use **GitHub Actions** as the source in your repo settings (Settings > Pages > Source).

## TODO

- [ ] Update contact email in `src/lib/constants.ts`
- [ ] Add link cards to the bento grid in `src/pages/index.astro`
