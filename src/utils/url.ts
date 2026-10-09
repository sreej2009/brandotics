// Prefixes a root-relative path ("/about/", "/assets/x.png") with the site's
// base path, so the site works both at a domain root and in a sub-folder such
// as GitHub Pages' https://<user>.github.io/<repo>/.
// Data files keep plain root-relative paths; components call url() when rendering.

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(path: string): string {
  if (!path.startsWith('/')) return path; // external links, mailto:, #anchors
  return `${base}${path}`;
}
