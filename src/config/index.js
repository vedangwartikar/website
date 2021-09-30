module.exports = {
  siteTitle: 'Vedang Wartikar',
  siteDescription:
    'Vedang Wartikar is a Software Engineer based in Pune.',
  siteKeywords:
    'Vedang Wartikar, Vedang, Wartikar, software engineer, backend engineer, developer',
  siteUrl: 'https://vedang.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Vedang Wartikar V W',
  location: 'Pune, IN',
  email: 'vedangwartikar17@gmail.com',
  github: 'https://github.com/vedangwartikar',
  twitterHandle: '@vedangwartikar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.vedang.dev',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.vedang.dev',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/excogitatr',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vedangwartikar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Experience',
      url: '/jobs',
    },
    {
      name: 'Projects',
      url: '/projects',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
