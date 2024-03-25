import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

export default function ExperiencesSidebar() {
  const cExpSidebar_sidebar = vstack({
    alignItems: 'end',
    mt: '-100vh',
    h: 'screen',
    justifyContent: 'center',
    pe: 10,
    position: 'sticky',
    top: 0,
    zIndex: 2,
  });

  const cExpSidebar_sidebarItem = css({
    bg: 'p_purple.main',
    h: 12,
    w: 2,
  });

  return (
    <aside id={'sidebar'} className={cExpSidebar_sidebar}>
      <div className={cExpSidebar_sidebarItem} />
      <div className={cExpSidebar_sidebarItem} />
      <div className={cExpSidebar_sidebarItem} />
    </aside>
  );
}
