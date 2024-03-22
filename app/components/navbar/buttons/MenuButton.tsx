'use client';

import NavMenu from '@components/navbar/NavMenu';
import {useEffect, useState} from 'react';
import {
  cMenuButton_blueCircle,
  cMenuButton_getNavMenu,
  cMenuButton_menu,
  cMenuButton_menuButton,
  cMenuButton_menuLine,
  cMenuButton_purpleCircle,
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
        className={`${cMenuButton_menuButton} menu-button`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className={cMenuButton_purpleCircle}></div>
        <div className={cMenuButton_blueCircle}></div>
        <div className={cMenuButton_menu}>
          <div className={cMenuButton_menuLine}></div>
          <div className={cMenuButton_menuLine}></div>
          <div className={cMenuButton_menuLine}></div>
        </div>
      </div>
      <div
        className={`${cMenuButton_getNavMenu(isActive)} nav-menu`}
        onClick={() => {
          return setIsActive(!isActive);
        }}
      >
        <NavMenu />
      </div>
    </>
  );
}
