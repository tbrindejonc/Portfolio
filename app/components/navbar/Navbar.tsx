import MenuButton from '@components/navbar/buttons/MenuButton';
import ThemeButton from '@components/navbar/buttons/ThemeButton';
import LanguageButton from '@components/navbar/buttons/LanguageButton';
import NavLinks from '@components/navbar/NavLinks';
import {divStyle, nameStyle, navStyle} from '@styles/components/navbar/Navbar.styles';

export default function Navbar() {
  return (
    <nav className={navStyle}>
      <MenuButton />
      <h2 className={nameStyle}>Timothée Brindejonc</h2>
      <NavLinks />
      <div className={divStyle}>
        <ThemeButton />
        <LanguageButton />
      </div>
    </nav>
  );
}
