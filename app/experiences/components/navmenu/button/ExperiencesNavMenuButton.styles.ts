import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cExpNavMenu_button = vstack({
  bg: {
    base: 'p_blue.200',
    _dark: 'p_blue.dark',
  },
  borderRadius: 'lg',
  h: 14,
  mb: 4,
  me: 2,
  p: 2,
  rowGap: 2,
  shadow: '0 0 5px 2px token(colors.p_blue.main)',
  transition: 'all 0.5s',
  w: 14,
});

const cExpNavMenu_buttonLine = css({
  borderRadius: 'full',
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  h: 3,
  w: 1,
});

export {cExpNavMenu_button, cExpNavMenu_buttonLine};
