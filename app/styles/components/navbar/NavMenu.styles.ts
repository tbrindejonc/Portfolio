import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cNavMenu_navMenu = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  borderEndRadius: 'lg',
  shadow: {
    base: '4px 4px 4px 0 token(colors.p_purple.dark_25)',
    _dark: '4px 4px 4px 0 token(colors.p_purple.light_25)',
  },
  textAlign: 'center',
  transition: 'background-color 0.5s',
  w: {
    base: '50vw',
    md: '40vw',
  },
});

const cNavMenu_getLink = (active: number, index: number) => {
  return css({
    color: {
      base: active === index ? 'p_purple.800' : 'neutral.700',
      _dark: active === index ? 'p_purple.400' : 'neutral.light',
    },
    fontSize: {
      base: 'lg',
      md: '3xl',
    },
    fontWeight: 'bold',
    py: {
      base: 2,
      md: 4,
    },
    position: 'relative',
    transition: 'color 0.5s',
    w: 'full',
  });
};

const cNavMenu_getSelectedLink = (active: number, index: number) => {
  return css({
    bgGradient: 'to-r',
    borderEndRadius: 'xl',
    display: active === index ? 'block' : 'none',
    gradientFrom: {
      base: 'p_purple.700',
      _dark: 'p_purple.light',
    },
    gradientTo: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    h: {
      base: 10,
      md: '6.5vh',
    },
    left: 0,
    position: 'absolute',
    shadow: '2px 0 4px 0',
    shadowColor: {
      base: 'p_purple.dark/25',
      _dark: 'p_purple.light/25',
    },
    transition: 'all 0.5s',
    top: 0,
    w: {
      base: 2,
      md: 4,
    },
  });
};

export {cNavMenu_navMenu, cNavMenu_getLink, cNavMenu_getSelectedLink};
