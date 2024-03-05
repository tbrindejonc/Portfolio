import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const navStyle = hstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  height: {
    base: 12,
    md: 20,
    xl: 14,
  },
  justifyContent: {
    base: 'space-around',
    xl: 'space-between',
  },
  paddingX: {
    base: 2,
    xl: 4,
  },
  position: 'fixed',
  shadow: {
    base: '0 4px 4px 0 token(colors.p_purple.dark_25)',
    _dark: '0 4px 4px 0 token(colors.p_purple.light_25)',
  },
  transition: 'background-color 0.5s',
  width: 'full',
  zIndex: 10,
});

const nameStyle = css({
  background: {
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

const divStyle = hstack({
  gap: 4,
});

export {navStyle, nameStyle, divStyle};
