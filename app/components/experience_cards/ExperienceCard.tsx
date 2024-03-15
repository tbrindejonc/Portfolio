'use client';

import {Slide} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {css} from '@/styled-system/css';
import {ReactNode} from 'react';
import {seeMoreButton} from '@texts/portfolio/experience/experienceSlides';
import Link from 'next/link';
import {
  cardStyle,
  cardVariants,
  paragraphStyle,
  seeMoreStyle,
  separatorStyle,
  svgStyle,
  titleStyle,
} from '@styles/components/experience_cards/ExperienceCard.styles';

type Props = {
  slide: Slide;
  cardOrder: 'first' | 'second' | 'third';
  children: ReactNode;
};

type ParagraphProps = {
  slide: Slide;
  cardOrder: 'first' | 'second' | 'third';
};

/**
 * Experience card base component
 *
 * @param {Slide} slide the current slide information (text)
 * @param {ReactNode} children the children components (icon, paragraph, button)
 * @param {'first' | 'second' | 'third'} cardOrder the order of current card in the list
 */
export default function ExperienceCard({slide, children, cardOrder}: Props) {
  const {langage} = useLanguage();

  return (
    <div className={cardStyle}>
      <h2 className={titleStyle}>{slide.title[langage]}</h2>
      <div className={`${separatorStyle} ${cardVariants({separator: cardOrder})}`}></div>
      {children}
    </div>
  );
}

/**
 * Formation icon svg component
 */
ExperienceCard.FormationIcon = function ExperienceCardFormationIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${svgStyle} ${cardVariants({icon: 'formation'})}`}
    >
      <path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' />
      <path d='M22 10v6' />
      <path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5' />
    </svg>
  );
};

/**
 * Speech icon svg component
 */
ExperienceCard.SpeechIcon = function ExperienceCardSpeechIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${svgStyle} ${cardVariants({icon: 'speech'})}`}
    >
      <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
    </svg>
  );
};

/**
 * More icon svg component
 */
ExperienceCard.MoreIcon = function ExperienceCardMoreIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`${svgStyle} ${cardVariants({icon: 'more'})}`}
    >
      <circle cx='12' cy='12' r='10' />
      <path d='m10 8 4 4-4 4' />
    </svg>
  );
};

/**
 * Paragraph component for text content
 *
 * @param {Slide} slide the current slide information (text)
 * @param {'first' | 'second' | 'third'} cardOrder the order of current card in the list
 */
ExperienceCard.Paragraph = function ExperienceCardParagraph({slide, cardOrder}: ParagraphProps) {
  const {langage} = useLanguage();

  return (
    <p className={paragraphStyle}>
      {slide.content.firstPart[langage]}{' '}
      <span className={`${css({fontWeight: 'bold'})} ${cardVariants({firstSpan: cardOrder})}`}>
        {slide.content.firstSpan[langage]}
      </span>
      {slide.content.secondPart[langage]}{' '}
      <span className={`${css({fontWeight: 'bold'})} ${cardVariants({secondSpan: cardOrder})}`}>
        {slide.content.secondSpan[langage]}
      </span>
      {slide.content.lastPart[langage]}
    </p>
  );
};

/**
 * Button (link) to see more experiences, optional in card
 */
ExperienceCard.SeeMoreButton = function ExperienceCardSeeMoreButton() {
  const {langage} = useLanguage();

  return (
    <Link href={'/experiences'} className={seeMoreStyle}>
      {seeMoreButton[langage]}
    </Link>
  );
};
