import useLangage from '@hooks/useLangage';
import {
  paragraphStyle,
  separatorStyle,
  slidesStyles,
  slideStyle,
  slidesVariants,
  slideTitleStyle,
  svgStyle,
} from '@styles/components/carousel/CarouselSlide.styles';
import {Slide} from '@appTypes/portfolio';
import {css} from '@/styled-system/css';
import Link from 'next/link';
import {seeMoreButton} from '@texts/portfolio/experience/experienceSlides';

type Props = {
  slide: Slide;
  index: number;
  variant: 'first' | 'second' | 'third';
};

export default function CarouselSlide({slide, index, variant}: Props) {
  const {langage} = useLangage();

  return (
    <div id={`slide-${index}`} className={`${slideStyle} ${slidesStyles[index]}`}>
      <h2 className={slideTitleStyle}>{slide.title[langage]}</h2>
      <div className={`${separatorStyle} ${slidesVariants({separator: variant})}`}></div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`${svgStyle} ${slidesVariants({showGraduation: variant})}`}
      >
        <path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' />
        <path d='M22 10v6' />
        <path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5' />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`${svgStyle} ${slidesVariants({showSpeech: variant})}`}
      >
        <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`${svgStyle} ${slidesVariants({showMore: variant})}`}
      >
        <circle cx='12' cy='12' r='10' />
        <path d='m10 8 4 4-4 4' />
      </svg>
      <p className={paragraphStyle}>
        {slide.content.firstPart[langage]}{' '}
        <span className={`${css({fontWeight: 'bold'})} ${slidesVariants({firstSpan: variant})}`}>
          {slide.content.firstSpan[langage]}
        </span>
        {slide.content.secondPart[langage]}{' '}
        <span className={`${css({fontWeight: 'bold'})} ${slidesVariants({secondSpan: variant})}`}>
          {slide.content.secondSpan[langage]}
        </span>
        {slide.content.lastPart[langage]}
      </p>
      <Link href={'/experiences'} className={slidesVariants({showMoreButton: variant})}>
        {seeMoreButton[langage]}
      </Link>
    </div>
  );
}
