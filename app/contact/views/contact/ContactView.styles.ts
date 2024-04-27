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
  flexDirection: 'column',
  gap: 10,
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
  h: '60vw',
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  w: '60vw',
});

const vContact_linkImage = css({
  h: 16,
  objectFit: 'cover',
  w: 16,
});

const vContact_title = css({
  fontFamily: 'bricolage',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const vContact_linksContainer = vstack({
  alignItems: 'center',
  border: '2px solid',
  borderColor: 'p_purple.main',
  borderRadius: 'xl',
  gap: 6,
  p: 2,
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
  fontSize: '2xl',
  gap: 6,
  minW: '70vw',
  p: 2,
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
