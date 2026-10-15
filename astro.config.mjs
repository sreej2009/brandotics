import { defineConfig } from 'astro/config';

// SITE_URL (https://brandotics.com) is set by the GitHub Pages workflow
// (.github/workflows/deploy.yml) so canonical URLs use the live domain.
// BASE_PATH is only needed if the site is ever served from a sub-folder.
//
// build.format 'preserve' keeps the URLs from the content document:
// src/pages/about-us.astro -> /about-us, src/pages/blog/index.astro -> /blog/.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  build: { format: 'preserve' },
});
