import {AppLink} from '@appTypes/portfolio';

// links used in nav menu
const appLinks: AppLink[] = [
  {
    title: {
      en: 'Home',
      fr: 'Accueil',
    },
    href: '/',
  },
  {
    title: {
      en: 'Experiences',
      fr: 'Expériences',
    },
    href: '/experiences',
  },
  {
    title: {
      en: 'Skills',
      fr: 'Compétences',
    },
    href: '/skills',
  },
  {
    title: {
      en: 'Projects',
      fr: 'Projets',
    },
    href: '/projects',
  },
  {
    title: {
      en: 'Contact',
      fr: 'Contact',
    },
    href: '/contact',
  },
];

export default appLinks;
