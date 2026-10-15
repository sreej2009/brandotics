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

Pushing to `main` builds and publishes the site to GitHub Pages (custom domain
**brandotics.com**, DNS at GoDaddy) through `.github/workflows/deploy.yml`, which sets
`SITE_URL=https://brandotics.com` for canonical URLs. `src/utils/url.ts` supports an optional
sub-folder base path (`BASE_PATH`) if the site is ever moved.

## URLs

Page URLs follow the content document (`/about-us`, `/seo-company-in-kerala`, `/contact`, `/blog/` ...).
`build.format: 'preserve'` in `astro.config.mjs` produces `about-us.html` etc., which GitHub Pages
serves without the extension. Each page sets its own title, meta description and canonical URL.

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

## Blog and admin

Blog posts are Markdown files in `src/content/blog/`. Manage them at `/admin/`
(Sveltia CMS, configured in `public/admin/config.yml`):

1. Create a GitHub fine-grained personal access token for the `brandotics` repository
   with **Contents: Read and write** permission.
2. Open `/admin/`, choose **Sign In Using Access Token** and paste the token.
3. Add or edit a post and publish. The change is committed to `main` and the site
   rebuilds automatically (about a minute).

Images uploaded in the admin go to `public/assets/images/blog/`. Posts marked
"Draft" are not shown on the site. The home page blog section appears once there is
at least one published post.

## Client logos

The home page shows an "Our Clients" logo band between the channels and team sections.
Logos are listed in `src/data/clients.ts` and stored in `public/assets/logos/`. Only add
confirmed clients; set `confirmed` to `false` there to hide the section.

## Placeholders to replace

- **Favicon**: `public/favicon.svg`
- **Team photos**: names and roles are in `src/data/team.ts`; add a `photo` to replace the generic avatar
- **Social links**: `src/data/site.ts`
- **Contact form delivery**: set `formEndpoint` in `src/data/site.ts`. Until then the form
  validates but sends nothing, and tells the visitor so.
- **Production URL**: `site` in `astro.config.mjs`
