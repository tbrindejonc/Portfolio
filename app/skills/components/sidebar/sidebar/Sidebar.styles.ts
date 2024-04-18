import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cSkillSidebar_container = vstack({
  alignItems: 'start',
  justifyContent: 'center',
  bg: 'transparent',
  display: {
    base: 'none',
    xl: 'flex',
  },
  gap: 14,
  position: 'sticky',
  top: 0,
  w: 'full',
  mt: '-100vh',
  h: 'screen',
  pt: 16,
  ps: 20,
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
