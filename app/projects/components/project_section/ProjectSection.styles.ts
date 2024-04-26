import {vstack} from '@/styled-system/patterns';

const cProjSection_section = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  h: 'screen',
  justifyContent: 'center',
  overflow: 'hidden',
  p: 4,
  position: 'relative',
  transition: 'all 0.5s',
});

export {cProjSection_section};
