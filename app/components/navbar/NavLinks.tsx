'use client';

import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';
import {cNavLink_getLink, cNavLink_getSelectedLink, cNavLink_navLink} from '@styles/components/navbar/NavLinks.styles';
import appLinks from '@texts/portfolio/navbar/appLinks';
import useCurrentLocation from '@hooks/useCurrentLocation';

export default function NavLinks() {
  const {language} = useLanguage();
  const currentPage: number = useCurrentLocation();

  return (
    <div className={cNavLink_navLink}>
      {appLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href} className={cNavLink_getLink(currentPage, index)}>
            <div className={cNavLink_getSelectedLink(currentPage, index)}></div>
            {link.title[language]}
          </Link>
        );
      })}
    </div>
  );
}
