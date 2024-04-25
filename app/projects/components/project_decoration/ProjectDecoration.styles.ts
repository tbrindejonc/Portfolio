import {css} from '@/styled-system/css';

const cProjDecoration_decoration = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomLeftRadius: 'xl',
  position: 'absolute',
  top: 0,
  h: '98%',
  transition: 'all 0.5s',
  w: 8,
});

const cProjDecoration_decorationTwo = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomLeftRadius: 'xl',
  position: 'absolute',
  bottom: 0,
  h: 8,
  transition: 'all 0.5s',
  w: 32,
});

const cProjDecoration_decorationThree = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderTopRightRadius: 'xl',
  position: 'absolute',
  bottom: -6,
  h: 14,
  left: 32,
  transition: 'all 0.5s',
  w: 8,
});

export {cProjDecoration_decoration, cProjDecoration_decorationTwo, cProjDecoration_decorationThree};
