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
  p: 4,
});

const journeyTitleStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontFamily: 'bricolage',
  fontSize: '4xl',
  fontWeight: 'bold',
});

const imageStyle = css({
  borderRadius: 'xl',
  height: 'auto',
  width: 'full',
});

const contentWrapperStyle = vstack({
  bgGradient: 'to-t',
  borderRadius: 'xl',
  fontSize: 'xl',
  gap: 16,
  gradientFrom: 'p_purple.main',
  gradientTo: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  p: 4,
  transition: 'all 0.5s',
});

const textSectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

const reversedTextSectionStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  textAlign: 'end',
});

const linkStyle = css({
  border: '3px solid',
  borderColor: 'transparent',
  borderRadius: 'md',
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
  },
  fontFamily: 'bricolage',
  fontSize: '2xl',
  fontWeight: 'bold',
  p: 2,
  textAlign: 'center',
  transition: 'all 0.5s',
  width: 'full',
});

export {
  journeyStyle,
  journeyTitleStyle,
  imageStyle,
  contentWrapperStyle,
  textSectionStyle,
  linkStyle,
  reversedTextSectionStyle,
};
