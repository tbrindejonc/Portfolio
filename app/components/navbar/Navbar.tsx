import MenuButton from '@components/navbar/buttons/MenuButton';
import ThemeButton from '@components/navbar/buttons/ThemeButton';
import LanguageButton from '@components/navbar/buttons/LanguageButton';
import NavLinks from '@components/navbar/NavLinks';
import {cNavbar_buttonsContainer, cNavbar_name, cNavbar_navbar} from '@styles/components/navbar/Navbar.styles';

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
