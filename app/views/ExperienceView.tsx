'use client';

import {vstack} from '@/styled-system/patterns';
import Carousel from '@components/Carousel';

export default function ExperienceView() {
  const sectionStyle = vstack({
    bgColor: 'p_purple.dark',
    color: 'neutral.light',
    gap: 4,
    overflow: 'hidden',
  });

  return (
    <section id={'experience'} className={sectionStyle}>
      <h1>Experience</h1>
      <Carousel />
    </section>
  );
}
