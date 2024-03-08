'use client';

import Image from 'next/image';
import useLanguage from '@hooks/useLanguage';
import {
  circleStyle,
  circleTitleStyle,
  imageDivStyle,
  imageStyle,
  nameDivStyle,
  nameStyle,
  sectionStyle,
} from '@styles/views/LandingView.styles';
import roleTitle from '@texts/portfolio/landing/roleTitle';

export default function LandingView() {
  const {langage} = useLanguage();

  return (
    <section id={'landing'} className={sectionStyle}>
      <div className={imageDivStyle}>
        <Image
          src={'/images/portfolio/landing/profile.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={imageStyle}
        />
      </div>
      <div className={nameDivStyle}>
        <h1 className={nameStyle}>Timothée Brindejonc</h1>
      </div>
      <div className={circleStyle}>
        <h2 className={circleTitleStyle}>{roleTitle[langage]}</h2>
      </div>
    </section>
  );
}
