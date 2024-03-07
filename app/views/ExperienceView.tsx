'use client';

import {vstack} from '@/styled-system/patterns';
import Carousel from '@components/Carousel';

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
    transition: 'all 0.5s',
  });

  return (
    <section id={'experience'} className={sectionStyle}>
      <h1>Experience</h1>
      <Carousel />
    </section>
  );
}
