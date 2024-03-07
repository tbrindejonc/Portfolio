import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const carouselControlsStyle = hstack({
  gap: 5,
  pb: 12,
  pt: 2,
});

const arrowStyle = css({
  cursor: 'pointer',
  fill: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  height: 10,
  width: 10,
});

const previousStyle = css({
  filter: 'drop-shadow(-5px 0 5px token(colors.p_purple.main))',
  rotate: '-90deg',
});

const nextStyle = css({
  filter: 'drop-shadow(5px 0 5px token(colors.p_purple.main))',
  rotate: '90deg',
});

const baseSlideItemStyle = css({
  borderRadius: 'xl',
  height: 3,
  width: 14,
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
