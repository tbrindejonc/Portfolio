'use client';

import {vLegal_bigHeading, vLegal_firstSection, vLegal_littleHeading, vLegal_section} from '../GlobalView.styles';
import legalMentionsTexts from '@app/legal/texts/legalMentionsTexts';
import useLanguage from '@hooks/useLanguage';

export default function LegalMentionsView() {
  const {language} = useLanguage();

  return (
    <section id={'legal-mentions'} className={vLegal_firstSection}>
      <h1 className={vLegal_bigHeading}>{legalMentionsTexts.title[language]}</h1>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.firstSection.title[language]}</h2>
        <p>{legalMentionsTexts.firstSection.firstParagraph[language]}</p>
        <p>{legalMentionsTexts.firstSection.secondParagraph[language]}</p>
        <p>{legalMentionsTexts.firstSection.lastParagraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.secondSection.title[language]}</h2>
        <p>{legalMentionsTexts.secondSection.paragraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.thirdSection.title[language]}</h2>
        <p>{legalMentionsTexts.thirdSection.firstParagraph[language]}</p>
        <p>{legalMentionsTexts.thirdSection.secondParagraph[language]}</p>
        <p>{legalMentionsTexts.thirdSection.lastParagraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.fourthSection.title[language]}</h2>
        <p>{legalMentionsTexts.fourthSection.paragraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.fifthSection.title[language]}</h2>
        <p>{legalMentionsTexts.fifthSection.firstParagraph[language]}</p>
        <p>{legalMentionsTexts.fifthSection.secondParagraph[language]}</p>
        <p>{legalMentionsTexts.fifthSection.lastParagraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.sixthSection.title[language]}</h2>
        <p>{legalMentionsTexts.sixthSection.firstParagraph[language]}</p>
        <p>{legalMentionsTexts.sixthSection.lastParagraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.seventhSection.title[language]}</h2>
        <p>{legalMentionsTexts.seventhSection.firstParagraph[language]}</p>
        <p>{legalMentionsTexts.seventhSection.lastParagraph[language]}</p>
      </section>
      <section id={'cookies'} className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.eighthSection.title[language]}</h2>
        <p>{legalMentionsTexts.eighthSection.firstParagraph[language]}</p>
        <p>{legalMentionsTexts.eighthSection.lastParagraph[language]}</p>
      </section>
      <section className={vLegal_section}>
        <h2 className={vLegal_littleHeading}>{legalMentionsTexts.ninthSection.title[language]}</h2>
        <p>{legalMentionsTexts.ninthSection.paragraph[language]}</p>
      </section>
    </section>
  );
}
