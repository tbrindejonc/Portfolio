import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

const vLanding_landing: string = css({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  fontFamily: 'bricolage',
  h: 'screen',
  overflow: 'hidden',
  pt: {
    base: 20,
    md: 40,
  },
  px: {
    base: 2,
    md: 14,
    xl: '10em',
  },
  position: 'relative',
  transition: 'all 0.5s',
  w: 'full',
});

const vLanding_imageContainer: string = css({
  borderRadius: {
    base: 10,
    md: 20,
  },
  h: {
    base: '300px',
    md: '400px',
    xl: '500px',
  },
  overflow: 'hidden',
  position: 'absolute',
  shadow: {
    base: '0px 4px 4px 0 token(colors.p_blue.dark_25)',
    _dark: '0px 4px 4px 0 token(colors.p_blue.light_25)',
  },
  top: {
    xl: '15em',
  },
  w: {
    base: '300px',
    md: '400px',
    xl: '500px',
  },
  zIndex: 1,
});

const vLanding_image: string = css({
  bgSize: 'cover',
  borderRadius: {
    base: 10,
    md: 20,
  },
  h: 'auto',
  w: {
    base: '300px',
    md: '400px',
    xl: '500px',
  },
});

const vLanding_nameContainer: string = css({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  borderRadius: {
    base: 10,
    md: 20,
  },
  lineHeight: {
    xl: '6em',
  },
  p: {
    base: 2,
    xl: 4,
  },
  px: {
    base: 4,
    md: 6,
  },
  position: 'absolute',
  right: {
    base: '-3em',
    md: '5em',
    xl: '50em',
  },
  top: {
    base: '21em',
    md: '9em',
    xl: '14em',
  },
  transition: 'all 0.5s',
  w: {
    base: '90vw',
    md: '45vw',
    xl: '27vw',
  },
  zIndex: 1,
});

const vLanding_name: string = css({
  bg: {
    base: 'linear-gradient(to right, token(colors.p_blue.dark), token(colors.p_blue.main), token(colors.p_purple.main), token(colors.p_purple.dark))',
    _dark:
      'linear-gradient(to right, token(colors.p_blue.light), token(colors.p_blue.main), token(colors.p_purple.main), token(colors.p_purple.light))',
  },
  bgClip: {
    base: 'text',
    _dark: 'text',
  },
  color: 'transparent',
  fontSize: {
    base: '5xl',
    md: '6xl',
    xl: '8xl',
  },
  fontWeight: 'bold',
  textShadow: {
    base: '4px 4px 3px token(colors.p_purple.dark_25)',
    _dark: '4px 4px 3px token(colors.p_purple.light_25)',
  },
  transition: 'all 0.5s',
});

const vLanding_circle: string = circle({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  left: {
    base: '-3em',
    md: '7em',
    xl: '75em',
  },
  position: 'absolute',
  shadow: '15px 20px 20px 0 token(colors.p_purple.main)',
  size: {
    base: '130vw',
    md: '80vw',
    xl: '40vw',
  },
  top: {
    base: '17em',
    md: '25em',
    xl: '8em',
  },
  zIndex: 0,
});

const vLanding_circleTitle: string = css({
  fontSize: {
    base: '3xl',
    md: '6xl',
    xl: '7xl',
  },
  fontWeight: 'bold',
  position: 'absolute',
  right: {
    base: '3.5em',
    md: '2em',
    xl: '1.5em',
  },
  textAlign: 'right',
  top: {
    base: '9em',
    md: '5em',
    xl: '4em',
  },
  w: {
    base: '2/3',
    md: '3/4',
  },
  zIndex: 1,
});

export {
  vLanding_landing,
  vLanding_imageContainer,
  vLanding_image,
  vLanding_nameContainer,
  vLanding_name,
  vLanding_circle,
  vLanding_circleTitle,
};
