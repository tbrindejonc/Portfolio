import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cNavLink_navLink = hstack({
  display: {
    base: 'none',
    xl: 'flex',
  },
  gap: 20,
  textAlign: 'center',
});

const cNavLink_getLink = (active: number, index: number) => {
  return css({
    color: {
      base: active === index ? 'p_purple.800' : 'neutral.700',
      _hover: active === index ? 'p_purple.700' : 'p_blue.700',
      _dark: {
        base: active === index ? 'p_purple.400' : 'neutral.light',
        _hover: active === index ? 'p_purple.200' : 'p_blue.300',
      },
    },
    fontSize: '2xl',
    fontWeight: 'bold',
    px: 2,
    py: 3,
    position: 'relative',
    transition: 'color 0.5s',
    w: 'full',
  });
};

const cNavLink_getSelectedLink = (active: number, index: number) => {
  return css({
    bgGradient: 'to-t',
    borderTopRadius: 'xl',
    bottom: 0,
    display: active === index ? 'block' : 'none',
    gradientFrom: {
      base: 'p_purple.700',
      _dark: 'p_purple.light',
    },
    gradientTo: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    h: 2,
    left: 0,
    position: 'absolute',
    shadow: '2px 0 4px 0',
    shadowColor: {
      base: 'p_purple.dark/25',
      _dark: 'p_purple.light/25',
    },
    transition: 'all 0.5s',
    w: 'full',
  });
};

export {cNavLink_navLink, cNavLink_getLink, cNavLink_getSelectedLink};
