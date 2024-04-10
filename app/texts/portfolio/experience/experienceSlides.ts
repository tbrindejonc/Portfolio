import {AppText, Slide} from '@appTypes/portfolio';

const experienceSlides: Slide[] = [
  {
    title: {
      english: 'Know more',
      french: 'Pour en savoir plus',
    },
    content: {
      firstPart: {
        english: 'Of course, all my ',
        french: 'Bien sûr, toutes mes ',
      },
      firstSpan: {
        english: 'experiences',
        french: 'experiences',
      },
      secondPart: {
        english: ' are not summed up in so few words. If you want to ',
        french: ' ne se résument pas en si peu de mots. Si vous souhaitez ',
      },
      secondSpan: {
        english: 'know more',
        french: 'en savoir plus',
      },
      lastPart: {
        english: ' about what I had the opportunity to do during these experiences, you can discover it below.',
        french: ' sur ce que j’ai eu l’occasion de faire durant ces expériences, vous pouvez le découvrir ci-dessous.',
      },
    },
    variant: 'third',
  },
  {
    title: {
      english: 'During my formation',
      french: 'Durant ma formation',
    },
    content: {
      firstPart: {
        english: 'To validate my Bachelor’s degree in computer scienglishce, I had to complete a 10-week ',
        french: 'Pour valider ma formation de BUT informatique, j’ai dû effectuer un ',
      },
      firstSpan: {
        english: 'internship',
        french: 'stage',
      },
      secondPart: {
        english: ' in my 2nd year. I then chose to take my 3rd year in ',
        french: ' de 10 semaines en2ème année. J’ai ensuite choisi de passer ma 3ème année en ',
      },
      secondSpan: {
        english: 'alternating',
        french: 'alternance',
      },
      lastPart: {
        english: ' (in progress). Although being alone on my alternate project, I am hopeful of learning a lot.',
        french: ' (en cours). Bien que tout seul sur mon projet d’alternance, j’ai bon espoir d’en apprendre beaucoup.',
      },
    },
    variant: 'first',
  },
  {
    title: {
      english: 'On my initiative',
      french: 'De mon initiative',
    },
    content: {
      firstPart: {
        english: 'During my 2nd year ',
        french: 'Lors de mon ',
      },
      firstSpan: {
        english: 'internship',
        french: 'stage',
      },
      secondPart: {
        english:
          ', I got closer to my colleagues and was charmed by the atmosphere in the team. I took the opportunity to negotiate a ',
        french:
          ' de 2ème année, je me suis rapproché de mes collègues et j’ai été charmé par l’ambiance dans l’équipe. J’en ai profité pour négocier un ',
      },
      secondSpan: {
        english: '1-month fixed-term contract',
        french: 'CDD de 1 mois',
      },
      lastPart: {
        english: ' in August 2023 during which I discovered new programming concepts.',
        french: ' en Août 2023 durant lequel j’ai découvert de nouvelles notions de programmation.',
      },
    },
    variant: 'second',
  },
];

const seeMoreButton: AppText = {
  english: 'Discover my experiences',
  french: 'Découvrir mes expériences',
};

export {experienceSlides, seeMoreButton};
