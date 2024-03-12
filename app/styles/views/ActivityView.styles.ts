import {grid, gridItem} from '@/styled-system/patterns';

const activityStyle = grid({
  alignItems: 'center',
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  columns: {
    base: 1,
    md: 2,
  },
  gap: 12,
  h: {
    md: 'screen',
  },
  justifyItems: 'center',
  py: 10,
  transition: 'all 0.5s',
  w: 'full',
});

const titleStyle = gridItem({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  colSpan: {
    md: 2,
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
});

const projectsLinkStyle = gridItem({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'md',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '3xl',
  },
  fontWeight: 'bold',
  h: {
    md: 'fit-content',
  },
  p: {
    base: 2,
    md: 4,
  },
  textAlign: 'center',
  w: '4/5',
});

export {activityStyle, titleStyle, projectsLinkStyle};
