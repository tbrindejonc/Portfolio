import {grid, hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const exp_cExp_loadingWrapper = vstack({
  gap: {
    base: 6,
    md: 8,
    xl: 6,
  },
});

const exp_cExp_loadingBase = css({
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  w: 'full',
  animation: 'pulse',
});

const exp_cExp_loadingTitle = css({
  h: {
    base: 6,
    md: 14,
    xl: 10,
  },
});

const exp_cExp_loadingParagraph = css({
  h: {
    base: 16,
    md: 32,
    xl: 24,
  },
});

const exp_cExp_experience = css({
  alignItems: 'center',
  bgColor: {
    base: 'neutral.light/50',
    _dark: 'neutral.dark/50',
  },
  backdropBlur: {
    base: '10px',
    _dark: '20px',
  },
  backdropFilter: 'auto',
  borderRadius: '2xl',
  display: 'flex',
  flexDirection: {
    base: 'column',
    xl: 'row',
  },
  gap: {
    base: 8,
    md: 12,
    xl: 14,
  },
  h: '80vh',
  overflow: 'auto',
  p: {
    base: 6,
    md: 8,
  },
  w: {
    base: '90vw',
    xl: '80vw',
  },
  transition: 'all 0.5s',
});

const exp_cExp_loadingContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: {
    base: 12,
    md: 20,
    xl: 12,
  },
  h: 'fit',
  w: 'full',
});

const exp_cExp_loadingTechs = hstack({
  gap: 4,
});

const exp_cExp_loadingTechItem = css({
  animation: 'pulse',
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  h: {
    base: 14,
    md: 20,
  },
  w: {
    base: 14,
    md: 20,
  },
});

const exp_cExp_loadingImage = css({
  animation: 'pulse',
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  h: {
    base: 24,
    md: 40,
    xl: 72,
  },
  w: {
    base: '2/5',
    xl: '3/5',
  },
});

const exp_cExp_loadingLogoAndPeriod = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    base: 'row',
    xl: 'column',
  },
  gap: {
    base: 4,
    md: 8,
  },
  justifyContent: {
    base: 'flex-start',
    xl: 'center',
  },
  w: 'full',
});

const exp_cExp_loadingCompanyName = css({
  animation: 'pulse',
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  h: {
    base: 16,
    md: 24,
  },
  w: {
    base: '3/5',
    xl: '2/5',
  },
});

const exp_cExp_companyName = css({
  font: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '6xl',
  },
  fontWeight: 'bold',
});

const exp_cExp_heading = css({
  font: 'bricolage',
  fontSize: {
    base: 'xl',
    md: '4xl',
  },
  fontWeight: 'bold',
});

const exp_cExp_paragraph = css({
  fontSize: {
    base: 'md',
    md: '2xl',
  },
});

const exp_cExp_textContainer = vstack({
  alignItems: 'start',
  gap: 2,
});

const exp_cExp_textWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: {
    base: 4,
    md: 8,
  },
});

const exp_cExp_companyLogo = css({
  h: 'auto',
  w: 32,
});

const exp_cExp_logoAndPeriod = hstack({
  w: 'full',
  gap: 4,
});

const exp_cExp_logoContainer = vstack({
  bgColor: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  border: '2px solid',
  borderColor: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  borderRadius: 'md',
  justifyContent: 'center',
  h: {
    base: 36,
    md: 48,
  },
  w: {
    base: '3/5',
    md: '2/5',
  },
  p: {
    base: 4,
    md: 6,
  },
});

const exp_cExp_period = css({
  fontWeight: 'bold',
  textAlign: 'center',
  w: {
    base: '2/5',
    xl: '3/5',
  },
  fontSize: {
    md: 'xl',
  },
});

const exp_cExp_techContainer = grid({
  gridTemplateColumns: {
    base: 3,
    md: 5,
    xl: 8,
  },
  gap: {
    base: 4,
    md: 8,
    xl: 14,
  },
});

const exp_cExp_techsWrapper = vstack({
  alignItems: 'start',
  gap: 4,
});

export {
  exp_cExp_loadingWrapper,
  exp_cExp_logoContainer,
  exp_cExp_companyLogo,
  exp_cExp_loadingCompanyName,
  exp_cExp_companyName,
  exp_cExp_logoAndPeriod,
  exp_cExp_experience,
  exp_cExp_heading,
  exp_cExp_textWrapper,
  exp_cExp_period,
  exp_cExp_loadingContainer,
  exp_cExp_loadingImage,
  exp_cExp_loadingTechItem,
  exp_cExp_loadingTechs,
  exp_cExp_loadingLogoAndPeriod,
  exp_cExp_paragraph,
  exp_cExp_loadingParagraph,
  exp_cExp_techContainer,
  exp_cExp_techsWrapper,
  exp_cExp_textContainer,
  exp_cExp_loadingTitle,
  exp_cExp_loadingBase,
};
