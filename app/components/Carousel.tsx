'use client';

import {useState} from 'react';
import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

export default function Carousel() {
  type Slide = {
    title: string;
    content: string;
  };

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>([
    {
      title: 'Slide 3',
      content: 'Content 3',
    },
    {
      title: 'Slide 1',
      content: 'Content 1',
    },
    {
      title: 'Slide 2',
      content: 'Content 2',
    },
  ]);

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
    border: '2px solid',
    borderColor: 'p_blue.200',
    borderRadius: 'xl',
    color: 'neutral.light',
    gap: 6,
    width: '90vw',
  });

  const carouselControlsStyle = hstack({
    gap: 5,
    pb: 12,
  });

  const arrowStyle = css({
    fill: 'p_purple.light',
    cursor: 'pointer',
    width: 10,
    height: 10,
  });

  const previousStyle = css({
    rotate: '-90deg',
    filter: 'drop-shadow(-5px 0 5px token(colors.p_purple.main))',
  });

  const nextStyle = css({
    rotate: '90deg',
    filter: 'drop-shadow(5px 0 5px token(colors.p_purple.main))',
  });

  const baseSlideItemStyle = css({
    borderRadius: 'xl',
    height: 3,
    width: 14,
  });

  const activeSlideItemStyle = css({
    bgGradient: 'to-r',
    gradientFrom: 'p_blue.main',
    gradientTo: 'p_purple.main',
    shadow: '0 1px 4px 2px token(colors.p_blue.light)',
  });

  const inactiveSlideItemStyle = css({
    bgColor: 'p_purple.light',
    shadow: '0 0 4px 2px token(colors.p_purple.main)',
  });

  return (
    <>
      <div id={'carousel'} className={carouselStyle}>
        {slides.map((slide: Slide, index: number) => {
          return (
            <div id={`slide-${index}`} key={index} className={`${slideStyle} ${slidesStyles[index]}`}>
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          );
        })}
      </div>
      <div className={carouselControlsStyle}>
        <svg
          className={`${arrowStyle} ${previousStyle}`}
          onClick={() => {
            return slide('prev');
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
        >
          <polygon points='50 15, 100 100, 0 100' />
        </svg>
        {slides.map((slide: Slide, index: number) => {
          return (
            <div
              key={index}
              className={`${baseSlideItemStyle} ${activeSlide === index ? activeSlideItemStyle : inactiveSlideItemStyle}`}
            ></div>
          );
        })}
        <svg
          className={`${arrowStyle} ${nextStyle}`}
          onClick={() => {
            return slide('next');
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 100'
        >
          <polygon points='50 15, 100 100, 0 100' />
        </svg>
      </div>
    </>
  );
}
