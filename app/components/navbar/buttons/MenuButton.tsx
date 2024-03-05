'use client';

import NavMenu from '@components/navbar/NavMenu';
import {useState} from 'react';
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

  return (
    <>
      <div
        className={menuButtonStyle}
        onClick={() => {
          return setIsActive(!isActive);
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
      <div className={getNavMenuContainerStyle(isActive)}>
        <NavMenu />
      </div>
    </>
  );
}
