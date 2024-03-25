'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  vJourney_button,
  vJourney_contentWrapper,
  vJourney_image,
  vJourney_journey,
  vJourney_paragraph,
  vJourney_reversedTextAndImage,
  vJourney_textAndImage,
  vJourney_title,
} from './JourneyView.styles';
import {firstParagraph, journeyTitle, secondParagraph, seeButton} from '@texts/portfolio/journey/journeyTexts';
import useLanguage from '@hooks/useLanguage';

export default function JourneyView() {
  const {language} = useLanguage();

  return (
    <section id={'journey'} className={vJourney_journey}>
      <div className={vJourney_contentWrapper}>
        <h1 className={vJourney_title}>{journeyTitle[language]}</h1>
        <div className={vJourney_textAndImage}>
          <p className={vJourney_paragraph}>{firstParagraph[language]}</p>
          <Image
            src={'/images/portfolio/journey/scholarship.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={vJourney_image}
          />
        </div>
        <div className={vJourney_reversedTextAndImage}>
          <p className={vJourney_paragraph}>{secondParagraph[language]}</p>
          <Image
            src={'/images/portfolio/journey/webdev.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={vJourney_image}
          />
        </div>
        <Link href={'/skills'} className={vJourney_button}>
          {seeButton[language]}
        </Link>
      </div>
    </section>
  );
}
