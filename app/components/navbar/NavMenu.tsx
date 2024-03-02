'use client';

import appLinks from '@app/texts/portfolio/navbar/appLinks';
import Link from 'next/link';
import useLangage from '@hooks/useLangage';
import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {useState} from 'react';

export default function NavMenu() {
  const {langage} = useLangage();
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className={vstack({
        width: {
          base: '50vw',
          md: '40vw',
        },
        bgColor: {
          base: 'p_purple.light',
          _dark: 'p_purple.dark',
        },
        textAlign: 'center',
        borderEndRadius: 'lg',
        shadow: {
          base: '4px 4px 4px 0 rgba(19, 8, 35, 0.25)',
          _dark: '4px 4px 4px 0 rgba(251, 245, 255, 0.25)',
        },
        transition: 'background-color 0.5s',
      })}
    >
      {appLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={css({
              width: 'full',
              paddingY: {
                base: 2,
                md: 4,
              },
              fontSize: {
                base: 'lg',
                md: '3xl',
              },
              fontWeight: 'bold',
              position: 'relative',
              color: {
                base: active === index ? 'p_purple.800' : 'neutral.700',
                _dark: active === index ? 'p_purple.400' : 'neutral.light',
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
                width: {
                  base: 2,
                  md: 4,
                },
                height: {
                  base: 10,
                  md: '6.5vh',
                },
                left: 0,
                top: 0,
                bgGradient: 'to-r',
                gradientFrom: {
                  base: 'p_purple.700',
                  _dark: 'p_purple.light',
                },
                gradientTo: {
                  base: 'p_purple.light',
                  _dark: 'p_purple.dark',
                },
                borderEndRadius: 'xl',
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
