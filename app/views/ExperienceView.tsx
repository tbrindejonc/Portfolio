'use client';

import Carousel from '@components/carousel/Carousel';
import useLangage from '@hooks/useLangage';
import explanation from '@texts/portfolio/experience/explanation';
import {
  explanationStyle,
  explanationTitleStyle,
  firstSpanStyle,
  secondSpanStyle,
  sectionStyle,
} from '@styles/views/ExperienceView.styles';

export default function ExperienceView() {
  const {langage} = useLangage();

  return (
    <section id={'experience'} className={sectionStyle}>
      <div className={explanationStyle}>
        <h2 className={explanationTitleStyle}>{explanation.title[langage]}</h2>
        <p>
          {explanation.content.firstPart[langage]}
          <span className={firstSpanStyle}>{explanation.content.firstSpan[langage]}</span>
          {explanation.content.secondPart[langage]}
          <span className={secondSpanStyle}>{explanation.content.secondSpan[langage]}</span>
          {explanation.content.lastPart[langage]}
        </p>
      </div>
      <Carousel />
    </section>
  );
}
