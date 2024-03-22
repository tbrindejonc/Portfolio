import {
  cCarouselControls_activeSlideItem,
  cCarouselControls_arrow,
  cCarouselControls_carouselControls,
  cCarouselControls_inactiveSlideItem,
  cCarouselControls_next,
  cCarouselControls_previous,
  cCarouselControls_slideItemBase,
} from '@styles/components/carousel/CarouselControls.styles';
import {experienceSlides} from '@texts/portfolio/experience/experienceSlides';
import {Slide} from '@appTypes/portfolio';

type Props = {
  changeSlide: (direction: 'prev' | 'next') => void;
  activeSlide: number;
};

export default function CarouselControls({changeSlide, activeSlide}: Props) {
  return (
    <div className={cCarouselControls_carouselControls}>
      <svg
        className={`${cCarouselControls_arrow} ${cCarouselControls_previous}`}
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
            className={`${cCarouselControls_slideItemBase} ${activeSlide === index ? cCarouselControls_activeSlideItem : cCarouselControls_inactiveSlideItem}`}
          ></div>
        );
      })}
      <svg
        className={`${cCarouselControls_arrow} ${cCarouselControls_next}`}
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
