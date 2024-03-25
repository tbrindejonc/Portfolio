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
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  fontSize: {
    base: '3xl',
    md: '5xl',
  },
  gap: {
    base: 8,
    md: 16,
  },
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
  fontSize: {
    base: '2xl',
    md: '4xl',
    xl: '5xl',
  },
  fontWeight: 'bold',
  gap: {
    base: 4,
    xl: 8,
  },
  justifyContent: 'center',
  p: {
    base: 2,
    md: 4,
  },
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  transition: 'all 0.5s',
  w: {
    base: 'full',
    md: '1/2',
    xl: '1/3',
  },
});

const vExpEnd_svg = css({
  h: {
    base: 7,
    md: 10,
    xl: 12,
  },
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  rotate: {
    _groupHover: '-90deg',
  },
  strokeWidth: 4,
  transition: 'all 0.3s ease-in-out',
  w: {
    base: 7,
    md: 10,
    xl: 12,
  },
});

const vExpEnd_text = css({
  textAlign: {
    xl: 'start',
  },
  textWrap: 'balance',
  w: {
    xl: '1/2',
  },
});

export {vExpEnd_end, vExpEnd_button, vExpEnd_svg, vExpEnd_text};
