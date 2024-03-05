import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const divStyle = vstack({
  borderEndRadius: 'lg',
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  shadow: {
    base: '4px 4px 4px 0 token(colors.p_purple.dark_25)',
    _dark: '4px 4px 4px 0 token(colors.p_purple.light_25)',
  },
  textAlign: 'center',
  transition: 'background-color 0.5s',
  width: {
    base: '50vw',
    md: '40vw',
  },
});

const getLinkStyle = (active: number, index: number) => {
  return css({
    color: {
      base: active === index ? 'p_purple.800' : 'neutral.700',
      _dark: active === index ? 'p_purple.400' : 'neutral.light',
    },
    fontSize: {
      base: 'lg',
      md: '3xl',
    },
    fontWeight: 'bold',
    paddingY: {
      base: 2,
      md: 4,
    },
    position: 'relative',
    transition: 'color 0.5s',
    width: 'full',
  });
};

const getSelectedLinkStyle = (active: number, index: number) => {
  return css({
    bgGradient: 'to-r',
    borderEndRadius: 'xl',
    display: active === index ? 'block' : 'none',
    gradientFrom: {
      base: 'p_purple.700',
      _dark: 'p_purple.light',
    },
    gradientTo: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    height: {
      base: 10,
      md: '6.5vh',
    },
    left: 0,
    position: 'absolute',
    shadow: '2px 0 4px 0',
    shadowColor: {
      base: 'p_purple.dark/25',
      _dark: 'p_purple.light/25',
    },
    transition: 'all 0.5s',
    top: 0,
    width: {
      base: 2,
      md: 4,
    },
  });
};

export {divStyle, getLinkStyle, getSelectedLinkStyle};
