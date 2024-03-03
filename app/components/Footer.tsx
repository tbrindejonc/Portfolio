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
    <footer
      className={grid({
        justifyItems: {
          xl: 'center',
        },
        columns: {
          base: 3,
          xl: 6,
        },
        gap: {
          base: 2,
          md: 4,
          xl: 0,
        },
        rowGap: 4,
        padding: {
          base: 2,
          md: 4,
        },
        paddingX: {
          md: 12,
          xl: 24,
        },
        fontSize: {
          base: '10px',
          md: 'md',
        },
        textAlign: {
          xl: 'center',
        },
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
          <Link
            key={index}
            href={link.href}
            className={css({
              width: 'fit',
              textDecoration: {
                _hover: 'underline',
              },
            })}
          >
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
    </footer>
  );
}
