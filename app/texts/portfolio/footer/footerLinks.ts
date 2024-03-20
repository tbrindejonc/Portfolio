import {FooterLink} from '@appTypes/portfolio';

// links used in footer section
const footerLinks: FooterLink[] = [
  {
    title: {
      english: 'Contact',
      french: 'Contact',
    },
    span: false,
    href: '/contact',
  },
  {
    title: {
      english: 'Cookie policy',
      french: 'Politique de cookies',
    },
    span: false,
    href: '/legal#cookies',
  },
  {
    title: {
      english: 'Legal notice',
      french: 'Mentions légales',
    },
    span: false,
    href: '/legal',
  },
  {
    title: {
      english: 'Copyright ',
      french: 'Copyright ',
    },
    span: {
      text: 'Timeuh',
      color: 'p_blue.main',
    },
    href: 'https://github.com/Timeuh',
  },
  {
    title: {
      english: 'Photo credits',
      french: 'Crédits photos',
    },
    span: false,
    href: '/legal#photos',
  },
  {
    title: {
      english: 'Icons by ',
      french: 'Icônes par ',
    },
    span: {
      text: 'Lucide',
      color: 'p_purple.main',
    },
    href: 'https://lucide.dev/',
  },
];

export default footerLinks;
