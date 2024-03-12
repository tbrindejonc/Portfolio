import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const sectionStyle = vstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: {
    base: 4,
    md: 12,
  },
  h: {
    md: 'screen',
  },
  overflow: 'hidden',
  pt: 20,
  transition: 'all 0.5s',
});

const explanationStyle = vstack({
  alignItems: {
    md: 'start',
  },
  border: '3px solid',
  borderColor: {
    base: 'p_purple.700',
    _dark: 'p_purple.200',
  },
  borderRadius: 'xl',
  color: {
    base: 'neutral.700',
    _dark: 'neutral.light',
  },
  fontSize: {
    base: 'xl',
    md: '3xl',
    xl: '4xl',
  },
  fontWeight: 'bold',
  gap: 4,
  minH: {
    md: '23vh',
    xl: '25vh',
  },
  p: {
    base: 3,
    md: 6,
  },
  w: '90vw',
});

const explanationTitleStyle = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
    xl: '6xl',
  },
});

const firstSpanStyle = css({
  color: 'p_blue.main',
});

const secondSpanStyle = css({
  color: 'p_purple.main',
});

export {sectionStyle, explanationStyle, explanationTitleStyle, firstSpanStyle, secondSpanStyle};
