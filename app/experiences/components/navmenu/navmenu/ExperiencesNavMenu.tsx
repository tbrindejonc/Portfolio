import ExperiencesNavMenuButton from '../button/ExperiencesNavMenuButton';
import cExpNavMenu_container from './ExperiencesNavMenu.styles';
import ExperiencesNavMenuMenu from '../menu/ExperiencesNavMenuMenu';

export default function ExperiencesNavMenu() {
  return (
    <div className={cExpNavMenu_container}>
      <ExperiencesNavMenuMenu />
      <ExperiencesNavMenuButton />
    </div>
  );
}
