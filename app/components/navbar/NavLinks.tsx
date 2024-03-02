'use client';

import appLinks from '@app/texts/portfolio/navbar/appLinks';
import Link from 'next/link';
import {css} from '@/styled-system/css';
import useLangage from '@hooks/useLangage';
import {useState} from 'react';
import {hstack} from '@/styled-system/patterns';

export default function NavLinks() {
  const {langage} = useLangage();
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className={hstack({
        gap: 20,
        textAlign: 'center',
        display: {
          base: 'none',
          xl: 'flex',
        },
      })}
    >
      {appLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={css({
              width: 'full',
              paddingX: 2,
              paddingY: 3,
              fontSize: '2xl',
              fontWeight: 'bold',
              position: 'relative',
              color: {
                base: active === index ? 'p_purple.800' : 'neutral.700',
                _hover: active === index ? 'p_purple.700' : 'p_blue.700',
                _dark: {
                  base: active === index ? 'p_purple.400' : 'neutral.light',
                  _hover: active === index ? 'p_purple.200' : 'p_blue.300',
                },
              },
              transition: 'color 0.5s',
            })}
            onClick={() => {
              setActive(index);
            }}
          >
            <div
              className={css({
                position: 'absolute',
                width: 'full',
                height: 2,
                left: 0,
                bottom: 0,
                bgGradient: 'to-t',
                gradientFrom: {
                  base: 'p_purple.700',
                  _dark: 'p_purple.light',
                },
                gradientTo: {
                  base: 'p_purple.light',
                  _dark: 'p_purple.dark',
                },
                borderTopRadius: 'xl',
                shadow: {
                  base: '2px 0 4px 0 rgba(149, 0, 255, 0.50)',
                  _dark: '2px 0 4px 0 rgba(244, 229, 255, 0.50)',
                },
                display: active === index ? 'block' : 'none',
                transition: 'all 0.5s',
              })}
            ></div>
            {link.title[langage]}
          </Link>
        );
      })}
    </div>
  );
}
