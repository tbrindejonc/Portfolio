import {css} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

const vContact_contact = css({
  alignItems: 'center',
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row-reverse',
  },
  gap: {
    base: 12,
    md: 16,
  },
  h: {
    base: 'fit',
    md: '80vh',
    xl: 'screen',
  },
  p: {
    base: 4,
    md: 8,
    xl: 20,
  },
  pb: 10,
  transition: 'all 0.5s',
});

const vContact_picture = css({
  bgSize: 'cover',
  borderRadius: {
    base: 10,
    md: 20,
  },
  h: {
    base: '300px',
    md: '400px',
    xl: '600px',
  },
  objectFit: 'cover',
  objectPosition: 'top',
  shadow: {
    base: '0px 4px 4px 0 token(colors.p_blue.dark_25)',
    _dark: '0px 4px 4px 0 token(colors.p_blue.light_25)',
  },
  w: {
    base: '300px',
    md: '400px',
    xl: '600px',
  },
});

const vContact_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '4xl',
    md: '6xl',
    xl: '7xl',
  },
  fontWeight: 'bold',
  letterSpacing: 'wide',
  textAlign: {
    base: 'center',
    xl: 'right',
  },
});

const vContact_button = css({
  bg: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: 'lg',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '4xl',
    xl: '6xl',
  },
  fontWeight: 'bold',
  p: 4,
  textAlign: 'center',
  transition: 'all 0.5s',
  w: 'full',
  zIndex: 1,
});

const vContact_buttonBorder = vstack({
  borderRadius: 'xl',
  p: {
    base: 1,
    md: 2,
  },
  overflow: 'hidden',
  position: 'relative',
  w: {
    base: '4/5',
    xl: '2/3',
  },
});

const vContact_buttonBorderHover = css({
  bgGradient: 'to-r',
  gradientFrom: 'p_blue.main',
  gradientTo: 'p_purple.main',
  position: 'absolute',
  rotate: {
    _groupHover: '180deg',
  },
  top: '-100%',
  transition: 'all 0.5s ease-in-out',
  w: '160%',
  h: '80vh',
  zIndex: 0,
});

const vContact_titleAndButton = vstack({
  gap: {
    base: 12,
    md: 16,
    xl: 32,
  },
  justify: 'center',
  w: {
    xl: '1/2',
  },
});

export {
  vContact_contact,
  vContact_picture,
  vContact_title,
  vContact_button,
  vContact_buttonBorder,
  vContact_buttonBorderHover,
  vContact_titleAndButton,
};
