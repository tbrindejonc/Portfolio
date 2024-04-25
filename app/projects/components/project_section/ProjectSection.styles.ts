import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

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
  p: 4,
  position: 'relative',
  transition: 'all 0.5s',
});

const cProjSection_decoration = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  position: 'absolute',
  top: 0,
  h: 'full',
  transition: 'all 0.5s',
  w: 10,
});

export {cProjSection_section, cProjSection_decoration};
