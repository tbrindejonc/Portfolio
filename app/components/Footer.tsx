'use client';

import Link from 'next/link';
import {FooterLink} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {cFooter_footer, cFooter_getSpanStyle, cFooter_link} from '@styles/components/Footer.styles';
import footerLinks from '@texts/portfolio/footer/footerLinks';

export default function Footer() {
  const {language} = useLanguage();

  return (
    <footer className={cFooter_footer}>
      {footerLinks.map((link: FooterLink, index: number) => {
        return (
          <Link key={index} href={link.href} className={cFooter_link}>
            {link.title[language]}
            <span className={cFooter_getSpanStyle(link)}>{!link.span ? '' : link.span.text}</span>
          </Link>
        );
      })}
    </footer>
  );
}
