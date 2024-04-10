import {cExpNavMenu_button, cExpNavMenu_buttonLine} from './ExperiencesNavMenuButton.styles';

export default function ExperiencesNavMenuButton() {
  return (
    <div className={cExpNavMenu_button}>
      <div className={cExpNavMenu_buttonLine} />
      <div className={cExpNavMenu_buttonLine} />
      <div className={cExpNavMenu_buttonLine} />
    </div>
  );
}
