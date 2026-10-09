// Blog content.
//
// SAMPLE CONTENT FOR DEVELOPMENT ONLY. No blog articles were supplied, so the
// three posts below are placeholder articles written to exercise the layout.
// They contain general guidance only (no statistics, case studies or client
// results). Each is flagged `sample: true`, which shows a "Sample article"
// label on the site. Replace them with real articles and remove the flag
// before launch.

import type { Photo } from './images';

export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: Photo;
  sample: boolean;
  body: { heading?: string; paragraphs: string[] }[];
}

export const blog = {
  eyebrow: 'From the Blog',
  heading: '{o:Insights} & {a:Ideas}',
  intro: 'Practical thoughts on search, social media, content and design from the Brandotics team.',
  button: 'View All Articles',
};

export const posts: Post[] = [
  {
    slug: 'search-intent-and-seo-planning',
    title: 'Why Search Intent Should Shape Your SEO Plan',
    category: 'SEO',
    excerpt: 'Keywords tell you what people type. Intent tells you what they want. Planning pages around intent makes SEO work more useful for visitors.',
    image: { src: '/assets/images/blog/team-research.jpg', alt: 'Three colleagues gathered around a laptop and tablet, seen from above', position: '50% 40%' },
    sample: true,
    body: [
      {
        paragraphs: [
          'Most SEO plans begin with a list of keywords. That is a reasonable starting point, but a keyword on its own says little about what the person searching actually needs. Two people can type similar words and want very different things.',
          'Search intent is the reason behind a search. Thinking about it early helps you decide which pages to build, what they should say, and how to judge whether they are doing their job.',
        ],
      },
      {
        heading: 'Four common kinds of intent',
        paragraphs: [
          'Informational searches come from people who want to learn something. Navigational searches come from people looking for a specific site or page. Commercial searches come from people comparing options. Transactional searches come from people ready to act.',
          'A page that tries to serve all four at once usually serves none of them well. It is clearer to give each page one main purpose and write it for the visitor who has that purpose.',
        ],
      },
      {
        heading: 'Putting it into practice',
        paragraphs: [
          'Group your keyword list by intent before you group it by topic. For each group, look at what already appears in the search results and ask what a visitor would expect to find after clicking.',
          'Then match the page type to the intent: guides and explanations for people learning, comparison and service pages for people choosing, and clear contact or enquiry routes for people ready to talk. Review the pages regularly, because the way people search changes over time.',
        ],
      },
    ],
  },
  {
    slug: 'planning-a-consistent-social-media-calendar',
    title: 'Planning a Social Media Calendar You Can Keep Up With',
    category: 'Social Media',
    excerpt: 'Consistency matters more than volume. A simple calendar built around a few content themes is easier to sustain than an ambitious one.',
    image: { src: '/assets/images/blog/marketing-strategy-calendar.jpg', alt: 'Planner page with Marketing Strategy handwritten on it, next to a keyboard', position: '60% 55%' },
    sample: true,
    body: [
      {
        paragraphs: [
          'Many social media plans start with enthusiasm and fade within a few weeks. The usual cause is not a lack of ideas. It is a schedule that asks for more than the team can comfortably produce.',
          'A calendar is useful only if you can keep to it. Starting smaller and staying consistent tends to serve a brand better than posting heavily for a short burst and then going quiet.',
        ],
      },
      {
        heading: 'Start with themes, not posts',
        paragraphs: [
          'Choose a small number of content themes that reflect what your audience cares about and what your business can speak about with confidence. Examples include practical tips, behind-the-scenes content, answers to common questions and updates about your work.',
          'Themes make planning quicker because you are filling known slots rather than inventing something new each time. They also give your feed a recognizable rhythm.',
        ],
      },
      {
        heading: 'Build in time to review',
        paragraphs: [
          'Set a regular point to look back at what you published and how people responded. Keep the formats that earn genuine interaction and drop the ones that do not.',
          'Leave room in the calendar for timely posts as well. A plan should guide the work, not prevent you from responding to something relevant when it comes up.',
        ],
      },
    ],
  },
  {
    slug: 'writing-website-copy-visitors-read',
    title: 'Writing Website Copy That Visitors Actually Read',
    category: 'Content Writing',
    excerpt: 'People scan before they read. Clear headings, short paragraphs and a single message per page help visitors find what they came for.',
    image: { src: '/assets/images/blog/writing-notebook.jpg', alt: 'Person writing in a notebook beside a laptop', position: '55% 55%' },
    sample: true,
    body: [
      {
        paragraphs: [
          'Visitors rarely read a web page from top to bottom. They scan headings, pick out a few phrases, and decide quickly whether the page is worth their time. Good website copy is written with that behaviour in mind.',
        ],
      },
      {
        heading: 'Lead with what the visitor needs',
        paragraphs: [
          'Open each page by saying plainly what it offers and who it is for. Background about the company can come later. A visitor who understands the page in the first few lines is more likely to keep going.',
          'Use the words your customers use. Internal terms and industry shorthand may feel precise, but they slow down a reader who does not share them.',
        ],
      },
      {
        heading: 'Make it easy to scan',
        paragraphs: [
          'Write headings that carry meaning on their own, keep paragraphs short, and give each page one main message. If a section tries to make three points, consider splitting it.',
          'Finish with a clear next step. Whether that is reading a related page or getting in touch, the visitor should never have to guess what to do next.',
        ],
      },
    ],
  },
];

export const postPath = (slug: string) => `/blog/${slug}/`;
