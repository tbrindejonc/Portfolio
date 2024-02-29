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
        display: 'none',
        xl: {
          display: 'flex',
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
              color: active === index ? 'p_purple.800' : 'neutral.700',
              transition: 'color 0.5s',
              _hover: {
                color: active === index ? 'p_purple.700' : 'p_blue.700',
              },
              _dark: {
                color: active === index ? 'p_purple.400' : 'neutral.light',
                _hover: {
                  color: active === index ? 'p_purple.200' : 'p_blue.300',
                },
              },
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
                gradientFrom: 'p_purple.700',
                gradientTo: 'p_purple.light',
                borderTopRadius: 'xl',
                shadow: '2px 0 4px 0 rgba(149, 0, 255, 0.50)',
                display: active === index ? 'block' : 'none',
                transition: 'all 0.5s',
                _dark: {
                  gradientFrom: 'p_purple.light',
                  gradientTo: 'p_purple.dark',
                  shadow: '2px 0 4px 0 rgba(244, 229, 255, 0.50)',
                },
              })}
            ></div>
            {link.title[langage]}
          </Link>
        );
      })}
    </div>
  );
}
