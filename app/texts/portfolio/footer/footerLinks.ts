import {FooterLink} from '@appTypes/portfolio';

// links used in footer section
const footerLinks: FooterLink[] = [
  {
    title: {
      en: 'Contact',
      fr: 'Contact',
    },
    span: false,
    href: '/contact',
  },
  {
    title: {
      en: 'Cookie policy',
      fr: 'Politique de cookies',
    },
    span: false,
    href: '/legal#cookies',
  },
  {
    title: {
      en: 'Legal notice',
      fr: 'Mentions légales',
    },
    span: false,
    href: '/legal',
  },
  {
    title: {
      en: 'Copyright ',
      fr: 'Copyright ',
    },
    span: {
      text: 'Timeuh',
      color: 'p_blue.main',
    },
    href: 'https://github.com/Timeuh',
  },
  {
    title: {
      en: 'Photo credits',
      fr: 'Crédits photos',
    },
    span: false,
    href: '/legal#photos',
  },
  {
    title: {
      en: 'Icons by ',
      fr: 'Icônes par ',
    },
    span: {
      text: 'Lucide',
      color: 'p_purple.main',
    },
    href: 'https://lucide.dev/',
  },
];

export default footerLinks;
