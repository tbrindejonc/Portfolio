import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

const activityStyle = vstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  gap: 12,
  py: 10,
  transition: 'all 0.5s',
});

const titleStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontFamily: 'bricolage',
  fontSize: '4xl',
  fontWeight: 'bold',
  textAlign: 'center',
});

const projectsLinkStyle = css({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'md',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: '2xl',
  fontWeight: 'bold',
  p: 2,
  textAlign: 'center',
  w: '4/5',
});

export {activityStyle, titleStyle, projectsLinkStyle};
