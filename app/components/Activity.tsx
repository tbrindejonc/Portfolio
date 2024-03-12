'use client';

import {grid, hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {Activity} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';

type Props = {
  activity: Activity;
};

export default function Activity({activity}: Props) {
  const {langage} = useLanguage();

  const containerStyle = grid({
    justifyItems: 'center',
    columns: 1,
    gap: 2,
    px: 8,
  });

  const svgStyle = css({
    stroke: {
      base: 'neutral.800',
      _dark: 'neutral.200',
    },
    height: 12,
    width: 12,
  });

  const dividerStyle = css({
    bgColor: 'p_purple.main',
    height: '5vh',
    width: 1,
  });

  const divHeadingStyle = hstack({
    color: {
      base: 'neutral.800',
      _dark: 'neutral.200',
    },
    fontSize: '2xl',
    gap: 8,
    w: 'full',
  });

  const paragraphStyle = css({
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    lineHeight: '1.7em',
    fontSize: 'lg',
    textWrap: 'balance',
  });

  return (
    <div className={containerStyle}>
      <div className={divHeadingStyle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={svgStyle}
        >
          <rect width='18' height='18' x='3' y='3' rx='2' />
          <path d='m10 10-2 2 2 2' />
          <path d='m14 14 2-2-2-2' />
        </svg>
        <div className={dividerStyle}></div>
        <h3>{activity.title[langage]}</h3>
      </div>
      <p className={paragraphStyle}>
        {activity.description.firstPart[langage]}
        <span>{activity.description.firstSpan[langage]}</span>
        {activity.description.secondPart[langage]}
        <span>{activity.description.secondSpan[langage]}</span>
      </p>
    </div>
  );
}
