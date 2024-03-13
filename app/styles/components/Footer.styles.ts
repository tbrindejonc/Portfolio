import {grid} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import {FooterLink} from '@appTypes/portfolio';

const footerStyle = grid({
  bgColor: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  columns: {
    base: 3,
    xl: 6,
  },
  fontFamily: 'bricolage',
  fontSize: {
    base: '10px',
    md: 'md',
  },
  fontWeight: 'bold',
  gap: {
    base: 2,
    md: 4,
    xl: 0,
  },
  justifyItems: {
    xl: 'center',
  },
  p: {
    base: 2,
    md: 4,
  },
  paddingX: {
    md: 12,
    xl: 24,
  },
  rowGap: 4,
  shadow: {
    base: '0px -4px 4px 0 token(colors.p_blue.dark_25)',
    _dark: '0px -4px 4px 0 token(colors.p_blue.light_25)',
  },
  textAlign: {
    xl: 'center',
  },
});

const linkStyle = css({
  width: 'fit',
  textDecoration: {
    _hover: 'underline',
  },
});

const getSpanStyle = (link: FooterLink) => {
  return css({
    display: !link.span ? 'none' : 'inline',
    color: {
      base: 'p_purple.main',
      _dark: 'p_blue.main',
    },
  });
};

export {footerStyle, linkStyle, getSpanStyle};
