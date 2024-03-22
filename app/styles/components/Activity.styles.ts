import {hstack, vstack} from '@/styled-system/patterns';
import {css, cva} from '@/styled-system/css';

const cActivity_activity = vstack({
  gap: 2,
  px: 8,
  w: {
    xl: '2/3',
  },
  zIndex: 1,
});

const cActivity_svgBase = css({
  height: 12,
  width: 12,
});

const cActivity_gameIcon = css({
  stroke: {
    base: 'neutral.700',
    _dark: 'neutral.200',
  },
});

const cActivity_devIcon = css({
  stroke: {
    base: 'p_blue.700',
    _dark: 'p_blue.200',
  },
});

const cActivity_discoveriesIcon = css({
  stroke: {
    base: 'p_purple.700',
    _dark: 'p_purple.200',
  },
});

const cActivity_divider = css({
  bgColor: 'p_purple.main',
  height: '5vh',
  width: 1,
});

const cActivity_heading = hstack({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: {
    base: '2xl',
    md: '3xl',
  },
  gap: 8,
  w: 'full',
});

const cActivity_paragraph = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  lineHeight: '1.7em',
  fontSize: {
    base: 'lg',
    md: '2xl',
  },
  textWrap: 'balance',
});

const cActivity_variants = cva({
  variants: {
    separator: {
      game: {
        bgGradient: 'to-b',
        gradientFrom: 'p_blue.main',
        gradientTo: 'p_purple.main',
      },
      dev: {
        bgColor: 'p_blue.main',
      },
      discoveries: {
        bgColor: 'p_purple.main',
      },
    },
    title: {
      game: {
        background: {
          base: 'linear-gradient(to right, token(colors.p_blue.700), token(colors.p_purple.700))',
          _dark: 'linear-gradient(to right, token(colors.p_blue.200), token(colors.p_purple.200))',
        },
        bgClip: {
          base: 'text',
          _dark: 'text',
        },
        color: 'transparent',
      },
      dev: {
        color: {
          base: 'p_blue.700',
          _dark: 'p_blue.200',
        },
      },
      discoveries: {
        color: {
          base: 'p_purple.700',
          _dark: 'p_purple.200',
        },
      },
    },
    firstSpan: {
      game: {
        color: 'p_blue.main',
      },
      dev: {
        color: 'p_blue.main',
      },
      discoveries: {
        color: 'p_purple.main',
      },
    },
    secondSpan: {
      game: {
        color: 'p_purple.main',
      },
      dev: {
        color: 'p_blue.main',
      },
      discoveries: {
        color: 'p_purple.main',
      },
    },
  },
});

export {
  cActivity_activity,
  cActivity_svgBase,
  cActivity_gameIcon,
  cActivity_devIcon,
  cActivity_discoveriesIcon,
  cActivity_divider,
  cActivity_heading,
  cActivity_paragraph,
  cActivity_variants,
};
