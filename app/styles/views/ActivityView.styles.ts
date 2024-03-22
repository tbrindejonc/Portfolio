import {circle, grid, gridItem} from '@/styled-system/patterns';

const vActivity_activity = grid({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  columns: {
    base: 1,
    md: 2,
    xl: 3,
  },
  gap: 12,
  h: {
    md: 'screen',
  },
  justifyItems: 'center',
  overflow: 'hidden',
  py: 10,
  position: {
    xl: 'relative',
  },
  transition: 'all 0.5s',
  w: 'full',
});

const vActivity_title = gridItem({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  colSpan: {
    md: 2,
    xl: 3,
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '4xl',
    md: '6xl',
  },
  fontWeight: 'bold',
  justifySelf: {
    md: 'end',
  },
  px: 8,
  textAlign: 'center',
  zIndex: 1,
});

const vActivity_button = gridItem({
  alignSelf: {
    md: 'center',
    xl: 'start',
  },
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  bgGradient: {
    _hover: 'to-tr',
  },
  borderRadius: 'md',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  colSpan: {
    xl: 3,
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '3xl',
  },
  fontWeight: 'bold',
  gradientFrom: {
    _hover: {
      base: 'p_purple.800',
      _dark: 'p_purple.200',
    },
  },
  gradientTo: {
    _hover: {
      base: 'p_blue.800',
      _dark: 'p_blue.200',
    },
  },
  h: {
    md: 'fit-content',
  },
  p: {
    base: 2,
    md: 4,
  },
  boxShadow: {
    _hover: {
      base: '2px 2px 5px token(colors.p_purple.dark)',
      _dark: '2px 2px 5px token(colors.p_purple.light)',
    },
  },
  textAlign: 'center',
  transition: 'all 0.3s ease-in-out',
  w: {
    base: '4/5',
    xl: '1/5',
  },
  zIndex: 1,
});

const vActivity_circle = circle({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  display: {
    base: 'none',
    xl: 'block',
  },
  position: 'absolute',
  shadow: {
    base: '0 15px 20px 0 token(colors.p_blue.dark)',
    _dark: '0 15px 20px 0 token(colors.p_blue.light)',
  },
  size: '140em',
  top: '-75em',
  zIndex: 0,
});

export {vActivity_activity, vActivity_title, vActivity_button, vActivity_circle};
