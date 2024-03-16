'use client';

import Link from 'next/link';
import {notFoundStyle, returnToHomeStyle, titleStyle} from '@styles/views/NotFoundView.styles';
import useLanguage from '@hooks/useLanguage';
import titleAndLink from '@texts/portfolio/not_found/titleAndLink';

export default function NotFoundView() {
  const {langage} = useLanguage();

  return (
    <main className={notFoundStyle}>
      <h1 className={titleStyle}>{titleAndLink.title[langage]}</h1>
      <Link href={'/'} className={returnToHomeStyle}>
        {titleAndLink.link[langage]}
      </Link>
    </main>
  );
}
