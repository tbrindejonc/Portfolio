import {css} from '@/styled-system/css';
import {hstack, vstack} from '@/styled-system/patterns';

const vContact_contact = css({
  alignItems: 'center',
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  gap: {
    base: 10,
    md: 20,
  },
  h: 'screen',
  justifyContent: 'center',
  transition: 'all 0.5s',
  w: 'full',
});

const vContact_titleContainer = vstack({
  alignItems: 'center',
  gap: 6,
});

const vContact_image: string = css({
  borderRadius: '2xl',
  h: {
    base: '60vw',
    md: '40vw',
    xl: '20vw',
  },
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  w: {
    base: '60vw',
    md: '40vw',
    xl: '20vw',
  },
});

const vContact_linkImage = css({
  h: {
    base: 16,
    md: 20,
  },
  objectFit: 'cover',
  w: {
    base: 16,
    md: 20,
  },
});

const vContact_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
  },
  fontWeight: 'bold',
});

const vContact_linksContainer = vstack({
  alignItems: 'center',
  border: {
    base: '2px solid',
    md: '4px solid',
  },
  borderColor: {
    base: 'p_purple.main',
    md: 'p_purple.main',
  },
  borderRadius: 'xl',
  gap: {
    base: 6,
    md: 8,
  },
  p: {
    base: 2,
    md: 4,
  },
});

const vContact_link = hstack({
  alignItems: 'center',
  bg: {
    base: 'neutral.200',
    _dark: 'neutral.700',
    _hover: {
      base: 'neutral.300',
      _dark: 'neutral.800',
    },
  },
  borderRadius: 'md',
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
  gap: {
    base: 6,
    md: 8,
  },
  minW: {
    base: '70vw',
    md: '50vw',
    xl: '30vw',
  },
  p: {
    base: 2,
    md: 4,
  },
  transition: 'all 0.5s',
});

export {
  vContact_contact,
  vContact_titleContainer,
  vContact_image,
  vContact_linkImage,
  vContact_title,
  vContact_linksContainer,
  vContact_link,
};
