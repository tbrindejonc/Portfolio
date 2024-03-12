'use client';

import {grid, hstack} from '@/styled-system/patterns';
import {css, cva} from '@/styled-system/css';
import {Activity, AppText} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {ReactNode} from 'react';

type Props = {
  activity: Activity;
  children: ReactNode;
  variant: 'game' | 'dev' | 'discoveries';
};

type HeadingProps = {
  children: ReactNode;
  title: AppText;
  variant: 'game' | 'dev' | 'discoveries';
};

const containerStyle = grid({
  justifyItems: 'center',
  columns: 1,
  gap: 2,
  px: 8,
});

const svgStyle = css({
  height: 12,
  width: 12,
});

const gameIconStyle = css({
  stroke: {
    base: 'neutral.700',
    _dark: 'neutral.200',
  },
});

const devIconStyle = css({
  stroke: {
    base: 'p_blue.700',
    _dark: 'p_blue.200',
  },
});

const discoveriesIconStyle = css({
  stroke: {
    base: 'p_purple.700',
    _dark: 'p_purple.200',
  },
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

const activityVariants = cva({
  variants: {
    separator: {
      game: {
        bgGradient: 'to-b',
        gradientFrom: 'p_blue.main',
        gradientTo: 'p_purple.main',
      },
      dev: {
        bgColor: 'p_blue.main',
      },
      discoveries: {
        bgColor: 'p_purple.main',
      },
    },
    title: {
      game: {
        background: {
          base: 'linear-gradient(to right, token(colors.p_blue.700), token(colors.p_purple.700))',
          _dark: 'linear-gradient(to right, token(colors.p_blue.200), token(colors.p_purple.200))',
        },
        bgClip: {
          base: 'text',
          _dark: 'text',
        },
        color: 'transparent',
      },
      dev: {
        color: {
          base: 'p_blue.700',
          _dark: 'p_blue.200',
        },
      },
      discoveries: {
        color: {
          base: 'p_purple.700',
          _dark: 'p_purple.200',
        },
      },
    },
  },
});

/**
 * Main component for activities
 *
 * @param {Activity} activity the texts corresponding to the activity
 * @param {ReactNode} children the heading for the activity
 * @param {'game' | 'dev' | 'discoveries'} variant the current activity variant
 */
export default function Activity({activity, children, variant}: Props) {
  const {langage} = useLanguage();

  return (
    <div className={containerStyle}>
      {children}
      <p className={paragraphStyle}>
        {activity.description.firstPart[langage]}
        <span>{activity.description.firstSpan[langage]}</span>
        {activity.description.secondPart[langage]}
        <span>{activity.description.secondSpan[langage]}</span>
      </p>
    </div>
  );
}

/**
 * Heading for activities
 *
 * @param {ReactNode} children the svg icon to display
 * @param {string} title the title of the activity
 * @param {'game' | 'dev' | 'discoveries'} variant the current activity variant
 */
Activity.Heading = function ActivityHeading({children, title, variant}: HeadingProps) {
  const {langage} = useLanguage();

  return (
    <div className={divHeadingStyle}>
      {children}
      <div className={`${dividerStyle} ${activityVariants({separator: variant})}`}></div>
      <h3 className={activityVariants({title: variant})}>{title[langage]}</h3>
    </div>
  );
};

/**
 * Icon for video games activity
 */
Activity.GameIcon = function ActivityGameIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${svgStyle} ${gameIconStyle}`}
    >
      <line x1='6' x2='10' y1='11' y2='11' />
      <line x1='8' x2='8' y1='9' y2='13' />
      <line x1='15' x2='15.01' y1='12' y2='12' />
      <line x1='18' x2='18.01' y1='10' y2='10' />
      <path d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z' />
    </svg>
  );
};

/**
 * Icon for development activity
 */
Activity.DevIcon = function ActivityDevIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${svgStyle} ${devIconStyle}`}
    >
      <rect width='18' height='18' x='3' y='3' rx='2' />
      <path d='m10 10-2 2 2 2' />
      <path d='m14 14 2-2-2-2' />
    </svg>
  );
};

/**
 * Icon for discovering activity
 */
Activity.DiscoveriesIcon = function ActivityDiscoveriesIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${svgStyle} ${discoveriesIconStyle}`}
    >
      <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
      <polyline points='10 2 10 10 13 7 16 10 16 2' />
    </svg>
  );
};
