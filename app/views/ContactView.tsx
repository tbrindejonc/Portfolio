'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  contactLinkContainerStyle,
  contactLinkStyle,
  contactStyle,
  imageDivStyle,
  imageStyle,
  titleAndLinkContainerStyle,
  titleStyle,
} from '@styles/views/ContactView.styles';
import useLanguage from '@hooks/useLanguage';
import titleAndLink from '@texts/portfolio/contact/titleAndLink';

export default function ContactView() {
  const {langage} = useLanguage();

  return (
    <section id={'contact'} className={contactStyle}>
      <div className={imageDivStyle}>
        <Image
          src={'/images/portfolio/contact/contact.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={imageStyle}
        />
      </div>
      <div className={titleAndLinkContainerStyle}>
        <h2 className={titleStyle}>{titleAndLink.title[langage]}</h2>
        <Link href={'/contact'} className={`group ${contactLinkContainerStyle}`}>
          <div className={contactLinkStyle}>{titleAndLink.link[langage]}</div>
        </Link>
      </div>
    </section>
  );
}
