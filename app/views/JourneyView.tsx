'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  contentWrapperStyle,
  imageStyle,
  journeyStyle,
  journeyTitleStyle,
  linkStyle,
  textSectionStyle,
} from '@styles/views/JourneyView.styles';
import {firstParagraph, journeyTitle, secondParagraph, seeButton} from '@app/texts/portfolio/journey/journeyTexts';
import useLangage from '@hooks/useLangage';

export default function JourneyView() {
  const {langage} = useLangage();

  return (
    <section id={'journey'} className={journeyStyle}>
      <h1 className={journeyTitleStyle}>{journeyTitle[langage]}</h1>
      <div className={contentWrapperStyle}>
        <div className={textSectionStyle}>
          <p>{firstParagraph[langage]}s</p>
          <Image
            src={'/images/portfolio/journey/scholarship.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={imageStyle}
          />
        </div>
        <div className={textSectionStyle}>
          <p>{secondParagraph[langage]}</p>
          <Image
            src={'/images/portfolio/journey/webdev.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={imageStyle}
          />
        </div>
        <Link href={'/skills'} className={linkStyle}>
          {seeButton[langage]}
        </Link>
      </div>
    </section>
  );
}
