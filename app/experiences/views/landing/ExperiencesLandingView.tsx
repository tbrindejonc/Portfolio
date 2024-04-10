'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  exp_vExpLanding_button,
  exp_vExpLanding_container,
  exp_vExpLanding_experienceLanding,
  exp_vExpLanding_image,
  exp_vExpLanding_paragraph,
  exp_vExpLanding_svg,
  exp_vExpLanding_textContainer,
  exp_vExpLanding_title,
} from './ExperienceLandingView.styles';
import landingTexts from '../../texts/landingTexts';
import useLanguage from '@hooks/useLanguage';

export default function ExperiencesLandingView() {
  const {language} = useLanguage();

  return (
    <section id={'experiences-landing'} className={exp_vExpLanding_experienceLanding}>
      <h1 className={exp_vExpLanding_title}>{landingTexts.title[language]}</h1>
      <div className={exp_vExpLanding_container}>
        <Image
          src={'/images/portfolio/experiences/costume.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={exp_vExpLanding_image}
        />
        <div className={exp_vExpLanding_textContainer}>
          <p className={exp_vExpLanding_paragraph}>{landingTexts.explanations[language]}</p>
          <Link href={'#experiences-display'} className={`${exp_vExpLanding_button} group`}>
            <h2>{landingTexts.link[language]}</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={exp_vExpLanding_svg}
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
