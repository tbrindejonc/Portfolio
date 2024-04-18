import {cNavMenuButton_button, cNavMenuButton_buttonLine} from './NavMenuButton.styles';

export default function NavMenuButton() {
  return (
    <button className={cNavMenuButton_button}>
      <div className={cNavMenuButton_buttonLine} />
      <div className={cNavMenuButton_buttonLine} />
      <div className={cNavMenuButton_buttonLine} />
    </button>
  );
}
