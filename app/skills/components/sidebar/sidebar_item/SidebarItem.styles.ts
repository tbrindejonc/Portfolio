import {css} from '@/styled-system/css';
import {circle, vstack} from '@/styled-system/patterns';

const cSkillSidebarItem_active = (index: number, current: number) => {
  const currentActive = index === current;

  return css({
    bg: {
      base: currentActive ? 'p_purple.700' : 'neutral.light',
      _dark: currentActive ? 'p_purple.200' : 'neutral.700',
    },
  });
};

const cSkillSidebarItem_item = vstack({
  borderRadius: 'full',
  h: 32,
  justifyContent: 'center',
  position: 'relative',
  shadow: {
    base: '0 2px 4px 0 token(colors.p_blue.dark)',
    _dark: '0 2px 4px 0 token(colors.p_blue.light)',
  },
  w: 4,
  transition: 'all 0.5s',
});

const cSkillSidebarItem_circle = circle({
  shadow: {
    base: '0 2px 4px 0 token(colors.p_blue.dark)',
    _dark: '0 2px 4px 0 token(colors.p_blue.light)',
  },
  size: 16,
  transition: 'all 0.5s',
});

const cSkillSidebarItem_tooltip = (index: number, current: number) => {
  const currentActive = index === current;

  return css({
    bg: {
      base: currentActive ? 'p_purple.700' : 'neutral.light',
      _dark: currentActive ? 'p_purple.200' : 'neutral.700',
    },
    borderRadius: 'sm',
    color: {
      base: currentActive ? 'neutral.light' : 'neutral.700',
      _dark: currentActive ? 'neutral.dark' : 'neutral.light',
    },
    display: {
      base: 'none',
      _groupHover: 'block',
    },
    fontSize: 'lg',
    left: 14,
    p: 2,
    position: 'absolute',
    shadow: {
      base: '0 2px 4px 0 token(colors.p_blue.dark)',
      _dark: '0 2px 4px 0 token(colors.p_blue.light)',
    },
    transition: 'all 0.5s',
    w: '12vw',
  });
};

export {cSkillSidebarItem_circle, cSkillSidebarItem_item, cSkillSidebarItem_active, cSkillSidebarItem_tooltip};
