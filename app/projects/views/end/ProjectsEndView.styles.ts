import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vProjEnd_end = vstack({
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
  transition: 'all 0.5s',
  w: 'full',
});

const vProjEnd_container = vstack({
  gap: 16,
  h: 'full',
  justifyContent: 'center',
  position: 'relative',
  p: {
    base: 4,
    md: 8,
  },
  transition: 'all 0.5s',
  w: 'full',
});

const vProjEnd_text = css({
  alignSelf: {
    base: 'end',
    xl: 'center',
  },
  fontSize: {
    base: '3xl',
    md: '5xl',
    xl: '6xl',
  },
  mb: {
    base: 14,
    xl: '20vh',
  },
  ms: {
    xl: '20vw',
  },
  textAlign: 'right',
  textWrap: 'balance',
  w: {
    base: '3/4',
    xl: '1/2',
  },
});

const vProjEnd_link = hstack({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'xl',
  bottom: 0,
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
  fontWeight: 'bold',
  gap: 4,
  justifyContent: 'center',
  left: {
    base: -4,
    md: -8,
    xl: '-5vw',
  },
  p: {
    base: 2,
    md: 4,
  },
  position: 'absolute',
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  transition: 'all 0.3s ease-in-out',
  w: {
    base: '70vw',
    md: '50vw',
    xl: '30vw',
  },
  zIndex: 1,
});

const vProjEnd_svg = css({
  h: {
    base: 7,
    md: 10,
  },
  rotate: {
    base: '0deg',
    _groupHover: '-90deg',
  },
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  strokeWidth: 3,
  transition: 'all 0.3s ease-in-out',
  w: {
    base: 7,
    md: 10,
  },
});

const vProjEnd_decoration = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  h: '92%',
  left: {
    base: 9,
    md: '11.9vw',
    xl: '21.1vw',
  },
  position: 'absolute',
  top: 0,
  w: {
    base: 8,
    md: 12,
  },
});

export {vProjEnd_text, vProjEnd_link, vProjEnd_svg, vProjEnd_decoration, vProjEnd_end, vProjEnd_container};
