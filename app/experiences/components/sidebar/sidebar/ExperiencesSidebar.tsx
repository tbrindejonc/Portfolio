'use client';

import {vstack} from '@/styled-system/patterns';
import {experienceSlides} from '@texts/portfolio/experience/experienceSlides';
import {Slide} from '@appTypes/portfolio';
import useScrollPosition from '../../../hooks/useScrollPosition';
import ExperiencesSidebarItem from '@app/experiences/components/sidebar/sidebar_item/ExperiencesSidebarItem';

export default function ExperiencesSidebar() {
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
      {experienceSlides.map((slide: Slide, index: number) => {
        return <ExperiencesSidebarItem key={index} index={index} currentActive={currentActive} slide={slide} />;
      })}
    </aside>
  );
}
