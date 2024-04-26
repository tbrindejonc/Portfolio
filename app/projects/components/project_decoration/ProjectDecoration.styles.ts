import {css} from '@/styled-system/css';

const cProjDecoration_firstOne = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomLeftRadius: 'xl',
  h: '98%',
  position: 'absolute',
  top: 0,
  transition: 'all 0.5s',
  w: 8,
});

const cProjDecoration_firstTwo = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomLeftRadius: 'xl',
  bottom: 0,
  h: 8,
  position: 'absolute',
  transition: 'all 0.5s',
  w: 32,
});

const cProjDecoration_firstThree = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderTopRightRadius: 'xl',
  bottom: -6,
  h: 14,
  left: 32,
  position: 'absolute',
  transition: 'all 0.5s',
  w: 8,
});

const cProjDecoration_secondOne = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomRightRadius: 'xl',
  h: '98%',
  position: 'absolute',
  right: 9,
  top: 0,
  transition: 'all 0.5s',
  w: 8,
});

const cProjDecoration_secondTwo = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomRightRadius: 'xl',
  borderTopLeftRadius: 'xl',
  bottom: 0,
  h: 8,
  position: 'absolute',
  right: 0,
  transition: 'all 0.5s',
  w: '80vw',
});

const cProjDecoration_secondThree = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderTopLeftRadius: 'xl',
  bottom: -6,
  h: 14,
  position: 'absolute',
  right: '71vw',
  transition: 'all 0.5s',
  w: 8,
});

const cProjDecoration_thirdOne = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomLeftRadius: 'xl',
  h: '98%',
  left: 9,
  position: 'absolute',
  top: 0,
  transition: 'all 0.5s',
  w: 8,
});

const cProjDecoration_thirdTwo = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderBottomLeftRadius: 'xl',
  borderTopRightRadius: 'xl',
  bottom: 0,
  h: 8,
  left: 0,
  position: 'absolute',
  transition: 'all 0.5s',
  w: '80vw',
});

const cProjDecoration_thirdThree = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  borderTopRightRadius: 'xl',
  bottom: -6,
  h: 14,
  left: '71vw',
  position: 'absolute',
  transition: 'all 0.5s',
  w: 8,
});

export {
  cProjDecoration_firstOne,
  cProjDecoration_firstTwo,
  cProjDecoration_firstThree,
  cProjDecoration_secondOne,
  cProjDecoration_secondTwo,
  cProjDecoration_secondThree,
  cProjDecoration_thirdOne,
  cProjDecoration_thirdTwo,
  cProjDecoration_thirdThree,
};
