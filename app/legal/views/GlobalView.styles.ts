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
  p: 4,
  textWrap: 'balance',
  transition: 'all 0.5s',
});

const vLegal_bigHeading = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.400',
  },
  fontFamily: 'bricolage',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const vLegal_littleHeading = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.400',
  },
  fontFamily: 'bricolage',
  fontSize: 'xl',
  fontWeight: 'bold',
});

const vLegal_firstSection = vstack({
  alignItems: 'start',
  gap: 4,
  pt: 12,
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
