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
        width: '50vw',
        bgColor: 'p_purple.light',
        textAlign: 'center',
        borderEndRadius: 'lg',
        shadow: '4px 4px 4px 0 rgba(19, 8, 35, 0.25)',
      })}
    >
      {appLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={css({
              width: 'full',
              paddingY: 2,
              fontSize: 'lg',
              fontWeight: 'bold',
              position: 'relative',
              color: active === index ? 'p_purple.800' : 'neutral.700',
            })}
            onClick={() => {
              setActive(index);
            }}
          >
            <div
              className={css({
                position: 'absolute',
                width: 2,
                height: 10,
                left: 0,
                top: 0,
                bgGradient: 'to-r',
                gradientFrom: 'p_purple.700',
                gradientTo: 'p_purple.light',
                borderEndRadius: 'xl',
                shadow: '2px 0 4px 0 rgba(149, 0, 255, 0.50)',
                display: active === index ? 'block' : 'none',
              })}
            ></div>
            {link.title[langage]}
          </Link>
        );
      })}
    </div>
  );
}
