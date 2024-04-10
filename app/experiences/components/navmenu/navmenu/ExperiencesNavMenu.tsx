import ExperiencesNavMenuButton from '../button/ExperiencesNavMenuButton';
import cExpNavMenu_container from './ExperiencesNavMenu.styles';
import ExperiencesNavMenuMenu from '../menu/ExperiencesNavMenuMenu';
import {ApiCollection} from '@appTypes/api';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import {useState} from 'react';
import useScrollPosition from '@app/experiences/hooks/useScrollPosition';

type Props = {
  data: ApiCollection<CompleteExperienceFromApi>;
};

export default function ExperiencesNavMenu({data}: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const currentActive = useScrollPosition();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={cExpNavMenu_container(currentActive)}>
      <ExperiencesNavMenuMenu experiences={data.items} showMenu={showMenu} currentActive={currentActive} />
      <ExperiencesNavMenuButton toggleMenu={toggleMenu} />
    </div>
  );
}
