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
    showMoreButton: {
      first: {display: 'none'},
      second: {display: 'none'},
      third: {},
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
  minH: {
    base: '55vh',
    md: '40vh',
  },
  width: {
    base: '90vw',
    md: '70vw',
  },
  p: {
    base: 3,
    md: 6,
  },
  px: {
    md: 8,
  },
  gap: {
    base: 2,
    md: 6,
  },
});

const slideTitleStyle = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
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
  fontSize: {
    base: 'lg',
    md: '2xl',
  },
  justifySelf: 'end',
});

const seeMoreStyle = css({
  border: '2px solid',
  borderColor: {
    base: 'p_purple.700',
    _dark: 'p_purple.light',
    _hover: {
      base: 'p_purple.600',
      _dark: 'p_purple.300',
    },
  },
  borderRadius: 'xl',
  color: {
    base: 'p_purple.700',
    _dark: 'p_purple.light',
    _hover: {
      base: 'p_purple.600',
      _dark: 'p_purple.300',
    },
  },
  fontSize: {
    base: 'lg',
    md: 'xl',
  },
  p: 2,
  mt: 4,
  shadow: {
    _hover: {
      base: '3px 3px 10px 0',
      _dark: '3px 3px 10px 0',
    },
  },
  textAlign: 'center',
  w: {
    base: 'full',
    md: '3/5',
  },
});

export {
  slidesStyles,
  slideStyle,
  slideTitleStyle,
  separatorStyle,
  svgStyle,
  paragraphStyle,
  slidesVariants,
  seeMoreStyle,
};
