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
import experienceSlides from '@texts/portfolio/experience/experienceSlides';

type Props = {
  changeSlide: (direction: 'prev' | 'next') => void;
  activeSlide: number;
};

export default function CarouselControls({changeSlide, activeSlide}: Props) {
  return (
    <div className={carouselControlsStyle}>
      <svg
        className={`${arrowStyle} ${previousStyle}`}
        onClick={() => {
          return changeSlide('prev');
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
      >
        <polygon points='50 15, 100 100, 0 100' />
      </svg>
      {experienceSlides.map((slide: Slide, index: number) => {
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
          return changeSlide('next');
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
      >
        <polygon points='50 15, 100 100, 0 100' />
      </svg>
    </div>
  );
}
