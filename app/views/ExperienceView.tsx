'use client';

import Carousel from '@components/carousel/Carousel';
import useLanguage from '@hooks/useLanguage';
import explanation from '@texts/portfolio/experience/explanation';
import {
  explanationStyle,
  explanationTitleStyle,
  firstSpanStyle,
  secondSpanStyle,
  sectionStyle,
} from '@styles/views/ExperienceView.styles';
import ExperienceCards from '@components/experience_cards/ExperienceCards';

export default function ExperienceView() {
  const {language} = useLanguage();

  return (
    <section id={'experience'} className={sectionStyle}>
      <div className={explanationStyle}>
        <h2 className={explanationTitleStyle}>{explanation.title[language]}</h2>
        <p>
          {explanation.content.firstPart[language]}
          <span className={firstSpanStyle}>{explanation.content.firstSpan[language]}</span>
          {explanation.content.secondPart[language]}
          <span className={secondSpanStyle}>{explanation.content.secondSpan[language]}</span>
          {explanation.content.lastPart[language]}
        </p>
      </div>
      <Carousel />
      <ExperienceCards />
    </section>
  );
}
