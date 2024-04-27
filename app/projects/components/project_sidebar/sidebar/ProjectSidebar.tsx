'use client';

import useScrollPosition from '../../../hooks/useScrollPosition';
import {ApiCollection} from '@appTypes/api';
import ProjectSidebarItem from '../sidebar_item/ProjectSidebarItem';
import {cProjSidebar_sidebar} from './ProjectSidebar.styles';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';

type Props = {
  data: ApiCollection<CompleteProjectFromApi>;
};

export default function ProjectSidebar({data}: Props) {
  const currentActive = useScrollPosition(data.items);

  return (
    <aside id={'sidebar'} className={cProjSidebar_sidebar}>
      {data.items.map((project: CompleteProjectFromApi, index: number) => {
        return <ProjectSidebarItem key={index} index={index} currentActive={currentActive} project={project} />;
      })}
    </aside>
  );
}
