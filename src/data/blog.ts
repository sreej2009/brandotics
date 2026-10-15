// Blog settings and helpers. Posts themselves live in src/content/blog/*.md
// and are managed from the admin page (/admin/).
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const blog = {
  eyebrow: 'From the Blog',
  heading: '{o:Insights} & {a:Ideas}',
  intro: 'Explore digital marketing tips, insights, and strategies to grow your brand online.',
  seo: {
    title: 'Digital Marketing Blog & Tips | Brandotics',
    description: 'Explore the Brandotics blog for insights on SEO, digital marketing, web development, social media marketing, and strategies to grow your online presence.',
  },
  button: 'View All Articles',
};

/** Published posts, newest first (drafts are left out). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const postPath = (slug: string) => `/blog/${slug}`;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
