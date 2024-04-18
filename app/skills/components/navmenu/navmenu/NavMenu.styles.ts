import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cSkillNavMenu_menu = (showMenu: boolean) => {
  return vstack({
    alignItems: 'start',
    borderRightRadius: 'lg',
    display: {
      base: 'flex',
      xl: 'none',
    },
    gap: 0,
    h: 'fit',
    shadow: {
      base: '0 2px 4px 2px token(colors.p_blue.dark)',
      _dark: '0 2px 4px 2px token(colors.p_blue.light)',
    },
    translateX: showMenu ? '0' : '-120%',
    translate: 'auto',
    transition: 'all 0.5s',
    w: 'fit',
  });
};

const cSkillNavMenu_svg = (index: number, current: number) => {
  const currentActive = index === current;

  return css({
    stroke: {
      base: currentActive ? 'neutral.light' : 'neutral.700',
      _dark: currentActive ? 'neutral.dark' : 'neutral.light',
    },
    h: {
      base: 14,
      md: 20,
    },
    transition: 'all 0.3s',
    w: {
      base: 14,
      md: 20,
    },
  });
};

const cSkillNavMenu_container = vstack({
  alignItems: 'start',
  gap: {
    base: 20,
    md: 32,
  },
  left: 0,
  position: 'fixed',
  top: '20vh',
  zIndex: 1,
});

export {cSkillNavMenu_svg, cSkillNavMenu_menu, cSkillNavMenu_container};
