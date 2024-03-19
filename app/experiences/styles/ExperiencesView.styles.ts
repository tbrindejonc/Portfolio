import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const baseContainerStyle = vstack({
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

const firstAndThirdExpStyle: string = css({
  gradientFrom: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  gradientTo: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
});

const secondExpStyle: string = css({
  gradientFrom: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  gradientTo: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
});

const baseLooperStyle: string = css({
  blur: '5px',
  filter: 'auto',
  height: {
    base: '150vw',
    md: '100vw',
    xl: '50vw',
  },
  objectFit: 'cover',
  position: 'absolute',
  width: {
    base: '150vw',
    md: '100vw',
    xl: '50vw',
  },
});

const topLooperStyle: string = css({
  top: {
    base: '-15vh',
    xl: '-25vh',
  },
  right: {
    base: '-25vw',
    xl: '-10vw',
  },
});

const bottomLooperStyle: string = css({
  bottom: {
    base: '-15vh',
    xl: '-25vh',
  },
  left: {
    base: '-25vw',
    xl: '-10vw',
  },
});

const rainbowLooperStyle: string = css({
  blur: '10px',
  filter: 'auto',
  height: {
    base: '300vw',
    md: '150vw',
    xl: '80vw',
  },
  objectFit: 'cover',
  position: 'absolute',
  width: {
    base: '300vw',
    md: '150vw',
    xl: '80vw',
  },
});

const otherBottomLooperStyle: string = css({
  bottom: {
    base: '-15vh',
    xl: '-25vh',
  },
  right: {
    base: '-25vw',
    xl: '-10vw',
  },
});

const otherTopLooperStyle: string = css({
  top: {
    base: '-15vh',
    xl: '-25vh',
  },
  left: {
    base: '-25vw',
    xl: '-10vw',
  },
});

export {
  baseContainerStyle,
  firstAndThirdExpStyle,
  secondExpStyle,
  baseLooperStyle,
  topLooperStyle,
  bottomLooperStyle,
  rainbowLooperStyle,
  otherBottomLooperStyle,
  otherTopLooperStyle,
};
