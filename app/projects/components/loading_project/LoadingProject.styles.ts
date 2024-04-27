import {css} from '@/styled-system/css';
import {grid, vstack} from '@/styled-system/patterns';

const cProjectLoading_project = vstack({
  alignItems: 'start',
  backdropBlur: '10px',
  backdropFilter: 'auto',
  bg: {
    base: 'neutral.light/50',
    _dark: 'neutral.800/50',
  },
  borderRadius: '2xl',
  gap: 8,
  h: '90%',
  ms: {
    xl: '10vw',
  },
  p: {
    base: 4,
    md: 8,
  },
  transition: 'all 0.5s',
  w: {
    base: 'full',
    xl: '90%',
  },
  zIndex: 1,
});

const cProjectLoading_title = css({
  animation: 'pulse',
  bg: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  borderRadius: '2xl',
  h: {
    base: 5,
    md: 8,
    xl: 14,
  },
  w: {
    base: '40vw',
    xl: '20vw',
  },
});

const cProjectLoading_texts = vstack({
  animation: 'pulse',
  bg: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  borderRadius: '2xl',
  h: {
    base: 24,
    md: '10vh',
  },
  w: 'full',
});

const cProjectLoading_image = vstack({
  animation: 'pulse',
  bg: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  borderRadius: '2xl',
  h: '30vh',
  w: 'full',
});

const cProjectLoading_techContainer = grid({
  gap: 6,
  gridTemplateColumns: {
    base: 3,
    xl: 6,
  },
  h: 'fit',
  w: 'full',
});

const cProjectLoading_tech = css({
  animation: 'pulse',
  bg: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  borderRadius: '2xl',
  h: {
    base: 20,
    md: '12vh',
  },
  w: 'full',
});

export {
  cProjectLoading_title,
  cProjectLoading_project,
  cProjectLoading_texts,
  cProjectLoading_image,
  cProjectLoading_techContainer,
  cProjectLoading_tech,
};
