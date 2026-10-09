// Client logo showcase on the home page.
//
// IMPORTANT: showing a company's logo under "Our Clients" is a public claim
// that Brandotics has worked for that company. The section therefore stays
// hidden until `confirmed` is set to true by someone who can vouch that every
// brand listed below is a real Brandotics client and has agreed to be shown.
// Remove any logo that is not approved before switching it on.

export const clients = {
  confirmed: false,
  eyebrow: 'Our Clients',
  logos: [
    { name: 'ATC Japan', src: '/assets/logos/atc-japan.png' },
    { name: 'LearnZM', src: '/assets/logos/learnzm.png' },
    { name: 'Novus Medicity', src: '/assets/logos/novus-medicity.png' },
    { name: 'SM Traders', src: '/assets/logos/sm-traders.png' },
  ],
};
