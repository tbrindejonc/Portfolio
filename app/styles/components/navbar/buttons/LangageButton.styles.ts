import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

const langageButtonStyle = css({
  bgColor: {
    base: 'p_blue.800',
    _dark: 'p_blue.light',
  },
  borderRadius: 10,
  cursor: 'pointer',
  height: {
    base: 10,
    md: 14,
    xl: 12,
  },
  position: 'relative',
  transition: 'background-color 0.5s',
  width: {
    base: 10,
    md: 14,
    xl: 12,
  },
});

const circleStyle = circle({
  bgColor: 'p_blue.main',
  position: 'absolute',
  right: 1,
  size: {
    base: '22px',
    md: 8,
    xl: 7,
  },
  top: 1,
});

const langageContainerStyle = css({
  alignItems: 'center',
  bgColor: {
    base: 'p_blue.light/70',
    _dark: 'p_blue.dark/70',
  },
  border: '2px solid',
  borderColor: {
    base: 'p_blue.light/50',
    _dark: 'p_blue.dark/50',
  },
  borderRadius: 7,
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  height: {
    base: 7,
    md: 10,
    xl: 9,
  },
  justifyContent: 'center',
  position: 'absolute',
  right: {
    base: '6px',
    md: '8px',
    xl: '6px',
  },
  top: {
    base: '6px',
    md: '8px',
    xl: '6px',
  },
  transition: 'background-color 0.5s',
  width: {
    base: 7,
    md: 10,
    xl: 9,
  },
});

const langageStyle = css({
  color: {
    base: 'p_blue.800',
    _dark: 'p_blue.light',
  },
  fontSize: {
    base: 'sm',
    md: 'lg',
  },
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: 'color 0.5s',
});

export {langageButtonStyle, circleStyle, langageContainerStyle, langageStyle};
