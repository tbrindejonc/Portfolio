import {circle, grid, hstack, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const containerStyle = vstack({
  gap: {
    base: 6,
    md: 8,
    xl: 6,
  },
});

const baseLoadingStyle = css({
  bgColor: {
    base: 'p_blue.800/25',
    _dark: 'p_blue.200/25',
  },
  borderRadius: 'md',
  w: 'full',
  animation: 'pulse',
});

const titleLoadingStyle = css({
  h: {
    base: 6,
    md: 14,
    xl: 10,
  },
});

const paragraphLoadingStyle = css({
  h: {
    base: 16,
    md: 32,
    xl: 24,
  },
});

const experienceStyle = css({
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

const loadingContainerStyle = css({
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

const loadingTechsStyle = hstack({
  gap: 4,
});

const loadingTechItemStyle = css({
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

const loadingImageStyle = css({
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

const logoAndTitleStyle = css({
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

const companyTitleStyle = css({
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

const companyNameStyle = css({
  font: 'bricolage',
  fontSize: {
    base: '3xl',
    md: '6xl',
  },
  fontWeight: 'bold',
});

const expHeadingStyle = css({
  font: 'bricolage',
  fontSize: {
    base: 'xl',
    md: '4xl',
  },
  fontWeight: 'bold',
});

const paragraphStyle = css({
  fontSize: {
    base: 'md',
    md: '2xl',
  },
});

const textContainerStyle = vstack({
  alignItems: 'start',
  gap: 2,
});

const experienceContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: {
    base: 4,
    md: 8,
  },
});

const techItemStyle = vstack({
  bgColor: {
    base: 'p_blue.300',
    _dark: 'p_blue.800',
  },
  borderRadius: 'md',
  fontSize: {
    base: 'xs',
    md: 'md',
  },
  justifyContent: 'center',
  p: 1,
  w: {
    base: 20,
    md: 28,
  },
  h: {
    base: '15vh',
    md: 28,
  },
  textAlign: 'center',
});

const techContainerStyle = grid({
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

const techImageContainer = circle({
  bgColor: {
    base: 'p_blue.light',
    _dark: 'p_blue.dark',
  },
  size: 14,
});

const techImageStyle = css({
  w: 10,
  h: 10,
  objectFit: 'cover',
});

const techsContainerStyle = vstack({
  alignItems: 'start',
  gap: 4,
});

const companyLogoStyle = css({
  h: 'auto',
  w: 32,
});

const companyLogoAndPeriodStyle = hstack({
  w: 'full',
  gap: 4,
});

const companyLogoContainerStyle = vstack({
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

const jobPeriodStyle = css({
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

export {
  containerStyle,
  companyLogoContainerStyle,
  companyLogoStyle,
  companyTitleStyle,
  companyNameStyle,
  companyLogoAndPeriodStyle,
  experienceStyle,
  expHeadingStyle,
  experienceContainerStyle,
  jobPeriodStyle,
  loadingContainerStyle,
  loadingImageStyle,
  loadingTechItemStyle,
  loadingTechsStyle,
  logoAndTitleStyle,
  paragraphStyle,
  paragraphLoadingStyle,
  techContainerStyle,
  techImageContainer,
  techImageStyle,
  techItemStyle,
  techsContainerStyle,
  textContainerStyle,
  titleLoadingStyle,
  baseLoadingStyle,
};
