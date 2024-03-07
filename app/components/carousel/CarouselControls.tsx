import {Slide} from '@components/carousel/Carousel';
import {
  activeSlideItemStyle,
  arrowStyle,
  baseSlideItemStyle,
  carouselControlsStyle,
  inactiveSlideItemStyle,
  nextStyle,
  previousStyle,
} from '@styles/components/carousel/CarouselControls.styles';

type Props = {
  slides: Slide[];
  slide: (direction: 'prev' | 'next') => void;
  activeSlide: number;
};

export default function CarouselControls({slides, slide, activeSlide}: Props) {
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
