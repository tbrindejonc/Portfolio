'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  contentWrapperStyle,
  imageStyle,
  journeyStyle,
  journeyTitleStyle,
  linkStyle,
  paragraphStyle,
  reversedTextSectionStyle,
  textSectionStyle,
} from '@styles/views/JourneyView.styles';
import {firstParagraph, journeyTitle, secondParagraph, seeButton} from '@app/texts/portfolio/journey/journeyTexts';
import useLanguage from '@hooks/useLanguage';

export default function JourneyView() {
  const {langage} = useLanguage();

  return (
    <section id={'journey'} className={journeyStyle}>
      <div className={contentWrapperStyle}>
        <h1 className={journeyTitleStyle}>{journeyTitle[langage]}</h1>
        <div className={textSectionStyle}>
          <p className={paragraphStyle}>{firstParagraph[langage]}</p>
          <Image
            src={'/images/portfolio/journey/scholarship.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={imageStyle}
          />
        </div>
        <div className={reversedTextSectionStyle}>
          <p className={paragraphStyle}>{secondParagraph[langage]}</p>
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
