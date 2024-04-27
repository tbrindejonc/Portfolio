import {cProjNavMenu_button, cProjNavMenu_buttonLine} from './ProjectNavMenuButton.styles';

type Props = {
  toggleMenu: () => void;
};

export default function ProjectNavMenuButton({toggleMenu}: Props) {
  return (
    <div className={cProjNavMenu_button} onClick={toggleMenu}>
      <div className={cProjNavMenu_buttonLine} />
      <div className={cProjNavMenu_buttonLine} />
      <div className={cProjNavMenu_buttonLine} />
    </div>
  );
}
