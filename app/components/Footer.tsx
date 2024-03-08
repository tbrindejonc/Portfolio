'use client';

import Link from 'next/link';
import {FooterLink} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {footerStyle, getSpanStyle, linkStyle} from '@styles/components/Footer.styles';
import footerLinks from '@texts/portfolio/footer/footerLinks';

export default function Footer() {
  const {langage} = useLanguage();

  return (
    <footer className={footerStyle}>
      {footerLinks.map((link: FooterLink, index: number) => {
        return (
          <Link key={index} href={link.href} className={linkStyle}>
            {link.title[langage]}
            <span className={getSpanStyle(link)}>{!link.span ? '' : link.span.text}</span>
          </Link>
        );
      })}
    </footer>
  );
}
