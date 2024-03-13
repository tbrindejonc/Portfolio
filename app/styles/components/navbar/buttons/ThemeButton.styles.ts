import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';
import {Theme} from '@appTypes/portfolio';

const themeButtonDivStyle = css({
  bgColor: {
    base: 'p_purple.800',
    _dark: 'p_purple.light',
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
  bgColor: 'p_purple.main',
  bottom: 1,
  left: 1,
  position: 'absolute',
  size: {
    base: '22px',
    md: 8,
    xl: 7,
  },
});

const iconContainerStyle = css({
  alignItems: 'center',
  bgColor: {
    base: 'p_purple.light/70',
    _dark: 'p_purple.dark/70',
  },
  border: '2px solid',
  borderColor: {
    base: 'p_purple.light/50',
    _dark: 'p_purple.dark/50',
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

const getMoonStyle = (theme: Theme) => {
  return css({
    display: theme === 'light' ? 'block' : 'none',
    height: {
      md: '30px',
    },
    stroke: 'p_purple.800',
    transition: 'transform 1s',
    width: {
      md: '30px',
    },
  });
};

const getSunStyle = (theme: Theme) => {
  return css({
    display: theme === 'dark' ? 'block' : 'none',
    height: {
      base: '22px',
      md: '30px',
    },
    stroke: 'p_purple.200',
    transition: 'transform 1s',
    width: {
      base: '22px',
      md: '30px',
    },
  });
};

export {themeButtonDivStyle, circleStyle, iconContainerStyle, getMoonStyle, getSunStyle};
