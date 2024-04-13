import {hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vSkillsLanding_view = vstack({
  bg: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  gap: {
    base: 4,
    md: 8,
  },
  h: 'screen',
  overflow: 'hidden',
  justifyContent: 'center',
  w: 'full',
  transition: 'all 0.5s',
});

const vSkillsLanding_image = css({
  borderRadius: 'xl',
  h: {
    base: '40vh',
    xl: '50vh',
  },
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  w: {
    base: '40vh',
    xl: '50vh',
  },
});

const vSkillsLanding_titleContainer = hstack({
  gap: {
    base: 2,
    md: 8,
  },
});

const vSkillsLanding_titleDecoration = css({
  bg: 'p_blue.main',
  w: {
    base: 8,
    md: 32,
    xl: 56,
  },
  h: {
    base: 1,
    md: 2,
  },
});

const vSkillsLanding_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
    xl: '7xl',
  },
  fontWeight: 'bold',
});

const vSkillsLanding_contentContainer = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  gap: {
    base: 8,
    md: 12,
    xl: 24,
  },
  justifyContent: 'center',
});

const vSkillsLanding_textContainer = vstack({
  alignItems: {
    base: 'center',
    xl: 'start',
  },
  gap: {
    base: 8,
    md: 12,
  },
  justifyContent: 'center',
  w: {
    xl: '2/5',
  },
});

const vSkillsLanding_paragraph = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: {
    base: 'xl',
    md: '3xl',
    xl: '4xl',
  },
  minH: {
    base: '23vh',
    md: '18vh',
  },
  px: 4,
  textAlign: {
    base: 'center',
    xl: 'left',
  },
  textWrap: 'balance',
});

const vSkillsLanding_link = hstack({
  bg: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'xl',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
  fontWeight: 'semibold',
  gap: 4,
  justifyContent: 'center',
  p: {
    base: 2,
    md: 3,
  },
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  w: {
    base: '5/6',
    md: '3/5',
  },
});

const vSkillsLanding_svg = css({
  h: {
    base: 7,
    md: 10,
  },
  rotate: {
    base: '-90deg',
    _groupHover: '0deg',
  },
  stroke: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  strokeWidth: 4,
  transition: 'all 0.3s ease-in-out',
  w: {
    base: 7,
    md: 10,
  },
});

export {
  vSkillsLanding_link,
  vSkillsLanding_paragraph,
  vSkillsLanding_contentContainer,
  vSkillsLanding_textContainer,
  vSkillsLanding_title,
  vSkillsLanding_titleDecoration,
  vSkillsLanding_titleContainer,
  vSkillsLanding_image,
  vSkillsLanding_view,
  vSkillsLanding_svg,
};
