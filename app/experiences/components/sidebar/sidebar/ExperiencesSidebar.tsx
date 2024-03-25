import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

export default function ExperiencesSidebar() {
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
    bg: {
      base: 'neutral.200',
      _dark: 'neutral.700',
    },
    borderRadius: 'xl',
    h: '15vh',
    transition: 'all 0.5s',
    w: 4,
  });

  return (
    <aside id={'sidebar'} className={cExpSidebar_sidebar}>
      <div className={cExpSidebar_sidebarItem} />
      <div className={cExpSidebar_sidebarItem} />
      <div className={cExpSidebar_sidebarItem} />
    </aside>
  );
}
