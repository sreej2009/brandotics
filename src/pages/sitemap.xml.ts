// Generates /sitemap.xml: every public page plus published blog posts.
// (404 and /admin/ are left out on purpose.)
import type { APIRoute } from 'astro';
import { services, servicePath } from '../data/services';
import { getPosts, postPath } from '../data/blog';
import { url } from '../utils/url';

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://brandotics.com');
  const abs = (path: string) => new URL(url(path), origin).href;
  const posts = await getPosts();

  const entries: { loc: string; lastmod?: string; priority: string }[] = [
    { loc: abs('/'), priority: '1.0' },
    ...services.map((s) => ({ loc: abs(servicePath(s.slug)), priority: '0.9' })),
    { loc: abs('/about-us'), priority: '0.8' },
    { loc: abs('/contact'), priority: '0.8' },
    { loc: abs('/blog/'), priority: '0.7' },
    ...posts.map((p) => ({ loc: abs(postPath(p.id)), lastmod: p.data.date.toISOString().slice(0, 10), priority: '0.6' })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}<priority>${e.priority}</priority></url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
