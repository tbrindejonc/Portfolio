import {css} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

const slidesStyles = [
  css({
    transform: 'translateX(-100%)',
    zIndex: 1,
  }),
  css({
    transform: 'translateX(0)',
  }),
  css({
    transform: 'translateX(100%)',
    zIndex: 1,
  }),
];

const slideStyle = vstack({
  bgColor: 'transparent',
  border: '3px solid',
  borderColor: {
    base: 'p_blue.700',
    _dark: 'p_blue.200',
  },
  borderRadius: 'xl',
  color: {
    base: 'neutral.700',
    _dark: 'neutral.light',
  },
  width: '90vw',
  p: 3,
});

const slideTitleStyle = css({
  fontSize: '2xl',
  fontWeight: 'bold',
});

const separatorStyle = css({
  height: '5px',
  width: '2/3',
  bgColor: 'p_purple.main',
});

const svgStyle = css({
  width: 24,
  height: 'auto',
  strokeWidth: 1,
  stroke: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
});

const paragraphStyle = css({
  fontSize: 'lg',
  justifySelf: 'end',
});

export {slidesStyles, slideStyle, slideTitleStyle, separatorStyle, svgStyle, paragraphStyle};
