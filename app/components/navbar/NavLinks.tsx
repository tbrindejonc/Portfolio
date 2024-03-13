'use client';

import Link from 'next/link';
import useLanguage from '@hooks/useLanguage';
import {useState} from 'react';
import {divStyle, getLinkStyle, getSelectedLinkStyle} from '@styles/components/navbar/NavLinks.styles';
import appLinks from '@texts/portfolio/navbar/appLinks';

export default function NavLinks() {
  const {langage} = useLanguage();
  const [active, setActive] = useState<number>(0);

  return (
    <div className={divStyle}>
      {appLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={getLinkStyle(active, index)}
            onClick={() => {
              setActive(index);
            }}
          >
            <div className={getSelectedLinkStyle(active, index)}></div>
            {link.title[langage]}
          </Link>
        );
      })}
    </div>
  );
}
