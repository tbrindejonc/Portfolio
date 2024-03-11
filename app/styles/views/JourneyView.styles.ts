import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const journeyStyle = vstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: 4,
  h: {
    xl: 'screen',
  },
  p: {
    base: 4,
    md: 8,
  },
});

const journeyTitleStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '4xl',
    md: '6xl',
  },
  fontWeight: 'bold',
  mb: {
    xl: 2,
  },
});

const imageStyle = css({
  borderRadius: 'xl',
  height: 'auto',
  width: {
    base: 'full',
    md: '1/2',
    xl: '1/4',
  },
});

const contentWrapperStyle = vstack({
  bgGradient: 'to-t',
  borderRadius: {
    base: 'xl',
    md: '2xl',
  },
  fontSize: {
    base: 'xl',
    md: '2xl',
  },
  gap: {
    base: 16,
    md: 24,
    xl: 10,
  },
  gradientFrom: 'p_purple.main',
  gradientTo: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  h: {
    xl: 'screen',
  },
  p: {
    base: 4,
    md: 8,
  },
  transition: 'all 0.5s',
});

const textSectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'column',
    md: 'row',
  },
  gap: 6,
  justifyContent: {
    xl: 'space-around',
  },
});

const reversedTextSectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'column',
    md: 'row-reverse',
  },
  gap: 6,
  justifyContent: {
    xl: 'space-around',
  },
  textAlign: 'end',
});

const linkStyle = css({
  border: {
    base: '3px solid',
    md: '4px solid',
    xl: '5px solid',
  },
  borderColor: 'transparent',
  borderRadius: {
    base: 'md',
    md: 'xl',
  },
  bg: {
    base: 'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to right, token(colors.p_blue.dark), token(colors.p_blue.dark)) border-box',
    _dark:
      'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to right, token(colors.p_blue.300), token(colors.p_blue.300)) border-box',
    _hover: {
      base: 'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to top, token(colors.p_blue.700), token(colors.p_blue.dark), token(colors.p_blue.700)) border-box',
      _dark:
        'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to top, token(colors.p_blue.main), token(colors.p_blue.300), token(colors.p_blue.main)) border-box',
    },
  },
  color: {
    base: 'p_blue.dark',
    _dark: 'p_blue.300',
    _hover: {
      base: 'p_blue.700',
      _dark: 'p_blue.400',
    },
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '3xl',
    xl: '4xl',
  },
  fontWeight: 'bold',
  p: {
    base: 2,
    md: 4,
  },
  textAlign: 'center',
  transition: 'all 0.5s',
  width: {
    base: 'full',
    md: '3/5',
    xl: '1/3',
  },
});

const paragraphStyle = css({
  fontSize: {
    xl: '3xl',
  },
  width: {
    xl: '1/3',
  },
});

export {
  journeyStyle,
  journeyTitleStyle,
  imageStyle,
  contentWrapperStyle,
  textSectionStyle,
  linkStyle,
  reversedTextSectionStyle,
  paragraphStyle,
};
