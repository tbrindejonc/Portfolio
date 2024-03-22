'use client';

import {Slide} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {css} from '@/styled-system/css';
import {ReactNode} from 'react';
import {seeMoreButton} from '@texts/portfolio/experience/experienceSlides';
import Link from 'next/link';
import {
  cExperienceCard_button,
  cExperienceCard_card,
  cExperienceCard_paragraph,
  cExperienceCard_separator,
  cExperienceCard_svg,
  cExperienceCard_title,
  cExperienceCard_variants,
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
  const {language} = useLanguage();

  return (
    <div className={cExperienceCard_card}>
      <h2 className={cExperienceCard_title}>{slide.title[language]}</h2>
      <div className={`${cExperienceCard_separator} ${cExperienceCard_variants({separator: cardOrder})}`}></div>
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
      className={`${cExperienceCard_svg} ${cExperienceCard_variants({icon: 'formation'})}`}
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
      className={`${cExperienceCard_svg} ${cExperienceCard_variants({icon: 'speech'})}`}
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
      className={`${cExperienceCard_svg} ${cExperienceCard_variants({icon: 'more'})}`}
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
  const {language} = useLanguage();

  return (
    <p className={cExperienceCard_paragraph}>
      {slide.content.firstPart[language]}{' '}
      <span className={`${css({fontWeight: 'bold'})} ${cExperienceCard_variants({firstSpan: cardOrder})}`}>
        {slide.content.firstSpan[language]}
      </span>
      {slide.content.secondPart[language]}{' '}
      <span className={`${css({fontWeight: 'bold'})} ${cExperienceCard_variants({secondSpan: cardOrder})}`}>
        {slide.content.secondSpan[language]}
      </span>
      {slide.content.lastPart[language]}
    </p>
  );
};

/**
 * Button (link) to see more experiences, optional in card
 */
ExperienceCard.SeeMoreButton = function ExperienceCardSeeMoreButton() {
  const {language} = useLanguage();

  return (
    <Link href={'/experiences'} className={cExperienceCard_button}>
      {seeMoreButton[language]}
    </Link>
  );
};
