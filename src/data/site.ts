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

  // Social profiles (platforms from the content document). Add each profile
  // URL to `href`; until then the icon is shown without a link.
  socials: [
    { label: 'Instagram', icon: 'instagram', href: '' },
    { label: 'Facebook', icon: 'facebook', href: '' },
    { label: 'LinkedIn', icon: 'linkedin', href: '' },
    { label: 'YouTube', icon: 'youtube', href: '' },
  ] as { label: string; icon: 'instagram' | 'facebook' | 'linkedin' | 'youtube'; href: string }[],

  // Floating WhatsApp button (number in international format, digits only).
  whatsapp: {
    number: '919488119362',
    message: 'Hi Brandotics! \u{1F44B} I visited your website and would like to know more about your digital marketing services. Could you please share more details?',
  },

  // PLACEHOLDER: URL of a form backend that accepts a JSON POST.
  // While empty, the contact form validates but does not send anything.
  formEndpoint: '',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  // No overview page: "Services" only opens the dropdown of service pages.
  { label: 'Services', href: '', children: 'services' as const },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact' },
];
