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

export {cSkillSidebarItem_circle, cSkillSidebarItem_item, cSkillSidebarItem_active};
