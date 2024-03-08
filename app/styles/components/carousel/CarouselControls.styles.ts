import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const carouselControlsStyle = hstack({
  gap: {
    base: 5,
    md: 7,
  },
  pb: 12,
  pt: {
    base: 2,
    md: 0,
  },
  position: {
    md: 'relative',
  },
});

const arrowStyle = css({
  cursor: 'pointer',
  fill: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  height: {
    base: 10,
    md: 14,
  },
  position: {
    md: 'absolute',
  },
  width: {
    base: 10,
    md: 14,
  },
});

const previousStyle = css({
  filter: 'drop-shadow(-5px 0 5px token(colors.p_purple.main))',
  rotate: '-90deg',
  top: {
    md: '-30vh',
  },
  left: {
    md: '-27vw',
  },
});

const nextStyle = css({
  filter: 'drop-shadow(5px 0 5px token(colors.p_purple.main))',
  rotate: '90deg',
  top: {
    md: '-30vh',
  },
  right: {
    md: '-27vw',
  },
});

const baseSlideItemStyle = css({
  borderRadius: 'xl',
  height: {
    base: 3,
    md: 4,
  },
  width: {
    base: 14,
    md: 20,
  },
});

const activeSlideItemStyle = css({
  bgGradient: 'to-r',
  gradientFrom: 'p_blue.main',
  gradientTo: 'p_purple.main',
  shadow: {
    base: '0 1px 4px 2px token(colors.p_blue.dark)',
    _dark: '0 1px 4px 2px token(colors.p_blue.light)',
  },
});

const inactiveSlideItemStyle = css({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  shadow: '0 0 4px 2px token(colors.p_purple.main)',
});

export {
  carouselControlsStyle,
  arrowStyle,
  previousStyle,
  nextStyle,
  baseSlideItemStyle,
  activeSlideItemStyle,
  inactiveSlideItemStyle,
};
