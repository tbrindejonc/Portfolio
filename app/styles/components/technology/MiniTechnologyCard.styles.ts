import {circle, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const techItemStyle = vstack({
  bgColor: {
    base: 'p_blue.300',
    _dark: 'p_blue.800',
  },
  borderRadius: 'md',
  fontSize: {
    base: 'xs',
    md: 'md',
  },
  justifyContent: 'center',
  p: 1,
  w: {
    base: 20,
    md: 28,
  },
  h: {
    base: '15vh',
    md: 28,
  },
  textAlign: 'center',
});

const techImageContainer = circle({
  bgColor: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  size: 14,
});

const techImageStyle = css({
  w: 10,
  h: 10,
  objectFit: 'cover',
});

export {techItemStyle, techImageContainer, techImageStyle};
