// Photo assignments. Files live in public/assets/images/ and are resized
// copies of the originals supplied in Downloads/Image.
// `position` is the CSS object-position used when a slot crops the photo.

export interface Photo { src: string; alt: string; position?: string }

const img = (path: string) => `/assets/images/${path}`;

export const homeImages = {
  approach: { src: img('home/approach-team-planning.jpg'), alt: 'Team working around a table with laptops and printed marketing charts, seen from above' },
  whyA: { src: img('home/why-team-review.jpg'), alt: 'Colleagues reviewing a website together on a laptop' },
  whyB: { src: img('home/why-analytics-dashboard.jpg'), alt: 'Laptop screen showing a website analytics dashboard', position: '60% 50%' },
} satisfies Record<string, Photo>;

export const aboutImages = {
  main: { src: img('about/digital-marketing-desk.jpg'), alt: 'Laptop displaying the words Digital Marketing on a desk against a green wall', position: '88% 50%' },
  experienceA: { src: img('about/experience-laptop.jpg'), alt: 'Laptop displaying the words Digital Marketing beside dried flowers in vases', position: '78% 50%' },
  experienceB: { src: img('about/experience-audience-wheel.jpg'), alt: 'Colour wheel chart of audience groups such as consumers, marketers and retailers' },
} satisfies Record<string, Photo>;

export const teamAvatar = img('team-avatar.png');

/** Three photos per service page, keyed by service slug. */
export const serviceImages: Record<string, { main: Photo; a: Photo; b: Photo }> = {
  seo: {
    main: { src: img('seo/main-analysis-desk.jpg'), alt: 'Two people working on laptops at a desk covered with printed charts and infographics', position: '50% 35%' },
    a: { src: img('seo/search-tiles.jpg'), alt: 'Letter tiles spelling the word SEARCH' },
    b: { src: img('seo/search-key.jpg'), alt: 'Small key marked with a magnifying glass among blank white keys' },
  },
  'web-development': {
    main: { src: img('web-development/main-code-review.jpg'), alt: 'Developer pointing at code on a tablet screen at a desk with a keyboard and monitors' },
    a: { src: img('web-development/two-laptops.jpg'), alt: 'Hands typing on a laptop showing code, next to a second laptop showing a web page' },
    b: { src: img('web-development/coding-hands.jpg'), alt: 'Hands typing on a laptop with a code editor open', position: '70% 50%' },
  },
  'social-media-marketing': {
    main: { src: img('social-media-marketing/main-card-camera.jpg'), alt: 'The words Social Media Marketing printed on brown paper beside a vintage camera', position: '50% 45%' },
    a: { src: img('social-media-marketing/app-icons.jpg'), alt: 'Phone screen showing social media and other app icons' },
    b: { src: img('social-media-marketing/social-wall-tablet.jpg'), alt: 'Tablet showing a feed of social media posts next to a keyboard', position: '22% 50%' },
  },
  'google-ads': {
    main: { src: img('google-ads/main-search-phone.jpg'), alt: 'Phone showing the Google search page in front of a blurred Google logo', position: '50% 62%' },
    a: { src: img('google-ads/search-phone-orange.jpg'), alt: 'Phone showing Google trending searches on an orange background', position: '85% 50%' },
    b: { src: img('google-ads/google-app-icon.jpg'), alt: 'Close-up of the Google app icon on a phone screen', position: '42% 50%' },
  },
  'graphic-design': {
    main: { src: img('graphic-design/main-lettering-tablet.jpg'), alt: 'Designer hand-lettering the word Creative on a tablet with a stylus', position: '50% 60%' },
    a: { src: img('graphic-design/pen-tablet-desk.jpg'), alt: 'Designer drawing on a pen tablet beside a laptop and cameras', position: '68% 50%' },
    b: { src: img('graphic-design/stylus-closeup.jpg'), alt: 'Close-up of a hand holding a stylus over a drawing tablet', position: '55% 50%' },
  },
  'content-writing': {
    main: { src: img('content-writing/main-typing.jpg'), alt: 'Hands typing on a laptop at a wooden desk', position: '50% 55%' },
    a: { src: img('content-writing/content-strategy-notebook.jpg'), alt: 'Planner page with Content Strategy handwritten on it, next to a keyboard', position: '28% 50%' },
    b: { src: img('content-writing/handwriting-notes.jpg'), alt: 'Person writing notes in a notebook beside a laptop', position: '70% 50%' },
  },
};
