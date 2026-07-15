# Rosenthal & Co., P.C. — Website

A modern rebuild of [rosenthalcpas.com](http://rosenthalcpas.com/) for the Houston CPA
firm Rosenthal & Co., P.C.

**Live preview:** https://omrib.dev/rosenthal/ (auto-deploys from `main` via GitHub Actions → GitHub Pages)

**Design direction:** editorial restraint inspired by [sequoiacap.com](https://sequoiacap.com)
(warm ivory, elegant serif display, generous whitespace) combined with the cinematic depth
and pill-button language of [legora.com](https://legora.com) (deep forest green, full-bleed
hero) — refined into a trustworthy, professional CPA brand.

> **Copy note:** All firm prose is taken **verbatim** from the original site. The rebuild
> changes the design, layout, and technology — not the firm's words. Site copy lives in one
> place: [`src/content/site.ts`](src/content/site.ts).

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server + build)
- **Tailwind CSS v4** (design tokens in [`src/index.css`](src/index.css))
- **React Router 7** (client-side routing)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  content/site.ts     # single source of truth for all copy (verbatim)
  components/          # Nav, Footer, Button, Reveal, Skyline, Icons, PageHeader
  pages/               # Home (built), Firm, Services, Resources, News, Contact, NotFound
  index.css            # Tailwind + brand design tokens
```

## Status

- ✅ **Homepage** — fully designed (the first checkpoint)
- 🏗️ **Firm Profile / What We Offer / Useful Resources / News / Contact** — scaffolded with
  the shared design system and real content, ready to refine page-by-page.

## Notes / next steps

- The hero backdrop is a self-contained SVG/CSS skyline (no external image dependency).
  A real Houston photograph could be dropped in later if desired.
- The contact form is a front-end demo — it needs wiring to an email endpoint / form service.
- Brand fonts (Fraunces + Inter) load from Google Fonts; self-host for production if preferred.
