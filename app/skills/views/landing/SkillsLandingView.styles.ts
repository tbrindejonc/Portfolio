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
  h: 'screen',
  overflow: 'hidden',
  justifyContent: 'center',
  w: 'full',
  transition: 'all 0.5s',
});

const vSkillsLanding_image = css({
  borderRadius: 'xl',
  h: '40vh',
  objectFit: 'cover',
  shadow: {
    base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
    _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
  },
  w: '40vh',
});

const vSkillsLanding_titleContainer = hstack({
  gap: 2,
});

const vSkillsLanding_titleDecoration = css({
  bg: 'p_blue.main',
  w: 8,
  h: 1,
});

const vSkillsLanding_title = css({
  fontFamily: 'bricolage',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const vSkillsLanding_contentContainer = vstack({
  gap: 8,
  justifyContent: 'center',
});

const vSkillsLanding_paragraph = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: 'xl',
  px: 4,
  textAlign: 'center',
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
  fontSize: '2xl',
  fontWeight: 'semibold',
  gap: 4,
  justifyContent: 'center',
  p: 2,
  shadow: {
    _hover: '0 5px 8px 2px token(colors.p_blue.main)',
  },
  w: '5/6',
});

const vSkillsLanding_svg = css({
  h: 7,
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
  w: 7,
});

export {
  vSkillsLanding_link,
  vSkillsLanding_paragraph,
  vSkillsLanding_contentContainer,
  vSkillsLanding_title,
  vSkillsLanding_titleDecoration,
  vSkillsLanding_titleContainer,
  vSkillsLanding_image,
  vSkillsLanding_view,
  vSkillsLanding_svg,
};
