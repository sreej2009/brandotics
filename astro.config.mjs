import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow
// (.github/workflows/deploy.yml). Locally the site builds for the root path.
// For a custom domain, set SITE_URL to that domain and leave BASE_PATH unset.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
});
