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

const vContact_pictureContainer = css({
  borderRadius: {
    base: 10,
    md: 20,
  },
  h: {
    base: '300px',
    md: '400px',
    xl: '600px',
  },
  overflow: 'hidden',
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

const vContact_picture = css({
  bgSize: 'cover',
  borderRadius: {
    base: 10,
    md: 20,
  },
  h: 'auto',
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
});

const vContact_buttonBorder = vstack({
  bgGradient: {
    base: 'to-r',
    _hover: 'to-l',
  },
  borderRadius: 'xl',
  gradientFrom: 'p_blue.main',
  gradientTo: 'p_purple.main',
  p: {
    base: 1,
    md: 2,
  },
  transition: 'all 0.5s',
  w: {
    base: '4/5',
    xl: '2/3',
  },
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
  vContact_pictureContainer,
  vContact_picture,
  vContact_title,
  vContact_button,
  vContact_buttonBorder,
  vContact_titleAndButton,
};
