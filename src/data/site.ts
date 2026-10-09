// Site-wide settings. Anything set to `null` / empty renders as a clearly
// marked placeholder on the site until real details are supplied.

export const site = {
  name: 'Brandotics',
  // Reused verbatim from the home hero copy in brandotics-content.pdf.
  description:
    'We help businesses build a stronger digital presence through smart marketing strategies, engaging content, and performance-focused campaigns.',

  // PLACEHOLDER: real contact details were not supplied.
  contact: {
    address: null as string | null,
    email: null as string | null,
    phone: null as string | null,
  },

  // PLACEHOLDER: add entries like { label: 'Instagram', href: 'https://…' }.
  socials: [] as { label: string; href: string }[],

  // PLACEHOLDER: URL of a form backend that accepts a JSON POST.
  // While empty, the contact form validates but does not send anything.
  formEndpoint: '',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/', children: 'services' as const },
  { label: 'Contact', href: '/contact/' },
];
