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

## Deployment

Pushing to `main` builds and publishes the site to GitHub Pages through
`.github/workflows/deploy.yml`. The workflow passes the Pages URL and sub-folder to the
build (`SITE_URL`, `BASE_PATH`); links and assets pick the sub-folder up via `src/utils/url.ts`.

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
Section photos are in `public/assets/images/`, assigned to pages in `src/data/images.ts`.

## Blog (sample content)

The three posts in `src/data/blog.ts` are sample articles for development, labelled
"Sample article" on the site. Replace them with real articles and set `sample: false`
(or remove the flag) before launch. Pages: `/blog/` and `/blog/<slug>/`.

## Client logos (switched off)

The home page has an "Our Clients" logo band between the channels and team sections.
It is hidden until `confirmed` is set to `true` in `src/data/clients.ts`; only do that once
every listed brand is a real client that has agreed to be shown. Logos are in
`public/assets/logos/`.

## Placeholders to replace

- **Favicon**: `public/favicon.svg`
- **Team**: `src/components/TeamSection.astro` (names, roles; photos currently use the generic avatar)
- **Contact details and social links**: `src/data/site.ts`
- **Contact form delivery**: set `formEndpoint` in `src/data/site.ts`. Until then the form
  validates but sends nothing, and tells the visitor so.
- **Production URL**: `site` in `astro.config.mjs`
