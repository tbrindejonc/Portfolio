import {circle, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cTechnology_technology = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  borderRadius: 'lg',
  fontSize: 'sm',
  gap: 4,
  p: 2,
  position: 'relative',
  shadow: {
    base: '0 0 5px 2px token(colors.p_purple.dark)',
    _dark: '0 0 5px 2px token(colors.p_purple.light)',
  },
  transition: 'all 0.5s',
});

const cTechnology_imageContainer = circle({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  overflow: 'hidden',
  size: 14,
});

const cTechnology_image = css({
  h: 'auto',
  w: 10,
});

const cTechnology_title = css({
  alignSelf: 'start',
  fontSize: 'lg',
  fontWeight: 'semibold',
});

const cTechnology_paragraph = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  textWrap: 'balance',
});

const cTechnology_link = css({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'full',
  bottom: 2,
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontSize: 'md',
  justifySelf: 'end',
  p: 0.5,
  position: 'absolute',
  textAlign: 'center',
  w: '90%',
});

const cTechnology_textContainer = css({
  pb: 10,
});

export {
  cTechnology_link,
  cTechnology_paragraph,
  cTechnology_technology,
  cTechnology_image,
  cTechnology_imageContainer,
  cTechnology_textContainer,
  cTechnology_title,
};
