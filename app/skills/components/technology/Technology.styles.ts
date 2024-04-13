import {circle, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const cTechnology_technology = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  borderRadius: {
    base: 'lg',
    md: 'xl',
  },
  fontSize: 'sm',
  gap: {
    base: 4,
    md: 6,
  },
  p: {
    base: 2,
    md: 4,
  },
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
  size: {
    base: 14,
    md: 20,
  },
});

const cTechnology_image = css({
  h: 'auto',
  w: {
    base: 10,
    md: 14,
  },
});

const cTechnology_title = css({
  alignSelf: 'start',
  fontSize: {
    base: 'lg',
    md: '2xl',
  },
  fontWeight: 'semibold',
});

const cTechnology_paragraph = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: {
    md: 'lg',
  },
  textWrap: 'balance',
});

const cTechnology_link = css({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'full',
  bottom: {
    base: 2,
    md: 4,
  },
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontSize: {
    base: 'md',
    md: 'lg',
  },
  justifySelf: 'end',
  p: 0.5,
  position: 'absolute',
  textAlign: 'center',
  w: '90%',
});

const cTechnology_textContainer = css({
  pb: {
    base: 10,
    md: 14,
  },
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
