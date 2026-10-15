// Blog posts are Markdown files in src/content/blog/, created and edited from
// the admin page (/admin/, see public/admin/config.yml) or by hand.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string().optional().default(''),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
