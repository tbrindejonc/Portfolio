'use client';

import NavMenu from '@components/navbar/NavMenu';
import {useEffect, useState} from 'react';
import {
  blueCircleStyle,
  getNavMenuContainerStyle,
  menuButtonStyle,
  menuContainerStyle,
  menuLineStyle,
  purpleCircleStyle,
} from '@styles/components/navbar/buttons/MenuButton.styles';

export default function MenuButton() {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest('.menu-button') && !target.closest('.nav-menu')) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      return document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`${menuButtonStyle} menu-button`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className={purpleCircleStyle}></div>
        <div className={blueCircleStyle}></div>
        <div className={menuContainerStyle}>
          <div className={menuLineStyle}></div>
          <div className={menuLineStyle}></div>
          <div className={menuLineStyle}></div>
        </div>
      </div>
      <div
        className={`${getNavMenuContainerStyle(isActive)} nav-menu`}
        onClick={() => {
          return setIsActive(!isActive);
        }}
      >
        <NavMenu />
      </div>
    </>
  );
}
