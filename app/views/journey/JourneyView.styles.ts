import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vJourney_journey = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: 4,
  h: {
    md: 'screen',
  },
  p: {
    base: 4,
    md: 8,
  },
});

const vJourney_title = css({
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

const vJourney_image = css({
  borderRadius: 'xl',
  h: 'auto',
  w: {
    base: 'full',
    md: '1/2',
    xl: '1/5',
  },
});

const vJourney_contentWrapper = vstack({
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
  p: {
    base: 4,
    md: 8,
  },
  transition: 'all 0.5s',
});

const vJourney_textAndImage = css({
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

const vJourney_reversedTextAndImage = css({
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

const vJourney_button = css({
  bg: {
    base: 'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to right, token(colors.p_blue.dark), token(colors.p_blue.dark)) border-box',
    _dark:
      'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to right, token(colors.p_blue.300), token(colors.p_blue.300)) border-box',
    _hover: {
      base: 'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to right, token(colors.p_blue.700), token(colors.p_blue.dark), token(colors.p_blue.700)) border-box',
      _dark:
        'linear-gradient(token(colors.p_purple.main), token(colors.p_purple.main)) padding-box, linear-gradient(to right, token(colors.p_blue.600), token(colors.p_blue.700), token(colors.p_blue.700)) border-box',
    },
  },
  border: {
    base: '3px solid',
    md: '4px solid',
  },
  borderColor: 'transparent',
  borderRadius: {
    base: 'md',
    md: 'xl',
  },
  color: {
    base: 'p_blue.dark',
    _dark: 'p_blue.300',
    _hover: 'p_blue.700',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '3xl',
  },
  fontWeight: 'bold',
  p: {
    base: 2,
    md: 4,
    xl: 2,
  },
  textAlign: 'center',
  transition: 'all 0.5s',
  w: {
    base: 'full',
    md: '3/5',
    xl: '1/4',
  },
});

const vJourney_paragraph = css({
  fontSize: {
    xl: '3xl',
  },
  w: {
    xl: '2/5',
  },
});

export {
  vJourney_journey,
  vJourney_title,
  vJourney_image,
  vJourney_contentWrapper,
  vJourney_textAndImage,
  vJourney_button,
  vJourney_reversedTextAndImage,
  vJourney_paragraph,
};
