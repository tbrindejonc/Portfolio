'use client';

import {useState} from 'react';
import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {AppText} from '@appTypes/portfolio';
import useLangage from '@hooks/useLangage';
import CarouselControls from '@components/carousel/CarouselControls';
import experienceSlides from '@texts/portfolio/experience/experienceSlides';

export type Slide = {
  title: AppText;
  content: AppText;
};

export default function Carousel() {
  const {langage} = useLangage();

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>(experienceSlides);

  // in milliseconds
  const transitionDuration = 500;

  const slide = (direction: 'prev' | 'next') => {
    const currentSlide = document.getElementById('slide-1');

    const {slide, transform, currentTransform} = {
      prev: {
        slide: document.getElementById('slide-0'),
        transform: 'translateX(100%)',
        currentTransform: 'translateX(110%)',
      },
      next: {
        slide: document.getElementById('slide-2'),
        transform: 'translateX(-100%)',
        currentTransform: 'translateX(-110%)',
      },
    }[direction];

    slide!.style.transition = `transform ${transitionDuration / 1000}s`;
    slide!.style.transform = transform;

    currentSlide!.style.transition = `transform ${transitionDuration / 1000}s`;
    currentSlide!.style.transform = currentTransform;

    setTimeout(() => {
      slide!.style.transition = 'none';
      currentSlide!.style.transition = 'none';

      const newArray: Slide[] =
        direction === 'prev' ? [...slides.slice(-1), ...slides.slice(0, -1)] : slides.slice(1).concat(slides[0]);
      slide!.style.transform = direction === 'prev' ? 'translateX(-100%)' : 'translateX(100%)';
      currentSlide!.style.transform = 'translateX(0)';

      setActiveSlide(
        direction === 'prev'
          ? activeSlide === 0
            ? slides.length - 1
            : activeSlide - 1
          : activeSlide === slides.length - 1
            ? 0
            : activeSlide + 1,
      );

      setSlides(newArray);
    }, transitionDuration);
  };

  const carouselStyle = css({
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'row',
  });

  const slidesStyles = [
    css({
      transform: 'translateX(-100%)',
      zIndex: 1,
    }),
    css({
      transform: 'translateX(0)',
    }),
    css({
      transform: 'translateX(100%)',
      zIndex: 1,
    }),
  ];

  const slideStyle = vstack({
    bgColor: 'transparent',
    border: '3px solid',
    borderColor: {
      base: 'p_blue.700',
      _dark: 'p_blue.200',
    },
    borderRadius: 'xl',
    color: {
      base: 'neutral.700',
      _dark: 'neutral.light',
    },
    width: '90vw',
    p: 3,
  });

  const slideTitleStyle = css({
    fontSize: '2xl',
    fontWeight: 'bold',
  });

  const separatorStyle = css({
    height: '5px',
    width: '2/3',
    bgColor: 'p_purple.main',
  });

  const svgStyle = css({
    width: 24,
    height: 'auto',
    strokeWidth: 1,
    stroke: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
  });

  const paragraphStyle = css({
    fontSize: 'lg',
    justifySelf: 'end',
  });

  return (
    <>
      <div id={'carousel'} className={carouselStyle}>
        {slides.map((slide: Slide, index: number) => {
          return (
            <div id={`slide-${index}`} key={index} className={`${slideStyle} ${slidesStyles[index]}`}>
              <h2 className={slideTitleStyle}>{slide.title[langage]}</h2>
              <div className={separatorStyle}></div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={svgStyle}
              >
                <path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' />
                <path d='M22 10v6' />
                <path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5' />
              </svg>
              <p className={paragraphStyle}>{slide.content[langage]}</p>
            </div>
          );
        })}
      </div>
      <CarouselControls changeSlide={slide} activeSlide={activeSlide} />
    </>
  );
}
