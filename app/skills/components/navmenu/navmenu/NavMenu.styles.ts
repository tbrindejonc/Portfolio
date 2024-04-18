import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cSkillNavMenu_menu = vstack({
  alignItems: 'start',
  borderRightRadius: 'lg',
  gap: 0,
  h: 'fit',
  left: 0,
  position: 'fixed',
  shadow: {
    base: '0 2px 4px 2px token(colors.p_blue.dark)',
    _dark: '0 2px 4px 2px token(colors.p_blue.light)',
  },
  top: '20vh',
  w: 'fit',
  zIndex: 1,
});

const cSkillNavMenu_item = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return hstack({
    bg: {
      base: isActive ? 'p_purple.700' : 'neutral.light',
      _dark: isActive ? 'p_purple.200' : 'neutral.700',
    },
    borderBottom: index !== 3 ? '2px solid' : 0,
    borderColor: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
    borderBottomRightRadius: index === 3 ? 'lg' : 0,
    borderTopRightRadius: index === 0 ? 'lg' : 0,
    color: {
      base: isActive ? 'neutral.light' : 'neutral.700',
      _dark: isActive ? 'neutral.dark' : 'neutral.light',
    },
    gap: 0,
    h: '15vh',
    justifyContent: 'center',
    position: 'relative',
    transition: 'all 0.3s',
    w: '55vw',
  });
};

const cSkillNavMenu_textContainer = vstack({
  gap: 2,
  justifyContent: 'center',
  p: 2,
  ps: 4,
  transition: 'all 0.3s',
});

const cSkillNavMenu_svg = (index: number, current: number) => {
  const currentActive = index === current;

  return css({
    stroke: {
      base: currentActive ? 'neutral.light' : 'neutral.700',
      _dark: currentActive ? 'neutral.dark' : 'neutral.light',
    },
    h: 14,
    transition: 'all 0.3s',
    w: 14,
  });
};

const cSkillNavMenu_text = css({
  fontSize: 'sm',
  textAlign: 'center',
});

const cSkillNavMenu_step = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return css({
    bg: {
      base: isActive ? 'p_purple.700' : 'neutral.light',
      _dark: isActive ? 'p_purple.200' : 'neutral.700',
    },
    h: 'full',
    left: 0,
    position: 'absolute',
    shadow: {
      base: isActive ? '0 2px 4px 2px token(colors.p_purple.light)' : '0 2px 4px 2px token(colors.p_blue.dark)',
      _dark: isActive ? '0 2px 4px 2px token(colors.p_purple.dark)' : '0 2px 4px 2px token(colors.p_blue.light)',
    },
    transition: 'all 0.3s',
    w: 4,
  });
};

export {
  cSkillNavMenu_svg,
  cSkillNavMenu_text,
  cSkillNavMenu_step,
  cSkillNavMenu_textContainer,
  cSkillNavMenu_item,
  cSkillNavMenu_menu,
};
