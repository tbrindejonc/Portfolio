import useLangage from '@hooks/useLangage';
import {
  paragraphStyle,
  separatorStyle,
  slidesStyles,
  slideStyle,
  slideTitleStyle,
  svgStyle,
} from '@styles/components/carousel/CarouselSlide.styles';
import {Slide} from '@appTypes/portfolio';

type Props = {
  slide: Slide;
  index: number;
};

export default function CarouselSlide({slide, index}: Props) {
  const {langage} = useLangage();

  return (
    <div id={`slide-${index}`} className={`${slideStyle} ${slidesStyles[index]}`}>
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
      <p className={paragraphStyle}>
        {slide.content.firstPart[langage]} <span>{slide.content.firstSpan[langage]}</span>
        {slide.content.secondPart[langage]} <span>{slide.content.secondSpan[langage]}</span>
        {slide.content.lastPart[langage]}
      </p>
    </div>
  );
}
