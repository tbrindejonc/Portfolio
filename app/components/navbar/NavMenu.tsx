'use client';

import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';
import {divStyle, getLinkStyle, getSelectedLinkStyle} from '@styles/components/navbar/NavMenu.styles';
import appLinks from '@texts/portfolio/navbar/appLinks';
import useCurrentLocation from '@hooks/useCurrentLocation';

export default function NavMenu() {
  const {language} = useLanguage();
  const currentPage: number = useCurrentLocation();

  return (
    <div className={divStyle}>
      {appLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href} className={getLinkStyle(currentPage, index)}>
            <div className={getSelectedLinkStyle(currentPage, index)}></div>
            {link.title[language]}
          </Link>
        );
      })}
    </div>
  );
}
