import {cNavMenuButton_button, cNavMenuButton_buttonLine} from './NavMenuButton.styles';

type Props = {
  toggleMenu: () => void;
};

export default function NavMenuButton({toggleMenu}: Props) {
  return (
    <button className={cNavMenuButton_button} onClick={toggleMenu}>
      <div className={cNavMenuButton_buttonLine} />
      <div className={cNavMenuButton_buttonLine} />
      <div className={cNavMenuButton_buttonLine} />
    </button>
  );
}
