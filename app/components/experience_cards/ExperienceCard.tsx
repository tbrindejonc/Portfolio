'use client';

import {vstack} from '@/styled-system/patterns';
import {Slide} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {css, cva} from '@/styled-system/css';
import {ReactNode} from 'react';
import {seeMoreButton} from '@texts/portfolio/experience/experienceSlides';
import Link from 'next/link';

type Props = {
  slide: Slide;
  cardOrder: 'first' | 'second' | 'third';
  children: ReactNode;
};

type ParagraphProps = {
  slide: Slide;
  cardOrder: 'first' | 'second' | 'third';
};

const svgStyle = css({
  width: 24,
  height: 'auto',
  strokeWidth: 1,
});

const paragraphStyle = css({
  fontSize: '2xl',
});

const cardStyle = vstack({
  border: '3px solid',
  borderColor: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: '2xl',
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  h: '50vh',
  p: 6,
  px: 8,
  w: '1/3',
});

const separatorStyle = css({
  height: 1,
  width: '3/4',
});

const titleStyle = css({
  fontFamily: 'bricolage',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const cardVariants = cva({
  base: {},
  variants: {
    separator: {
      first: {
        bgColor: 'p_blue.main',
      },
      second: {
        bgColor: 'p_purple.main',
      },
      third: {
        bgGradient: 'to-r',
        gradientFrom: 'p_purple.main',
        gradientTo: 'p_blue.main',
      },
    },
    icon: {
      formation: {
        stroke: {
          base: 'p_blue.700',
          _dark: 'p_blue.200',
        },
      },
      speech: {
        stroke: {
          base: 'p_purple.700',
          _dark: 'p_purple.200',
        },
      },
      more: {
        stroke: {
          base: 'neutral.700',
          _dark: 'neutral.200',
        },
      },
    },
    firstSpan: {
      first: {
        color: 'p_blue.main',
      },
      second: {
        color: 'p_purple.main',
      },
      third: {
        color: 'p_purple.main',
      },
    },
    secondSpan: {
      first: {
        color: 'p_blue.main',
      },
      second: {
        color: 'p_purple.main',
      },
      third: {
        color: 'p_blue.main',
      },
    },
  },
});

const seeMoreStyle = css({
  border: '2px solid',
  borderColor: {
    base: 'p_purple.700',
    _dark: 'p_purple.light',
    _hover: {
      base: 'p_purple.600',
      _dark: 'p_purple.300',
    },
  },
  borderRadius: 'xl',
  color: {
    base: 'p_purple.700',
    _dark: 'p_purple.light',
    _hover: {
      base: 'p_purple.600',
      _dark: 'p_purple.300',
    },
  },
  fontSize: 'xl',
  p: 2,
  mt: 4,
  shadow: {
    _hover: {
      base: '3px 3px 10px 0',
      _dark: '3px 3px 10px 0',
    },
  },
  textAlign: 'center',
  w: 'full',
});

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

ExperienceCard.SeeMoreButton = function ExperienceCardSeeMoreButton() {
  const {langage} = useLanguage();

  return (
    <Link href={'/experiences'} className={seeMoreStyle}>
      {seeMoreButton[langage]}
    </Link>
  );
};
