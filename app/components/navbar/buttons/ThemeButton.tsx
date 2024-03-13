'use client';

import {useEffect, useState} from 'react';
import {Theme} from '@appTypes/portfolio';
import {
  circleStyle,
  getMoonStyle,
  getSunStyle,
  iconContainerStyle,
  themeButtonDivStyle,
} from '@styles/components/navbar/buttons/ThemeButton.styles';

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
    <div className={themeButtonDivStyle} onClick={toggleTheme}>
      <div className={circleStyle}></div>
      <div className={iconContainerStyle}>
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
          className={`lucide lucide-moon-star ${getMoonStyle(theme)}`}
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
          className={`lucide lucide-sun ${getSunStyle(theme)}`}
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
