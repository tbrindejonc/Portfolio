import {css, cva} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

const slidesVariants = cva({
  base: {},
  variants: {
    separator: {
      first: {bgColor: 'p_blue.main'},
      second: {bgColor: 'p_purple.main'},
      third: {bgGradient: 'to-r', gradientFrom: 'p_blue.main', gradientTo: 'p_purple.main'},
    },
    showGraduation: {
      first: {stroke: {base: 'p_blue.700', _dark: 'p_blue.200'}},
      second: {display: 'none'},
      third: {display: 'none'},
    },
    showSpeech: {
      first: {display: 'none'},
      second: {stroke: {base: 'p_purple.700', _dark: 'p_purple.200'}},
      third: {display: 'none'},
    },
    showMore: {
      first: {display: 'none'},
      second: {display: 'none'},
      third: {stroke: {base: 'neutral.700', _dark: 'neutral.200'}},
    },
    firstSpan: {
      first: {color: 'p_blue.main'},
      second: {color: 'p_purple.main'},
      third: {color: 'p_purple.main'},
    },
    secondSpan: {
      first: {color: 'p_blue.main'},
      second: {color: 'p_purple.main'},
      third: {color: 'p_blue.main'},
    },
  },
});

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
});

const svgStyle = css({
  width: 24,
  height: 'auto',
  strokeWidth: 1,
});

const paragraphStyle = css({
  fontSize: 'lg',
  justifySelf: 'end',
});

export {slidesStyles, slideStyle, slideTitleStyle, separatorStyle, svgStyle, paragraphStyle, slidesVariants};
