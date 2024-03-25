import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cNavbar_navbar = hstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  h: {
    base: 12,
    md: 20,
    xl: 14,
  },
  justifyContent: {
    base: 'space-around',
    xl: 'space-between',
  },
  px: {
    base: 2,
    xl: 4,
  },
  position: 'fixed',
  shadow: {
    base: '0 4px 4px 0 token(colors.p_purple.dark_25)',
    _dark: '0 4px 4px 0 token(colors.p_purple.light_25)',
  },
  transition: 'background-color 0.5s',
  w: 'full',
  zIndex: 10,
});

const cNavbar_name = css({
  bg: {
    base: 'linear-gradient(to right, token(colors.p_blue.dark), token(colors.p_blue.main), token(colors.p_purple.main), token(colors.p_purple.dark))',
    _dark:
      'linear-gradient(to right, token(colors.p_blue.light), token(colors.p_blue.main), token(colors.p_purple.main), token(colors.p_purple.light))',
  },
  bgClip: {
    base: 'text',
    _dark: 'text',
  },
  color: 'transparent',
  fontSize: {
    base: 'lg',
    md: '4xl',
    xl: '2xl',
  },
  fontWeight: 'bold',
});

const cNavbar_buttonsContainer = hstack({
  gap: 4,
});

export {cNavbar_navbar, cNavbar_name, cNavbar_buttonsContainer};
