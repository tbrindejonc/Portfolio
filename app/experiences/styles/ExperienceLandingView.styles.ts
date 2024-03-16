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
  gap: 8,
  h: 'screen',
  justifyContent: 'center',
  transition: 'all 0.5s',
});

const textContainerStyle = vstack({
  gap: 8,
  justifyContent: 'center',
  px: 3,
});

const imageStyle: string = css({
  borderRadius: '2xl',
  height: '250px',
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  width: '80%',
});

const titleStyle = css({
  fontFamily: 'bricolage',
  fontSize: '4xl',
  fontWeight: 'bold',
});

const paragraphStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: '1.4em',
  textAlign: 'center',
});

const svgStyle = css({
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  strokeWidth: 4,
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
  fontSize: '2xl',
  fontWeight: 'semibold',
  justifyContent: 'center',
  p: 2,
  w: '4/5',
});

export {experiencesLandingStyle, textContainerStyle, imageStyle, titleStyle, paragraphStyle, svgStyle, linkToNextStyle};
