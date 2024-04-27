import {ApiCollection} from '@appTypes/api';
import {useState} from 'react';
import useScrollPosition from '../../../hooks/useScrollPosition';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Link from 'next/link';
import {
  cProjNavMenu_container,
  cProjNavMenu_endBar,
  cProjNavMenu_item,
  cProjNavMenu_menu,
} from './ProjectNavMenu.styles';
import ProjectMenuNavButton from '../button/ProjectNavMenuButton';

type Props = {
  data: ApiCollection<CompleteProjectFromApi>;
};

export default function ProjectNavMenu({data}: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const currentActive = useScrollPosition(data.items);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={cProjNavMenu_container}>
      <div className={cProjNavMenu_menu(showMenu)}>
        {data.items.map((project: CompleteProjectFromApi, index: number) => {
          return (
            <Link
              href={`#${project.name}`}
              onClick={toggleMenu}
              key={project.id}
              className={cProjNavMenu_item(index, currentActive)}
            >
              <h2>{project.name}</h2>
              <div className={cProjNavMenu_endBar(index, currentActive)} />
            </Link>
          );
        })}
      </div>
      <ProjectMenuNavButton toggleMenu={toggleMenu} />
    </div>
  );
}
