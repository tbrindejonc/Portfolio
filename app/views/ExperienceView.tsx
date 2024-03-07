'use client';

import {vstack} from '@/styled-system/patterns';
import Carousel from '@components/carousel/Carousel';
import {css} from '@/styled-system/css';

export default function ExperienceView() {
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
        <h2 className={explanationTitleStyle}>Mes expériences</h2>
        <p>
          Au cours de ma <span className={firstSpanStyle}>formation</span>, et de ma{' '}
          <span className={secondSpanStyle}>propre initiative</span>, j’ai pu acquérir de l’expérience en milieu
          professionnel.
        </p>
      </div>
      <Carousel />
    </section>
  );
}
