'use client';

import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';
import {cNavMenu_getLink, cNavMenu_getSelectedLink, cNavMenu_navMenu} from '@styles/components/navbar/NavMenu.styles';
import appLinks from '@texts/portfolio/navbar/appLinks';
import useCurrentLocation from '@hooks/useCurrentLocation';

export default function NavMenu() {
  const {language} = useLanguage();
  const currentPage: number = useCurrentLocation();

  return (
    <div className={cNavMenu_navMenu}>
      {appLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href} className={cNavMenu_getLink(currentPage, index)}>
            <div className={cNavMenu_getSelectedLink(currentPage, index)}></div>
            {link.title[language]}
          </Link>
        );
      })}
    </div>
  );
}
