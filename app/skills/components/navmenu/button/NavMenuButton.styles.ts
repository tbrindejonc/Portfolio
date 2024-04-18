import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cNavMenuButton_button = vstack({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.200',
  },
  borderRadius: 'lg',
  display: {
    base: 'flex',
    xl: 'none',
  },
  h: {
    base: 14,
    md: 20,
  },
  ms: 6,
  p: 2,
  pointerEvents: 'auto',
  rowGap: 2,
  shadow: '0 0 5px 2px token(colors.p_purple.main)',
  transition: 'all 0.5s',
  w: {
    base: 14,
    md: 20,
  },
});

const cNavMenuButton_buttonLine = css({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  borderRadius: 'full',
  h: 4,
  w: {
    base: 1,
    md: 1.5,
  },
});

export {cNavMenuButton_button, cNavMenuButton_buttonLine};
