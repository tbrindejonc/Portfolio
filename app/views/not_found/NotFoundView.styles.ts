import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vNotFound_notFound = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: {
    base: 12,
    md: 20,
  },
  h: {
    base: '92.3vh',
    md: '92vh',
    xl: '94.8vh',
  },
  justify: 'center',
  transition: 'background-color 0.5s',
});

const vNotFound_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
  },
  fontWeight: 'bold',
  textAlign: 'center',
});

const vNotFound_button = css({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'lg',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontSize: {
    base: 'lg',
    md: '2xl',
  },
  p: {
    base: 3,
    md: 5,
  },
  shadow: {
    base: 'none',
    _hover: {
      base: '0 0 5px 2px token(colors.p_purple.dark)',
      _dark: '0 0 5px 2px token(colors.p_purple.light)',
    },
  },
  textAlign: 'center',
  transition: 'box-shadow 0.5s',
});

export {vNotFound_notFound, vNotFound_title, vNotFound_button};
