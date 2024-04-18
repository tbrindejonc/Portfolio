import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

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
    w: {
      base: '55vw',
      md: '40vw',
    },
  });
};

const cSkillNavMenu_textContainer = vstack({
  gap: 2,
  justifyContent: 'center',
  p: 2,
  ps: 4,
  transition: 'all 0.3s',
});

const cSkillNavMenu_text = css({
  fontSize: {
    base: 'sm',
    md: 'lg',
  },
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
    w: {
      base: 4,
      md: 6,
    },
  });
};

export {cSkillNavMenu_text, cSkillNavMenu_step, cSkillNavMenu_textContainer, cSkillNavMenu_item};
