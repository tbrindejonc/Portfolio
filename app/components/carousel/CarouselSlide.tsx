import {Slide} from '@components/carousel/Carousel';
import useLangage from '@hooks/useLangage';
import {css} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

type Props = {
  slide: Slide;
  index: number;
};

export default function CarouselSlide({slide, index}: Props) {
  const {langage} = useLangage();

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
      <p className={paragraphStyle}>{slide.content[langage]}</p>
    </div>
  );
}
