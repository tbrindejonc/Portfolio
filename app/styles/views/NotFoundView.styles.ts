import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const notFoundStyle = vstack({
  bgColor: {
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
  },
  justifyContent: 'center',
  transition: 'background-color 0.5s',
});

const titleStyle = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
  },
  fontWeight: 'bold',
  textAlign: 'center',
});

const returnToHomeStyle = css({
  bgColor: {
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
  textAlign: 'center',
});

export {notFoundStyle, titleStyle, returnToHomeStyle};
