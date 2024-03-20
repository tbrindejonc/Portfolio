import {AppLink} from '@appTypes/portfolio';

// links used in nav menu
const appLinks: AppLink[] = [
  {
    title: {
      english: 'Home',
      french: 'Accueil',
    },
    href: '/',
  },
  {
    title: {
      english: 'Experiences',
      french: 'Expériences',
    },
    href: '/experiences',
  },
  {
    title: {
      english: 'Skills',
      french: 'Compétences',
    },
    href: '/skills',
  },
  {
    title: {
      english: 'Projects',
      french: 'Projets',
    },
    href: '/projects',
  },
  {
    title: {
      english: 'Contact',
      french: 'Contact',
    },
    href: '/contact',
  },
];

export default appLinks;
