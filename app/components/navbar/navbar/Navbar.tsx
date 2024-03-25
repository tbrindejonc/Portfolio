import MenuButton from '@components/navbar/buttons/menu_button/MenuButton';
import ThemeButton from '@components/navbar/buttons/theme_button/ThemeButton';
import LanguageButton from '@components/navbar/buttons/language_button/LanguageButton';
import NavLinks from '@components/navbar/navlinks/NavLinks';
import {cNavbar_buttonsContainer, cNavbar_name, cNavbar_navbar} from './Navbar.styles';

export default function Navbar() {
  return (
    <nav className={cNavbar_navbar}>
      <MenuButton />
      <h2 className={cNavbar_name}>Timothée Brindejonc</h2>
      <NavLinks />
      <div className={cNavbar_buttonsContainer}>
        <ThemeButton />
        <LanguageButton />
      </div>
    </nav>
  );
}
