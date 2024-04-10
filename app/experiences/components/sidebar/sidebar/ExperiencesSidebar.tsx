'use client';

import {vstack} from '@/styled-system/patterns';
import useScrollPosition from '../../../hooks/useScrollPosition';
import ExperiencesSidebarItem from '@app/experiences/components/sidebar/sidebar_item/ExperiencesSidebarItem';
import {ApiCollection} from '@appTypes/api';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

type Props = {
  data: ApiCollection<CompleteExperienceFromApi>;
};

export default function ExperiencesSidebar({data}: Props) {
  const currentActive = useScrollPosition();

  const cExpSidebar_sidebar = vstack({
    alignItems: 'end',
    gap: 12,
    h: 'screen',
    justifyContent: 'center',
    mt: '-100vh',
    pe: 10,
    position: 'sticky',
    top: 0,
    zIndex: 2,
  });

  return (
    <aside id={'sidebar'} className={cExpSidebar_sidebar}>
      {data.items.map((exp: CompleteExperienceFromApi, index: number) => {
        return <ExperiencesSidebarItem key={index} index={index} currentActive={currentActive} exp={exp} />;
      })}
    </aside>
  );
}
