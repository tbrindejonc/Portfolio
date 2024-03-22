import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const exp_vExp_experience = vstack({
  bgGradient: 'to-bl',
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  h: 'screen',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.5s',
});

const exp_vExp_toLeftBackground: string = css({
  gradientFrom: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  gradientTo: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
});

const exp_vExp_toRightBackground: string = css({
  gradientFrom: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  gradientTo: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
});

const exp_vExp_looperBase: string = css({
  blur: '5px',
  filter: 'auto',
  h: {
    base: '150vw',
    md: '100vw',
    xl: '50vw',
  },
  objectFit: 'cover',
  position: 'absolute',
  w: {
    base: '150vw',
    md: '100vw',
    xl: '50vw',
  },
});

const exp_vExp_topLooper: string = css({
  right: {
    base: '-25vw',
    xl: '-10vw',
  },
  top: {
    base: '-15vh',
    xl: '-25vh',
  },
});

const exp_vExp_bottomLooper: string = css({
  bottom: {
    base: '-15vh',
    xl: '-25vh',
  },
  left: {
    base: '-25vw',
    xl: '-10vw',
  },
});

const exp_vExp_rainbowLooper: string = css({
  blur: '10px',
  filter: 'auto',
  h: {
    base: '300vw',
    md: '150vw',
    xl: '80vw',
  },
  objectFit: 'cover',
  position: 'absolute',
  w: {
    base: '300vw',
    md: '150vw',
    xl: '80vw',
  },
});

const exp_vExp_otherBottomLooper: string = css({
  bottom: {
    base: '-15vh',
    xl: '-25vh',
  },
  right: {
    base: '-25vw',
    xl: '-10vw',
  },
});

const exp_vExp_otherTopLooper: string = css({
  left: {
    base: '-25vw',
    xl: '-10vw',
  },
  top: {
    base: '-15vh',
    xl: '-25vh',
  },
});

export {
  exp_vExp_experience,
  exp_vExp_toLeftBackground,
  exp_vExp_toRightBackground,
  exp_vExp_looperBase,
  exp_vExp_topLooper,
  exp_vExp_bottomLooper,
  exp_vExp_rainbowLooper,
  exp_vExp_otherBottomLooper,
  exp_vExp_otherTopLooper,
};
