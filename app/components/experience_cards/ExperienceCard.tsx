'use client';

import {vstack} from '@/styled-system/patterns';
import {Slide} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {css} from '@/styled-system/css';

type Props = {
  slide: Slide;
};

export default function ExperienceCard({slide}: Props) {
  const {langage} = useLanguage();

  const cardStyle = vstack({
    border: '3px solid',
    borderColor: 'p_purple.main',
    borderRadius: '2xl',
    h: '50vh',
    p: 6,
    px: 8,
    w: '1/3',
  });

  return (
    <div className={cardStyle}>
      <h2>{slide.title[langage]}</h2>
      <p>
        {slide.content.firstPart[langage]}{' '}
        <span className={`${css({fontWeight: 'bold'})}`}>{slide.content.firstSpan[langage]}</span>
        {slide.content.secondPart[langage]}{' '}
        <span className={`${css({fontWeight: 'bold'})} `}>{slide.content.secondSpan[langage]}</span>
        {slide.content.lastPart[langage]}
      </p>
    </div>
  );
}
