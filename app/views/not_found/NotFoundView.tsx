'use client';

import Link from 'next/link';
import {vNotFound_button, vNotFound_notFound, vNotFound_title} from './NotFoundView.styles';
import useLanguage from '@hooks/useLanguage';
import titleAndLink from '@texts/portfolio/not_found/titleAndLink';

export default function NotFoundView() {
  const {language} = useLanguage();

  return (
    <main className={vNotFound_notFound}>
      <h1 className={vNotFound_title}>{titleAndLink.title[language]}</h1>
      <Link href={'/'} className={vNotFound_button}>
        {titleAndLink.link[language]}
      </Link>
    </main>
  );
}
