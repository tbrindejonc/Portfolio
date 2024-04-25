import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vProjLanding_landing = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: {
    base: 6,
    md: 10,
    xl: 16,
  },
  h: 'screen',
  overflow: 'hidden',
  p: 4,
  pt: {
    base: 16,
    md: 28,
  },
  w: 'full',
  transition: 'all 0.5s',
});

const vProjLanding_image: string = css({
  borderRadius: '2xl',
  h: {
    base: '250px',
    md: '400px',
    xl: '500px',
  },
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  w: {
    base: '80%',
    md: '50%',
    xl: '40%',
  },
});

const vProjLanding_paragraph: string = css({
  fontSize: {
    base: '2xl',
    md: '4xl',
    xl: '2.5em',
  },
  textAlign: {
    base: 'center',
    xl: 'left',
  },
  textWrap: 'balance',
  w: {
    base: '90%',
    md: '70%',
  },
});

const vProjLanding_title: string = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '5xl',
    md: '7xl',
  },
  fontWeight: 'bold',
  lineHeight: 1,
});

const vProjLanding_linkSvg = css({
  h: {
    base: 7,
    md: 10,
  },
  rotate: {
    base: '-90deg',
    _groupHover: '0deg',
  },
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  strokeWidth: 4,
  transition: 'all 0.3s ease-in-out',
  w: {
    base: 7,
    md: 10,
  },
});

const vProjLanding_container = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row-reverse',
  },
  gap: {
    base: 6,
    md: 10,
  },
  w: {
    xl: '80%',
  },
});

const vProjLanding_textContainer = vstack({
  alignItems: {
    base: 'center',
    xl: 'start',
  },
  gap: {
    base: 6,
    md: 10,
    xl: 16,
  },
  position: 'relative',
});

const vProjLanding_link = hstack({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'xl',
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
  p: 2,
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  transition: 'all 0.3s ease-in-out',
  w: {
    base: 'full',
    md: '50%',
  },
  zIndex: 1,
});

const vProjLanding_decoration = hstack({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  h: {
    base: 32,
    xl: 80,
  },
  left: {
    xl: 44,
  },
  position: 'absolute',
  top: {
    base: '40vh',
    md: '35vh',
    xl: '50vh',
  },
  transition: 'all 0.5s',
  w: 8,
});

export {
  vProjLanding_link,
  vProjLanding_container,
  vProjLanding_decoration,
  vProjLanding_image,
  vProjLanding_landing,
  vProjLanding_paragraph,
  vProjLanding_textContainer,
  vProjLanding_title,
  vProjLanding_linkSvg,
};
