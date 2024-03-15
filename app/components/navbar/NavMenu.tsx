'use client';

import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';
import {divStyle, getLinkStyle, getSelectedLinkStyle} from '@styles/components/navbar/NavMenu.styles';
import appLinks from '@texts/portfolio/navbar/appLinks';
import useCurrentPage from '@hooks/useCurrentPage';
import {Page} from '@/app/utils/types/portfolio';

export default function NavMenu() {
  const {langage} = useLanguage();
  const {currentPage, switchPage} = useCurrentPage();

  return (
    <div className={divStyle}>
      {appLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={getLinkStyle(currentPage, index)}
            onClick={() => {
              switchPage(link.title.en as Page);
            }}
          >
            <div className={getSelectedLinkStyle(currentPage, index)}></div>
            {link.title[langage]}
          </Link>
        );
      })}
    </div>
  );
}
