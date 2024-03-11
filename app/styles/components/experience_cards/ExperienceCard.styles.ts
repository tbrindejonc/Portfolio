import {css, cva} from '@/styled-system/css';
import {vstack} from '@/styled-system/patterns';

const svgStyle = css({
  height: 'auto',
  strokeWidth: 1,
  width: 24,
});

const paragraphStyle = css({
  fontSize: '2xl',
});

const cardStyle = vstack({
  border: '3px solid',
  borderColor: {
    base: 'p_blue.dark',
    _dark: 'p_blue.light',
  },
  borderRadius: '2xl',
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  h: '50vh',
  p: 6,
  px: 8,
  w: '1/3',
});

const separatorStyle = css({
  height: 1,
  width: '3/4',
});

const titleStyle = css({
  fontFamily: 'bricolage',
  fontSize: '3xl',
  fontWeight: 'bold',
});

const cardVariants = cva({
  base: {},
  variants: {
    separator: {
      first: {
        bgColor: 'p_blue.main',
      },
      second: {
        bgColor: 'p_purple.main',
      },
      third: {
        bgGradient: 'to-r',
        gradientFrom: 'p_purple.main',
        gradientTo: 'p_blue.main',
      },
    },
    icon: {
      formation: {
        stroke: {
          base: 'p_blue.700',
          _dark: 'p_blue.200',
        },
      },
      speech: {
        stroke: {
          base: 'p_purple.700',
          _dark: 'p_purple.200',
        },
      },
      more: {
        stroke: {
          base: 'neutral.700',
          _dark: 'neutral.200',
        },
      },
    },
    firstSpan: {
      first: {
        color: 'p_blue.main',
      },
      second: {
        color: 'p_purple.main',
      },
      third: {
        color: 'p_purple.main',
      },
    },
    secondSpan: {
      first: {
        color: 'p_blue.main',
      },
      second: {
        color: 'p_purple.main',
      },
      third: {
        color: 'p_blue.main',
      },
    },
  },
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
  fontSize: 'xl',
  mt: 4,
  p: 2,
  shadow: {
    _hover: {
      base: '3px 3px 10px 0',
      _dark: '3px 3px 10px 0',
    },
  },
  textAlign: 'center',
  w: 'full',
});

export {svgStyle, paragraphStyle, cardStyle, separatorStyle, titleStyle, cardVariants, seeMoreStyle};
