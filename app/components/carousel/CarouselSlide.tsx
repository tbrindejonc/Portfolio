import {
  cCarouselSlide_button,
  cCarouselSlide_paragraph,
  cCarouselSlide_separator,
  cCarouselSlide_slide,
  cCarouselSlide_slides,
  cCarouselSlide_svg,
  cCarouselSlide_title,
  cCarouselSlide_variants,
} from '@styles/components/carousel/CarouselSlide.styles';
import {Language, Slide} from '@appTypes/portfolio';
import {css} from '@/styled-system/css';
import {seeMoreButton} from '@texts/portfolio/experience/experienceSlides';
import Link from 'next/link';

type Props = {
  slide: Slide;
  index: number;
  variant: 'first' | 'second' | 'third';
  language: Language;
};

export default function CarouselSlide({slide, index, variant, language}: Props) {
  return (
    <div id={`slide-${index}`} className={`${cCarouselSlide_slide} ${cCarouselSlide_slides[index]}`}>
      <h2 className={cCarouselSlide_title}>{slide.title[language]}</h2>
      <div className={`${cCarouselSlide_separator} ${cCarouselSlide_variants({separator: variant})}`}></div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`${cCarouselSlide_svg} ${cCarouselSlide_variants({showGraduation: variant})}`}
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
        className={`${cCarouselSlide_svg} ${cCarouselSlide_variants({showSpeech: variant})}`}
      >
        <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z' />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`${cCarouselSlide_svg} ${cCarouselSlide_variants({showMore: variant})}`}
      >
        <circle cx='12' cy='12' r='10' />
        <path d='m10 8 4 4-4 4' />
      </svg>
      <p className={cCarouselSlide_paragraph}>
        {slide.content.firstPart[language]}{' '}
        <span className={`${css({fontWeight: 'bold'})} ${cCarouselSlide_variants({firstSpan: variant})}`}>
          {slide.content.firstSpan[language]}
        </span>
        {slide.content.secondPart[language]}{' '}
        <span className={`${css({fontWeight: 'bold'})} ${cCarouselSlide_variants({secondSpan: variant})}`}>
          {slide.content.secondSpan[language]}
        </span>
        {slide.content.lastPart[language]}
      </p>
      <Link
        href={'/experiences'}
        className={`${cCarouselSlide_button} ${cCarouselSlide_variants({showMoreButton: variant})}`}
      >
        {seeMoreButton[language]}
      </Link>
    </div>
  );
}
