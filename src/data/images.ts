// Photo assignments. Files live in public/assets/images/ and are resized
// copies of the supplied originals. Alt text follows Final.pdf (pages 35–36).
// `position` is the CSS object-position used when a slot crops the photo.

export interface Photo { src: string; alt: string; position?: string }

const img = (path: string) => `/assets/images/${path}`;

export const heroAlt = 'Smiling man in dark sunglasses pointing forward with a thumbs-up graphic in the top corner on a beige background';

export const homeImages = {
  approach: { src: img('home/approach-team-planning.jpg'), alt: 'Digital marketing agency in Kerala team collaborating on campaign strategy and audience analysis' },
  whyA: { src: img('home/why-team-review.jpg'), alt: 'Digital marketing professional analyzing website performance and campaign data on a laptop.' },
  whyB: { src: img('home/why-analytics-dashboard.jpg'), alt: 'Laptop displaying digital marketing analytics and website performance metrics.', position: '60% 50%' },
} satisfies Record<string, Photo>;

export const aboutImages = {
  main: { src: img('about/person-laptop-bw.jpg'), alt: 'Black and white shot of a person using a laptop on their lap', position: '58% 50%' },
  experienceA: { src: img('about/performance-dashboard.jpg'), alt: 'Website performance metrics dashboard showing revenue growth and organic user traffic', position: '40% 50%' },
  // Not in the Final.pdf image list; kept from the earlier image set to fill the second collage slot.
  experienceB: { src: img('about/experience-laptop.jpg'), alt: 'Laptop displaying the words Digital Marketing beside dried flowers in vases', position: '78% 50%' },
} satisfies Record<string, Photo>;

export const teamAvatar = img('team-avatar.png');

/** Three photos per service page, keyed by service slug. */
export const serviceImages: Record<string, { main: Photo; a: Photo; b: Photo }> = {
  'seo-company-in-kerala': {
    main: { src: img('seo/seo-3d-typography.jpg'), alt: '3D SEO typography with bar chart and magnifying glass icon by a top seo company in Kerala' },
    a: { src: img('seo/marketer-laptop.jpg'), alt: 'Digital marketer working on a laptop computer providing professional seo service in kerala', position: '60% 50%' },
    b: { src: img('seo/search-key.jpg'), alt: 'A sleek silver tile featuring a search magnifying glass icon resting among white geometric blocks' },
  },
  'web-development-company-in-kerala': {
    main: { src: img('web-development/main-code-review.jpg'), alt: 'Web developer inspecting and optimizing website source code on a vertical screen monitor.' },
    a: { src: img('web-development/two-laptops.jpg'), alt: 'Developers writing code for custom websites at a web development company in Kerala' },
    b: { src: img('web-development/coding-hands.jpg'), alt: 'Modern website UI and graphic design solutions by a web design company in Kerala', position: '70% 50%' },
  },
  'social-media-marketing-company-in-kerala': {
    main: { src: img('social-media-marketing/social-icons-3d.jpg'), alt: '3D colorful social media and UI icons grid creative design by a leading social media marketing company in Kerala' },
    a: { src: img('social-media-marketing/app-icons.jpg'), alt: 'Smartphone screen displaying Instagram, Snapchat, and social media app icons managed by a social media marketing agency kerala' },
    b: { src: img('social-media-marketing/social-wall-tablet.jpg'), alt: 'Tablet computer displaying a social media wall campaign dashboard alongside a wireless keyboard on a wooden desk', position: '22% 50%' },
  },
  'google-ads-agency-in-kerala': {
    main: { src: img('google-ads/main-search-phone.jpg'), alt: 'Smartphone screen showing the Google search interface in dark mode.', position: '50% 62%' },
    a: { src: img('google-ads/search-phone-orange.jpg'), alt: 'Mobile phone screen showing Google homepage and trending search queries in dark mode', position: '85% 50%' },
    b: { src: img('google-ads/google-app-icon.jpg'), alt: "Close-up of the multicolor Google 'G' logo app icon on a mobile device.", position: '42% 50%' },
  },
  'graphic-design-services-in-kerala': {
    main: { src: img('graphic-design/main-lettering-tablet.jpg'), alt: 'Person drawing digital calligraphy with a stylus on a tablet.', position: '50% 60%' },
    a: { src: img('graphic-design/pen-tablet-desk.jpg'), alt: 'Digital artist holding a stylus on a graphics tablet next to a laptop', position: '68% 50%' },
    b: { src: img('graphic-design/stylus-closeup.jpg'), alt: 'Macro view of a stylus pen drawing on a graphics tablet surface.', position: '55% 50%' },
  },
  'content-writing-services-in-kerala': {
    main: { src: img('content-writing/main-typing.jpg'), alt: 'Hands typing on a laptop computer at a wooden desk', position: '50% 55%' },
    a: { src: img('content-writing/content-strategy-notebook.jpg'), alt: "Open notebook with 'Content Strategy' written on the page next to a computer keyboard.", position: '28% 50%' },
    b: { src: img('content-writing/handwriting-notes.jpg'), alt: 'Person writing in a notebook next to a laptop on a white desk setup.', position: '70% 50%' },
  },
};
