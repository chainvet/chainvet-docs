# Chainvet Documentation

The documentation website for [Chainvet](https://github.com/chainvet/chainvet) and
its ecosystem, published at **https://docs.chainvet.dev**.

Built with [Fumadocs](https://fumadocs.dev) (Next.js App Router + MDX) and
**statically exported** for GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & preview the static site

```bash
npm run build      # -> ./out  (static export)
npm run start      # serve ./out locally
```

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes `./out` to GitHub Pages. To finish setup:

1. **Settings → Pages → Build and deployment → Source = GitHub Actions.**
2. The custom domain is pinned by `public/CNAME` (`docs.chainvet.dev`). Add a DNS
   `CNAME` record for `docs` → `chainvet.github.io`.
3. `public/.nojekyll` is included so the `_next/` assets are served verbatim.

Because the site is served from the domain root, no `next.config` `basePath` is
needed.

## Structure

The docs are served at the **root** of the subdomain (e.g. `/installation`), so the
marketing landing at `chainvet.dev` isn't duplicated here.

| Path | What |
| --- | --- |
| `content/docs/**` | The documentation content (MDX + `meta.json` sidebar order). |
| `app/(docs)/[[...slug]]/page.tsx` | The catch-all that renders every doc page at the root. |
| `app/global.css` | The Catppuccin (Latte/Mocha) brand theme. |
| `lib/source.ts`, `lib/shared.ts`, `lib/layout.shared.tsx` | Content source, site constants, nav. |
| `public/` | Logos, favicons (`.svg`/`.png`/`.ico`), `CNAME`, `.nojekyll`. |

## License

MIT.
