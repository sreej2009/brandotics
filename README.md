# Brandotics website

Static marketing site built with Astro, plain CSS and vanilla JavaScript.
Copy comes from `brandotics-content.pdf`; the visual design follows the agreed reference.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Structure

- `src/data/site.ts`: site name, contact details, social links, form endpoint
- `src/data/home.ts`: home page copy (also reused on Services, About, Contact)
- `src/data/services.ts`: all six service pages; `src/pages/services/[slug].astro` renders them
- `src/components/`: shared sections and UI pieces
- `src/styles/global.css`: design tokens and all styles
- `src/scripts/main.js`: navigation, reveals, counters, progress bars, accordion, form

## Brand assets

In `public/assets/`: `brandotics-wordmark.png` (header and footer logo),
`hero-man-pointing.png` (home hero) and `brandotics-banner.png` (CTA box background).

## Placeholders to replace

- **Favicon**: `public/favicon.svg`
- **Images**: every `<Placeholder />` (about, service pages, collages)
- **Team**: `src/components/TeamSection.astro` (names, roles, photos)
- **Contact details and social links**: `src/data/site.ts`
- **Contact form delivery**: set `formEndpoint` in `src/data/site.ts`. Until then the form
  validates but sends nothing, and tells the visitor so.
- **Production URL**: `site` in `astro.config.mjs`
