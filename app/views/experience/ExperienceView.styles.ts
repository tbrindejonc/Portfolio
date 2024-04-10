import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const vExperience_experience = vstack({
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
    md: 12,
  },
  h: {
    md: 'screen',
  },
  overflow: 'hidden',
  pt: 20,
  transition: 'all 0.5s',
});

const vExperience_explanations = vstack({
  alignItems: {
    md: 'start',
  },
  border: '3px solid',
  borderColor: {
    base: 'p_purple.700',
    _dark: 'p_purple.200',
  },
  borderRadius: 'xl',
  color: {
    base: 'neutral.700',
    _dark: 'neutral.light',
  },
  fontSize: {
    base: 'xl',
    md: '3xl',
    xl: '4xl',
  },
  fontWeight: 'bold',
  gap: 4,
  minH: {
    md: '23vh',
    xl: '25vh',
  },
  p: {
    base: 3,
    md: 6,
  },
  w: '90vw',
});

const vExperience_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '5xl',
    xl: '6xl',
  },
});

const vExperience_firstSpan = css({
  color: 'p_blue.main',
});

const vExperience_secondSpan = css({
  color: 'p_purple.main',
});

export {
  vExperience_experience,
  vExperience_explanations,
  vExperience_title,
  vExperience_firstSpan,
  vExperience_secondSpan,
};
