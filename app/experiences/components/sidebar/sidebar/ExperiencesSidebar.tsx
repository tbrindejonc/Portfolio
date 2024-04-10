'use client';

import useScrollPosition from '../../../hooks/useScrollPosition';
import ExperiencesSidebarItem from '../sidebar_item/ExperiencesSidebarItem';
import {ApiCollection} from '@appTypes/api';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';
import {cExpSidebar_sidebar} from './ExperiencesSidebar.styles';

type Props = {
  data: ApiCollection<CompleteExperienceFromApi>;
};

export default function ExperiencesSidebar({data}: Props) {
  const currentActive = useScrollPosition();

  return (
    <aside id={'sidebar'} className={cExpSidebar_sidebar}>
      {data.items.map((exp: CompleteExperienceFromApi, index: number) => {
        return <ExperiencesSidebarItem key={index} index={index} currentActive={currentActive} exp={exp} />;
      })}
    </aside>
  );
}
