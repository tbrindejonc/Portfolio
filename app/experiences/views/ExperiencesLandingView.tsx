'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  experiencesLandingStyle,
  globalWrapperStyle,
  imageStyle,
  linkToNextStyle,
  paragraphStyle,
  svgStyle,
  textContainerStyle,
  titleStyle,
} from '../styles/views/ExperienceLandingView.styles';
import landingTexts from '../texts/landingTexts';
import useLanguage from '@hooks/useLanguage';

export default function ExperiencesLandingView() {
  const {language} = useLanguage();

  return (
    <section id={'experiences-landing'} className={experiencesLandingStyle}>
      <h1 className={titleStyle}>{landingTexts.title[language]}</h1>
      <div className={globalWrapperStyle}>
        <Image
          src={'/images/portfolio/experiences/costume.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={imageStyle}
        />
        <div className={textContainerStyle}>
          <p className={paragraphStyle}>{landingTexts.explanations[language]}</p>
          <Link href={'#experiences-display'} className={`${linkToNextStyle} group`}>
            <h2>{landingTexts.link[language]}</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={svgStyle}
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
