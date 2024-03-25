import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

export default function ExperiencesSidebar() {
  const cExpSidebar_sidebar = vstack({
    gap: 8,
    position: 'fixed',
    right: 4,
    top: 20,
    zIndex: 2,
  });

  const cExpSidebar_sidebarItem = css({
    bg: 'p_purple.main',
    h: 12,
    w: 2,
  });

  return (
    <div id={'sidebar'} className={cExpSidebar_sidebar}>
      <div className={cExpSidebar_sidebarItem} />
      <div className={cExpSidebar_sidebarItem} />
      <div className={cExpSidebar_sidebarItem} />
    </div>
  );
}
