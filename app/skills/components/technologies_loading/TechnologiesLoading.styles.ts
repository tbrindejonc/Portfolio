import {circle, grid, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cTechLoading_container = grid({
  gridTemplateColumns: 2,
  gap: 6,
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
  gap: 4,
  h: 'full',
  p: 2,
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
  size: 12,
});

const cTechLoading_title = css({
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'lg',
  h: 3,
  w: '1/2',
});

const cTechLoading_paragraph = css({
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'lg',
  h: 20,
  w: 'full',
});

const cTechLoading_button = css({
  animation: 'pulse',
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  bottom: 2,
  borderRadius: 'lg',
  h: 4,
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
