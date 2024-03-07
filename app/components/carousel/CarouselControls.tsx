import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {Slide} from '@components/carousel/Carousel';

type Props = {
  slides: Slide[];
  slide: (direction: 'prev' | 'next') => void;
  activeSlide: number;
};

export default function CarouselControls({slides, slide, activeSlide}: Props) {
  const carouselControlsStyle = hstack({
    gap: 5,
    pt: 6,
    pb: 12,
  });

  const arrowStyle = css({
    fill: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
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
    shadow: {
      base: '0 1px 4px 2px token(colors.p_blue.dark)',
      _dark: '0 1px 4px 2px token(colors.p_blue.light)',
    },
  });

  const inactiveSlideItemStyle = css({
    bgColor: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
    shadow: '0 0 4px 2px token(colors.p_purple.main)',
  });

  return (
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
  );
}
