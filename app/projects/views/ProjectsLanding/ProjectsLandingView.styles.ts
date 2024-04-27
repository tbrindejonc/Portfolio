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
  gap: 6,
  h: 'screen',
  overflow: 'hidden',
  p: 4,
  pt: 16,
  w: 'full',
  transition: 'all 0.5s',
});

const vProjLanding_image: string = css({
  borderRadius: '2xl',
  h: {
    base: '250px',
    md: '350px',
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
    xl: '70%',
  },
});

const vProjLanding_paragraph: string = css({
  fontSize: '2xl',
  textAlign: 'center',
  textWrap: 'balance',
  w: '90%',
});

const vProjLanding_title: string = css({
  fontFamily: 'bricolage',
  fontSize: '5xl',
  fontWeight: 'bold',
  lineHeight: 1,
});

const vProjLanding_linkSvg = css({
  h: 7,
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
  w: 7,
});

const vProjLanding_container = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

const vProjLanding_textContainer = vstack({
  gap: 6,
  position: 'relative',
});

const vProjLanding_link = hstack({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'md',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: '2xl',
  fontWeight: 'bold',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  transition: 'all 0.3s ease-in-out',
  w: 'full',
  zIndex: 1,
});

const vProjLanding_decoration = hstack({
  bg: {
    base: 'neutral.300',
    _dark: 'neutral.700',
  },
  h: 20,
  position: 'absolute',
  top: '40vh',
  transition: 'all 0.5s',
  w: 10,
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
