import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vLegal_legal = vstack({
  alignItems: 'start',
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.800',
    _dark: 'neutral.light',
  },
  fontSize: {
    md: 'xl',
  },
  p: {
    base: 4,
    md: 8,
  },
  textWrap: 'balance',
  transition: 'all 0.5s',
});

const vLegal_bigHeading = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.400',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '4xl',
  },
  fontWeight: 'bold',
});

const vLegal_littleHeading = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.400',
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: 'xl',
    md: '2xl',
  },
  fontWeight: 'bold',
});

const vLegal_firstSection = vstack({
  alignItems: 'start',
  gap: 4,
  pt: {
    base: 12,
    md: 16,
  },
  w: {
    md: '70%',
  },
});

const vLegal_section = vstack({
  alignItems: 'start',
  gap: 4,
  pb: 6,
});

const vLegal_link = css({
  textDecoration: 'underline',
});

export {vLegal_legal, vLegal_bigHeading, vLegal_firstSection, vLegal_link, vLegal_littleHeading, vLegal_section};
