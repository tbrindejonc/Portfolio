'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  vContact_button,
  vContact_buttonBorder,
  vContact_contact,
  vContact_picture,
  vContact_title,
  vContact_titleAndButton,
} from '@styles/views/ContactView.styles';
import useLanguage from '@hooks/useLanguage';
import titleAndLink from '@texts/portfolio/contact/titleAndLink';

export default function ContactView() {
  const {language} = useLanguage();

  return (
    <section id={'contact'} className={vContact_contact}>
      <Image
        src={'/images/portfolio/contact/contact.jpg'}
        alt={'me'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={vContact_picture}
      />
      <div className={vContact_titleAndButton}>
        <h2 className={vContact_title}>{titleAndLink.title[language]}</h2>
        <Link href={'/contact'} className={`group ${vContact_buttonBorder}`}>
          <div className={vContact_button}>{titleAndLink.link[language]}</div>
        </Link>
      </div>
    </section>
  );
}
