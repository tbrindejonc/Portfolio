import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cSkillSidebar_container = vstack({
  alignItems: 'start',
  bg: 'transparent',
  display: {
    base: 'none',
    xl: 'flex',
  },
  gap: 14,
  h: 'screen',
  justifyContent: 'center',
  mt: '-100vh',
  pt: 16,
  ps: 20,
  position: 'sticky',
  top: 0,
  w: 'full',
  zIndex: 1,
  pointerEvents: 'none',
});

const cSkillSidebar_svg = css({
  h: 10,
  strokeWidth: 1.5,
  w: 10,
});

const cSkillSidebar_activeSvg = (index: number, current: number) => {
  const currentActive = index === current;

  return css({
    stroke: {
      base: currentActive ? 'neutral.light' : 'neutral.700',
      _dark: currentActive ? 'neutral.dark' : 'neutral.light',
    },
  });
};

export {cSkillSidebar_container, cSkillSidebar_activeSvg, cSkillSidebar_svg};
