'use client';

import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {experienceSlides} from '@texts/portfolio/experience/experienceSlides';
import {Slide} from '@appTypes/portfolio';
import useScrollPosition from '../../../hooks/useScrollPosition';

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

  const cExpSidebar_sidebarItem = css({
    borderRadius: 'xl',
    h: '15vh',
    transition: 'all 0.5s',
    w: 4,
  });

  const cExpSidebar_sidebarItemActive = (index: number, currentActive: number) => {
    const isActive = index === currentActive;

    return css({
      bg: {
        base: isActive ? 'p_blue.700' : 'neutral.200',
        _dark: isActive ? 'p_blue.200' : 'neutral.700',
      },
    });
  };

  return (
    <aside id={'sidebar'} className={cExpSidebar_sidebar}>
      {experienceSlides.map((slide: Slide, index: number) => {
        return (
          <div
            key={index}
            className={`${cExpSidebar_sidebarItem} ${cExpSidebar_sidebarItemActive(index, currentActive)}`}
          />
        );
      })}
    </aside>
  );
}
