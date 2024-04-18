import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

export default function Sidebar() {
  const cSkillSidebar_container = vstack({
    alignItems: 'start',
    justifyContent: 'center',
    bg: 'transparent',
    display: {
      base: 'none',
      xl: 'flex',
    },
    gap: 4,
    position: 'sticky',
    top: 0,
    w: 'full',
    mt: '-100vh',
    h: 'screen',
    ps: 8,
  });

  const cSkillSidebar_item = css({
    bg: 'p_blue.main',
    h: 20,
    w: 4,
  });

  return (
    <div className={cSkillSidebar_container}>
      <div className={cSkillSidebar_item} />
      <div className={cSkillSidebar_item} />
      <div className={cSkillSidebar_item} />
      <div className={cSkillSidebar_item} />
    </div>
  );
}
