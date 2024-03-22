import {css, cva} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

const cCarouselSlide_variants = cva({
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

const cCarouselSlide_slides = [
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

const cCarouselSlide_slide = vstack({
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
  gap: {
    base: 2,
    md: 6,
  },
  minH: {
    base: '55vh',
    md: '40vh',
  },
  p: {
    base: 3,
    md: 6,
  },
  px: {
    md: 8,
  },
  width: {
    base: '90vw',
    md: '70vw',
  },
});

const cCarouselSlide_title = css({
  fontFamily: 'bricolage',
  fontSize: {
    base: '2xl',
    md: '4xl',
  },
  fontWeight: 'bold',
});

const cCarouselSlide_separator = css({
  height: '5px',
  width: '2/3',
});

const cCarouselSlide_svg = css({
  height: 'auto',
  strokeWidth: 1,
  width: 24,
});

const cCarouselSlide_paragraph = css({
  fontSize: {
    base: 'lg',
    md: '2xl',
  },
  justifySelf: 'end',
});

const cCarouselSlide_button = css({
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
  mt: 4,
  p: 2,
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
  cCarouselSlide_slides,
  cCarouselSlide_slide,
  cCarouselSlide_title,
  cCarouselSlide_separator,
  cCarouselSlide_svg,
  cCarouselSlide_paragraph,
  cCarouselSlide_variants,
  cCarouselSlide_button,
};
