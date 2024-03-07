'use client';

import {useState} from 'react';
import {css} from '@/styled-system/css';
import {AppText} from '@appTypes/portfolio';
import CarouselControls from '@components/carousel/CarouselControls';
import experienceSlides from '@texts/portfolio/experience/experienceSlides';
import CarouselSlide from '@components/carousel/CarouselSlide';

export type Slide = {
  title: AppText;
  content: AppText;
};

export default function Carousel() {
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

  return (
    <>
      <div id={'carousel'} className={carouselStyle}>
        {slides.map((slide: Slide, index: number) => {
          return <CarouselSlide key={index} index={index} slide={slide} />;
        })}
      </div>
      <CarouselControls changeSlide={slide} activeSlide={activeSlide} />
    </>
  );
}
