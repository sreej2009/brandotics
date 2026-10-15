// Client logo showcase on the home page ("Our Clients" / "Brands That Trust Us").
//
// Showing a company's logo here is a public claim that Brandotics has worked
// for that company. The site owner supplied and confirmed these logos as
// clients (2026-10-09, list replaced 2026-10-15). Only add confirmed clients;
// set `confirmed` to false to hide the whole section.

export const clients = {
  confirmed: true,
  eyebrow: 'Our Clients',
  heading: 'Brands That {a:Trust Us}',
  logos: [
    { name: 'ATC Japan', file: 'atc-japan.png' },
    { name: 'Alhaktur IT Solutions & Service', file: 'alhaktur.png' },
    { name: 'Techman', file: 'techman.png' },
    { name: 'Bakapozd', file: 'bakapozd.png' },
    { name: 'LearnZM', file: 'learnzm.png' },
    { name: 'Novus Medicity', file: 'novus-medicity.png' },
    { name: 'Kazamer Tax Consultant', file: 'kazamer.png', plate: true }, // part of this logo is white, so it sits on a dark plate
    { name: 'Saleem Pookkad', file: 'saleem-pookkad.png' },
    { name: 'Leif Physiotherapy & Rehabilitation', file: 'leif-physiotherapy.png' },
  ].map((l: { name: string; file: string; plate?: boolean }) => ({ ...l, src: `/assets/logos/${l.file}` })),
};
