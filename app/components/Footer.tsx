'use client';

import {grid} from '@/styled-system/patterns';
import footerLinks from '@app/texts/portfolio/footer/footerLinks';
import Link from 'next/link';
import {FooterLink} from '@appTypes/portfolio';
import useLangage from '@hooks/useLangage';
import {css} from '@/styled-system/css';

export default function Footer() {
  const {langage} = useLangage();

  return (
    <footer>
      <div
        className={grid({
          marginTop: 40,
          columns: 3,
          gap: 2,
          padding: 2,
          fontSize: '10px',
          fontWeight: 'bold',
          fontFamily: 'bricolage',
          shadow: {
            base: '0px -4px 4px 0 rgba(0, 26, 56, 0.25)',
            _dark: '0px -4px 4px 0 rgba(240, 247, 255, 0.25)',
          },
          color: {
            base: 'neutral.dark',
            _dark: 'neutral.light',
          },
          bgColor: {
            base: 'p_blue.light',
            _dark: 'p_blue.dark',
          },
        })}
      >
        {footerLinks.map((link: FooterLink, index: number) => {
          return (
            <Link key={index} href={link.href}>
              {link.title[langage]}
              <span
                className={css({
                  display: !link.span ? 'none' : 'inline',
                  color: {
                    base: 'p_purple.main',
                    _dark: 'p_blue.main',
                  },
                })}
              >
                {!link.span ? '' : link.span.text}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
