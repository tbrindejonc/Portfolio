'use client';

import {ActivityObject, AppText} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {ReactNode} from 'react';
import {
  cActivity_activity,
  cActivity_devIcon,
  cActivity_discoveriesIcon,
  cActivity_divider,
  cActivity_gameIcon,
  cActivity_heading,
  cActivity_paragraph,
  cActivity_svgBase,
  cActivity_variants,
} from './Activity.styles';

type Props = {
  activity: ActivityObject;
  children: ReactNode;
  variant: 'game' | 'dev' | 'discoveries';
};

type HeadingProps = {
  children: ReactNode;
  title: AppText;
  variant: 'game' | 'dev' | 'discoveries';
};

/**
 * Main component for activities
 *
 * @param {ActivityObject} activity the texts corresponding to the activity
 * @param {ReactNode} children the heading for the activity
 * @param {'game' | 'dev' | 'discoveries'} variant the current activity variant
 */
export default function Activity({activity, children, variant}: Props) {
  const {language} = useLanguage();

  return (
    <div className={cActivity_activity}>
      {children}
      <p className={cActivity_paragraph}>
        {activity.description.firstPart[language]}
        <span className={cActivity_variants({firstSpan: variant})}>{activity.description.firstSpan[language]}</span>
        {activity.description.secondPart[language]}
        <span className={cActivity_variants({secondSpan: variant})}>{activity.description.secondSpan[language]}</span>
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
  const {language} = useLanguage();

  return (
    <div className={cActivity_heading}>
      {children}
      <div className={`${cActivity_divider} ${cActivity_variants({separator: variant})}`}></div>
      <h3 className={cActivity_variants({title: variant})}>{title[language]}</h3>
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
      className={`${cActivity_svgBase} ${cActivity_gameIcon}`}
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
      className={`${cActivity_svgBase} ${cActivity_devIcon}`}
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
      className={`${cActivity_svgBase} ${cActivity_discoveriesIcon}`}
    >
      <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
      <polyline points='10 2 10 10 13 7 16 10 16 2' />
    </svg>
  );
};
