'use client';

import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';
import {useEffect, useState} from 'react';
import {Theme} from '@appTypes/portfolio';

export default function ThemeButton() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // enable dark mode if user prefers it
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const moon = document.getElementById('moon');
    const sun = document.getElementById('sun');

    moon!.style.transform = 'rotate(360deg)';
    sun!.style.transform = 'rotate(360deg)';

    setTimeout(() => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      document.body.classList.toggle('dark');

      moon!.style.transform = 'rotate(0deg)';
      sun!.style.transform = 'rotate(0deg)';
    }, 500);
  };

  return (
    <div
      className={css({
        height: {
          base: 10,
          md: 14,
          xl: 12,
        },
        width: {
          base: 10,
          md: 14,
          xl: 12,
        },
        bgColor: {
          base: 'p_purple.800',
          _dark: 'p_purple.light',
        },
        position: 'relative',
        borderRadius: 10,
        cursor: 'pointer',
        transition: 'background-color 0.5s',
      })}
      onClick={toggleTheme}
    >
      <div
        className={circle({
          size: {
            base: '22px',
            md: 8,
            xl: 7,
          },
          bgColor: 'p_purple.main',
          position: 'absolute',
          bottom: 1,
          left: 1,
        })}
      ></div>
      <div
        className={css({
          bgColor: {
            base: 'p_purple.light/70',
            _dark: 'p_purple.dark/70',
          },
          position: 'absolute',
          top: {
            base: '6px',
            md: '8px',
            xl: '6px',
          },
          right: {
            base: '6px',
            md: '8px',
            xl: '6px',
          },
          height: {
            base: 7,
            md: 10,
            xl: 9,
          },
          width: {
            base: 7,
            md: 10,
            xl: 9,
          },
          borderRadius: 7,
          borderColor: {
            base: 'p_purple.light/50',
            _dark: 'p_purple.dark/50',
          },
          border: '2px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          transition: 'background-color 0.5s',
        })}
      >
        <svg
          id={'moon'}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`lucide lucide-moon-star ${css({
            stroke: 'p_purple.800',
            display: theme === 'light' ? 'block' : 'none',
            transition: 'transform 1s',
            width: {
              md: '30px',
            },
            height: {
              md: '30px',
            },
          })}`}
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
          <path d='M19 3v4' />
          <path d='M21 5h-4' />
        </svg>
        <svg
          id={'sun'}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`lucide lucide-sun ${css({
            stroke: 'p_purple.200',
            display: theme === 'dark' ? 'block' : 'none',
            width: {
              base: '22px',
              md: '30px',
            },
            height: {
              base: '22px',
              md: '30px',
            },
            transition: 'transform 1s',
          })}`}
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 2v2' />
          <path d='M12 20v2' />
          <path d='m4.93 4.93 1.41 1.41' />
          <path d='m17.66 17.66 1.41 1.41' />
          <path d='M2 12h2' />
          <path d='M20 12h2' />
          <path d='m6.34 17.66-1.41 1.41' />
          <path d='m19.07 4.93-1.41 1.41' />
        </svg>
      </div>
    </div>
  );
}
