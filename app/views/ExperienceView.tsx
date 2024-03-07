'use client';

import {vstack} from '@/styled-system/patterns';
import Carousel from '@components/carousel/Carousel';
import {css} from '@/styled-system/css';
import useLangage from '@hooks/useLangage';
import explanation from '@texts/portfolio/experience/explanation';

export default function ExperienceView() {
  const {langage} = useLangage();

  const sectionStyle = vstack({
    bgColor: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    gap: 4,
    overflow: 'hidden',
    pt: 20,
    transition: 'all 0.5s',
  });

  const explanationStyle = vstack({
    border: '3px solid',
    borderColor: {
      base: 'p_purple.700',
      _dark: 'p_purple.200',
    },
    borderRadius: 'xl',
    color: {
      base: 'neutral.700',
      _dark: 'neutral.light',
    },
    fontSize: 'xl',
    fontWeight: 'bold',
    gap: 4,
    w: '90vw',
    p: 3,
  });

  const explanationTitleStyle = css({
    fontFamily: 'bricolage',
    fontSize: '3xl',
  });

  const firstSpanStyle = css({
    color: 'p_blue.main',
  });

  const secondSpanStyle = css({
    color: 'p_purple.main',
  });

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
