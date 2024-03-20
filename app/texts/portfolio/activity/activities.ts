import {Activity} from '@appTypes/portfolio';

const activities: Activity[] = [
  {
    title: {
      english: 'Video games',
      french: 'Jeux vidéo',
    },
    description: {
      firstPart: {
        english:
          'My main hobby is playing video games. I like several types of games, whether solo or multiplayer. My favorite games are',
        french:
          'Mon principal hobby est de jouer aux jeux vidéos. J’aime plusieurs type de jeux, que ce soit en solo ou multijoueur. Mes jeux préférés sont',
      },
      firstSpan: {
        english: ' Minecraft ',
        french: ' Minecraft ',
      },
      secondPart: {
        english: 'and ',
        french: 'et ',
      },
      secondSpan: {
        english: 'The Binding of Isaac.',
        french: 'The Binding of Isaac.',
      },
    },
  },
  {
    title: {
      english: 'Development',
      french: 'Développement',
    },
    description: {
      firstPart: {
        english: 'Outside of video games, I love to develop small or large projects on my own, to learn',
        french:
          'en dehors des jeux vidéo, j’adore développer des petits ou gros projets de mon côté, pour apprendre de',
      },
      firstSpan: {
        english: ' new technologies',
        french: ' nouvelles technologies',
      },
      secondPart: {
        english: '. My most recent discovery is ',
        french: '. Ma découverte la plus récente est ',
      },
      secondSpan: {
        english: 'Next Js.',
        french: 'Next Js.',
      },
    },
  },
  {
    title: {
      english: 'Discoveries',
      french: 'Découvertes',
    },
    description: {
      firstPart: {
        english: 'I love to discover new things, especially in',
        french: 'J’adore découvrir de nouvelles choses, surtout dans le',
      },
      firstSpan: {
        english: ' web development',
        french: ' développement web',
      },
      secondPart: {
        english: ', but also through my various readings. I read a lot of ',
        french: ', mais aussi à travers mes différentes lectures. Je lis beaucoup de ',
      },
      secondSpan: {
        english: 'novels, mangas and webtoons.',
        french: 'romans, de mangas et de webtoons.',
      },
    },
  },
];

export default activities;
