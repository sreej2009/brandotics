// Site-wide settings. Anything set to `null` / empty renders as a clearly
// marked placeholder on the site until real details are supplied.

export const site = {
  name: 'Brandotics',
  // Used as the footer blurb and as the fallback meta description.
  description:
    'Brandotics is a digital marketing agency in Kerala offering SEO, web development, social media marketing, Google Ads, and creative solutions for growth.',

  contact: {
    address: 'Palakkad, Kerala' as string | null,
    email: 'brandotics8005@gmail.com' as string | null,
    phone: '+91 94881 19362' as string | null,
  },

  // PLACEHOLDER: add entries like { label: 'Instagram', href: 'https://…' }.
  socials: [] as { label: string; href: string }[],

  // PLACEHOLDER: URL of a form backend that accepts a JSON POST.
  // While empty, the contact form validates but does not send anything.
  formEndpoint: '',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Services', href: '/services/', children: 'services' as const },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact' },
];
