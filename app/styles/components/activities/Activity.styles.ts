import {grid, hstack} from '@/styled-system/patterns';
import {css, cva} from '@/styled-system/css';

const containerStyle = grid({
  justifyItems: 'center',
  columns: 1,
  gap: 2,
  px: 8,
});

const svgStyle = css({
  height: 12,
  width: 12,
});

const gameIconStyle = css({
  stroke: {
    base: 'neutral.700',
    _dark: 'neutral.200',
  },
});

const devIconStyle = css({
  stroke: {
    base: 'p_blue.700',
    _dark: 'p_blue.200',
  },
});

const discoveriesIconStyle = css({
  stroke: {
    base: 'p_purple.700',
    _dark: 'p_purple.200',
  },
});

const dividerStyle = css({
  bgColor: 'p_purple.main',
  height: '5vh',
  width: 1,
});

const divHeadingStyle = hstack({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: '2xl',
  gap: 8,
  w: 'full',
});

const paragraphStyle = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  lineHeight: '1.7em',
  fontSize: 'lg',
  textWrap: 'balance',
});

const activityVariants = cva({
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
  containerStyle,
  svgStyle,
  gameIconStyle,
  devIconStyle,
  discoveriesIconStyle,
  dividerStyle,
  divHeadingStyle,
  paragraphStyle,
  activityVariants,
};
