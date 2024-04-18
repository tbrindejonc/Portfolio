'use client';

import {cSkillSidebar_activeSvg, cSkillSidebar_container, cSkillSidebar_svg} from './Sidebar.styles';
import useScrollStep from '@app/skills/hooks/useScrollStep';
import SidebarItem from '../sidebar_item/SidebarItem';

export default function Sidebar() {
  const currentActive = useScrollStep();

  return (
    <aside className={cSkillSidebar_container}>
      <SidebarItem currentActive={currentActive} index={0}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`${cSkillSidebar_svg} ${cSkillSidebar_activeSvg(0, currentActive)}`}
        >
          <path d='m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9' />
          <path d='m18 15 4-4' />
          <path d='m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5' />
        </svg>
      </SidebarItem>
      <SidebarItem currentActive={currentActive} index={1}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`${cSkillSidebar_svg} ${cSkillSidebar_activeSvg(1, currentActive)}`}
        >
          <path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' />
          <path d='M22 10v6' />
          <path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5' />
        </svg>
      </SidebarItem>
      <SidebarItem currentActive={currentActive} index={2}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`${cSkillSidebar_svg} ${cSkillSidebar_activeSvg(2, currentActive)}`}
        >
          <path d='M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4' />
          <path d='M2 6h4' />
          <path d='M2 10h4' />
          <path d='M2 14h4' />
          <path d='M2 18h4' />
          <path d='M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z' />
        </svg>
      </SidebarItem>
      <SidebarItem currentActive={currentActive} index={3}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`${cSkillSidebar_svg} ${cSkillSidebar_activeSvg(3, currentActive)}`}
        >
          <path d='M2 6h4' />
          <path d='M2 10h4' />
          <path d='M2 14h4' />
          <path d='M2 18h4' />
          <rect width='16' height='20' x='4' y='2' rx='2' />
          <path d='M15 2v20' />
          <path d='M15 7h5' />
          <path d='M15 12h5' />
          <path d='M15 17h5' />
        </svg>
      </SidebarItem>
    </aside>
  );
}
