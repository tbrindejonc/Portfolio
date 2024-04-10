import ExperiencesNavMenuButton from '../button/ExperiencesNavMenuButton';
import cExpNavMenu_container from './ExperiencesNavMenu.styles';
import ExperiencesNavMenuMenu from '../menu/ExperiencesNavMenuMenu';
import {ApiCollection} from '@appTypes/api';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import {useState} from 'react';

type Props = {
  data: ApiCollection<CompleteExperienceFromApi>;
};

export default function ExperiencesNavMenu({data}: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={cExpNavMenu_container}>
      <ExperiencesNavMenuMenu experiences={data.items} showMenu={showMenu} />
      <ExperiencesNavMenuButton toggleMenu={toggleMenu} />
    </div>
  );
}
