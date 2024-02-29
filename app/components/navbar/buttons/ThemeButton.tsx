'use client';

import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';
import {useState} from 'react';
import {Theme} from '@appTypes/portfolio';

export default function ThemeButton() {
  const [theme, setTheme] = useState<Theme>('light');

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
        height: 10,
        width: 10,
        bgColor: 'p_purple.800',
        position: 'relative',
        borderRadius: 10,
        cursor: 'pointer',
        transition: 'background-color 0.5s',
        _dark: {
          bgColor: 'p_purple.light',
        },
      })}
      onClick={toggleTheme}
    >
      <div className={circle({size: '22px', bgColor: 'p_purple.main', position: 'absolute', bottom: 1, left: 1})}></div>
      <div
        className={css({
          bgColor: 'p_purple.light/70',
          position: 'absolute',
          top: '6px',
          right: '6px',
          height: 7,
          width: 7,
          borderRadius: 7,
          borderColor: 'p_purple.light/50',
          border: '2px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          transition: 'background-color 0.5s',
          _dark: {
            bgColor: 'p_purple.dark/70',
            borderColor: 'p_purple.dark/50',
          },
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
            width: '22px',
            height: '22px',
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
