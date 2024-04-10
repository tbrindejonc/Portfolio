import {circle, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cMiniTechCard_miniTechCard = vstack({
  bg: {
    base: 'p_blue.300',
    _dark: 'p_blue.800',
  },
  borderRadius: 'md',
  fontSize: {
    base: 'xs',
    md: 'md',
  },
  h: {
    base: '15vh',
    md: 28,
  },
  justifyContent: 'center',
  p: 1,
  w: {
    base: 20,
    md: 28,
  },
  textAlign: 'center',
});

const cMiniTechCard_iconContainer = circle({
  bg: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  size: 14,
});

const cMiniTechCard_icon = css({
  h: 10,
  objectFit: 'cover',
  w: 10,
});

export {cMiniTechCard_miniTechCard, cMiniTechCard_iconContainer, cMiniTechCard_icon};
