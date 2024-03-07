'use client';

import {useState} from 'react';
import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {AppText} from '@appTypes/portfolio';
import useLangage from '@hooks/useLangage';

export default function Carousel() {
  type Slide = {
    title: AppText;
    content: AppText;
  };

  const {langage} = useLangage();

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>([
    {
      title: {
        en: 'Knowing more',
        fr: 'Pour en savoir plus',
      },
      content: {
        en: 'Of course, all my experiences are not summed up in so few words. If you want to know more about what I had the opportunity to do during these experiences, you can discover it below.',
        fr: 'Bien sûr, toutes mes expériences ne se résument pas en si peu de mots. Si vous souhaitez en savoir plus sur ce que j’ai eu l’occasion de faire durant ces expériences, vous pouvez le découvrir ci-dessous.',
      },
    },
    {
      title: {
        en: 'During my formation',
        fr: 'Durant ma formation',
      },
      content: {
        en: 'To validate my Bachelor’s degree in computer science, I had to complete a 10-week internship in my 2nd year. I then chose to spend my 3rd year in alternating (in progress). Although being alone on my alternate project, I am hopeful of learning a lot.',
        fr: 'Pour valider ma formation de BUT informatique, j’ai dû effectuer un stage de 10 semaines en 2ème année. J’ai ensuite choisi de passer ma 3ème année en alternance (en cours). Bien que tout seul sur mon projet d’alternance, j’ai bon espoir d’en apprendre beaucoup.',
      },
    },
    {
      title: {
        en: 'On my initiative',
        fr: 'De mon initiative',
      },
      content: {
        en: 'During my 2nd year internship, I got closer to my colleagues and was charmed by the atmosphere in the team. I took the opportunity to negotiate a 1-month fixed-term contract in August 2023 during which I discovered new programming concepts.',
        fr: 'Lors de mon stage de 2ème année, je me suis rapproché de mes collègues et j’ai été charmé par l’ambiance dans l’équipe. J’en ai profité pour négocier un CDD de 1 mois en Août 2023 durant lequel j’ai découvert de nouvelles notions de programmation.',
      },
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
    width: '90vw',
    p: 3,
  });

  const carouselControlsStyle = hstack({
    gap: 5,
    pt: 6,
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
    stroke: 'p_purple.light',
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
