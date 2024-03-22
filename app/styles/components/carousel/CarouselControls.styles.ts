import {hstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cCarouselControls_carouselControls = hstack({
  display: {
    base: 'flex',
    xl: 'none',
  },
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

const cCarouselControls_arrow = css({
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

const cCarouselControls_previous = css({
  filter: 'drop-shadow(-5px 0 5px token(colors.p_purple.main))',
  left: {
    md: '-27vw',
  },
  rotate: '-90deg',
  top: {
    md: '-30vh',
  },
});

const cCarouselControls_next = css({
  filter: 'drop-shadow(5px 0 5px token(colors.p_purple.main))',
  right: {
    md: '-27vw',
  },
  rotate: '90deg',
  top: {
    md: '-30vh',
  },
});

const cCarouselControls_slideItemBase = css({
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

const cCarouselControls_activeSlideItem = css({
  bgGradient: 'to-r',
  gradientFrom: 'p_blue.main',
  gradientTo: 'p_purple.main',
  shadow: {
    base: '0 1px 4px 2px token(colors.p_blue.dark)',
    _dark: '0 1px 4px 2px token(colors.p_blue.light)',
  },
});

const cCarouselControls_inactiveSlideItem = css({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  shadow: '0 0 4px 2px token(colors.p_purple.main)',
});

export {
  cCarouselControls_carouselControls,
  cCarouselControls_arrow,
  cCarouselControls_previous,
  cCarouselControls_next,
  cCarouselControls_slideItemBase,
  cCarouselControls_activeSlideItem,
  cCarouselControls_inactiveSlideItem,
};
