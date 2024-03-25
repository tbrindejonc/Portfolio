import {css} from '@/styled-system/css';
import {hstack} from '@/styled-system/patterns';

const vExpEnd_end = css({
  alignItems: 'center',
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  display: 'flex',
  flexDirection: 'column',
  fontSize: '3xl',
  gap: 8,
  h: 'screen',
  justifyContent: 'center',
  px: 8,
  textAlign: 'center',
  transition: 'all 0.5s',
});

const vExpEnd_button = hstack({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'lg',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: '2xl',
  fontWeight: 'bold',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  transition: 'all 0.5s',
  w: 'full',
});

const vExpEnd_svg = css({
  h: 7,
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  rotate: {
    _groupHover: '-90deg',
  },
  strokeWidth: 4,
  transition: 'all 0.3s ease-in-out',
  w: 7,
});

export {vExpEnd_end, vExpEnd_button, vExpEnd_svg};
