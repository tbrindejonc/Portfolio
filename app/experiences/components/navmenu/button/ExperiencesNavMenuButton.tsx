import {cExpNavMenu_button, cExpNavMenu_buttonLine} from './ExperiencesNavMenuButton.styles';

type Props = {
  toggleMenu: () => void;
};

export default function ExperiencesNavMenuButton({toggleMenu}: Props) {
  return (
    <div className={cExpNavMenu_button} onClick={toggleMenu}>
      <div className={cExpNavMenu_buttonLine} />
      <div className={cExpNavMenu_buttonLine} />
      <div className={cExpNavMenu_buttonLine} />
    </div>
  );
}
