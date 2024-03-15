'use client';

import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';
import {divStyle, getLinkStyle, getSelectedLinkStyle} from '@styles/components/navbar/NavMenu.styles';
import appLinks from '@texts/portfolio/navbar/appLinks';
import {AppLink} from '@/app/utils/types/portfolio';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';

export default function NavMenu() {
  const location = usePathname();
  const {langage} = useLanguage();
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const matchedPage: AppLink | undefined = appLinks.find((link: AppLink) => {
      return link.href.toLowerCase() === location;
    });
    const pageIndex: number = appLinks.indexOf(matchedPage as AppLink);

    setCurrentPage(pageIndex);
  }, [location]);

  return (
    <div className={divStyle}>
      {appLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href} className={getLinkStyle(currentPage, index)}>
            <div className={getSelectedLinkStyle(currentPage, index)}></div>
            {link.title[langage]}
          </Link>
        );
      })}
    </div>
  );
}
