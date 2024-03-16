import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const experiencesLandingStyle = vstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: {
    base: 8,
    md: 12,
  },
  h: 'screen',
  justifyContent: 'center',
  transition: 'all 0.5s',
});

const textContainerStyle = vstack({
  gap: {
    base: 8,
    md: 12,
  },
  justifyContent: 'center',
  px: {
    base: 3,
    md: 8,
  },
});

const imageStyle: string = css({
  borderRadius: '2xl',
  height: {
    base: '250px',
    md: '350px',
  },
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  width: '50%',
});

const titleStyle = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '4xl',
    md: '6xl',
  },
  fontWeight: 'bold',
});

const paragraphStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: {
    base: '1.4em',
    md: '4xl',
  },
  textAlign: 'center',
});

const svgStyle = css({
  h: {
    base: 7,
    md: 12,
  },
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  strokeWidth: 4,
  w: {
    base: 7,
    md: 12,
  },
});

const linkToNextStyle = hstack({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'xl',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
  fontWeight: 'semibold',
  gap: {
    base: 2,
    md: 4,
  },
  justifyContent: 'center',
  p: {
    base: 2,
    md: 4,
  },
  w: {
    base: '4/5',
    md: '1/2',
  },
});

export {experiencesLandingStyle, textContainerStyle, imageStyle, titleStyle, paragraphStyle, svgStyle, linkToNextStyle};
