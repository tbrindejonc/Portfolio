import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cProjNavMenu_button = vstack({
  bg: {
    base: 'p_blue.200',
    _dark: 'p_blue.dark',
  },
  borderRadius: 'lg',
  h: {
    base: 14,
    md: 20,
  },
  mb: 4,
  me: {
    base: 2,
    md: 6,
  },
  p: 2,
  pointerEvents: 'auto',
  rowGap: 2,
  shadow: '0 0 5px 2px token(colors.p_blue.main)',
  transition: 'all 0.5s',
  w: {
    base: 14,
    md: 20,
  },
});

const cProjNavMenu_buttonLine = css({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'full',
  h: {
    base: 3,
    md: 4,
  },
  w: {
    base: 1,
    md: 1.5,
  },
});

export {cProjNavMenu_button, cProjNavMenu_buttonLine};
