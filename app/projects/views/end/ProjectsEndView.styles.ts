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
  gap: 16,
  h: 'screen',
  justifyContent: 'center',
  p: 4,
  position: 'relative',
  transition: 'all 0.5s',
  w: 'full',
});

const vProjEnd_text = css({
  alignSelf: 'end',
  fontSize: '3xl',
  mb: 14,
  textAlign: 'right',
  textWrap: 'balance',
  w: '3/4',
});

const vProjEnd_link = hstack({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'xl',
  bottom: -4,
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
  left: -4,
  p: 2,
  position: 'absolute',
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  transition: 'all 0.3s ease-in-out',
  w: '70vw',
  zIndex: 1,
});

const vProjEnd_svg = css({
  h: 7,
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
  w: 7,
});

const vProjEnd_decoration = css({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  h: '92%',
  left: 9,
  position: 'absolute',
  top: 0,
  w: 8,
});

export {vProjEnd_text, vProjEnd_link, vProjEnd_svg, vProjEnd_decoration, vProjEnd_end};
