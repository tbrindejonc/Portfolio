import {circle, grid, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cTechLoading_container = grid({
  gridTemplateColumns: {
    base: 2,
    md: 3,
    xl: 4,
  },
  gap: {
    base: 6,
    md: 8,
    xl: 12,
  },
  h: 'screen',
  pb: 8,
  w: 'full',
});

const cTechLoading_loading = vstack({
  alignItems: 'start',
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  borderRadius: 'lg',
  gap: {
    base: 4,
    md: 6,
  },
  h: {
    base: 'full',
    md: '3/4',
    xl: 'full',
  },
  p: {
    base: 2,
    md: 3,
    xl: 4,
  },
  position: 'relative',
  shadow: {
    base: '0 0 5px 2px token(colors.p_purple.dark)',
    _dark: '0 0 5px 2px token(colors.p_purple.light)',
  },
  w: 'full',
});

const cTechLoading_circle = circle({
  alignSelf: 'center',
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  size: {
    base: 12,
    md: 16,
  },
});

const cTechLoading_title = css({
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'lg',
  h: {
    base: 3,
    md: 4,
  },
  w: '1/2',
});

const cTechLoading_paragraph = css({
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'lg',
  h: {
    base: 20,
    md: 52,
  },
  w: 'full',
});

const cTechLoading_button = css({
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  bottom: {
    base: 2,
    md: 3,
    xl: 4,
  },
  borderRadius: 'lg',
  h: {
    base: 4,
    md: 5,
    xl: 7,
  },
  position: 'absolute',
  w: '90%',
});

export {
  cTechLoading_loading,
  cTechLoading_circle,
  cTechLoading_title,
  cTechLoading_paragraph,
  cTechLoading_button,
  cTechLoading_container,
};
