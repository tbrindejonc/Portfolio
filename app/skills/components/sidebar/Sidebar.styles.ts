import {circle, vstack} from '@/styled-system/patterns';
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

const cSkillSidebar_item = vstack({
  bg: {
    base: 'neutral.light',
    _dark: 'neutral.700',
  },
  borderRadius: 'full',
  h: 32,
  justifyContent: 'center',
  shadow: {
    base: '0 2px 4px 0 token(colors.p_blue.dark)',
    _dark: '0 2px 4px 0 token(colors.p_blue.light)',
  },
  w: 4,
  transition: 'all 0.5s',
});

const cSkillSidebar_circle = circle({
  bg: {
    base: 'neutral.light',
    _dark: 'neutral.700',
  },
  shadow: {
    base: '0 2px 4px 0 token(colors.p_blue.dark)',
    _dark: '0 2px 4px 0 token(colors.p_blue.light)',
  },
  size: 16,
  transition: 'all 0.5s',
});

const cSkillSidebar_svg = css({
  h: 10,
  stroke: {
    base: 'neutral.700',
    _dark: 'neutral.light',
  },
  strokeWidth: 1.5,
  w: 10,
});

export {cSkillSidebar_svg, cSkillSidebar_circle, cSkillSidebar_container, cSkillSidebar_item};
