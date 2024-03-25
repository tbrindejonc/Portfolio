'use client';

import Carousel from '@components/carousel/carousel/Carousel';
import useLanguage from '@hooks/useLanguage';
import explanation from '@texts/portfolio/experience/explanation';
import {
  vExperience_experience,
  vExperience_explanations,
  vExperience_firstSpan,
  vExperience_secondSpan,
  vExperience_title,
} from './ExperienceView.styles';
import ExperienceCards from '@components/experience_cards/experience_cards/ExperienceCards';

export default function ExperienceView() {
  const {language} = useLanguage();

  return (
    <section id={'experience'} className={vExperience_experience}>
      <div className={vExperience_explanations}>
        <h2 className={vExperience_title}>{explanation.title[language]}</h2>
        <p>
          {explanation.content.firstPart[language]}
          <span className={vExperience_firstSpan}>{explanation.content.firstSpan[language]}</span>
          {explanation.content.secondPart[language]}
          <span className={vExperience_secondSpan}>{explanation.content.secondSpan[language]}</span>
          {explanation.content.lastPart[language]}
        </p>
      </div>
      <Carousel />
      <ExperienceCards />
    </section>
  );
}
