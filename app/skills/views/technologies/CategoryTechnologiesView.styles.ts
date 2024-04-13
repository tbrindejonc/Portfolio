import {vstack} from '@/styled-system/patterns';

const vCatTechView_section = (reversed: boolean) => {
  return vstack({
    bgGradient: 'to-b',
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    gap: 4,
    gradientFrom: {
      base: reversed ? 'p_blue.light' : 'p_purple.light',
      _dark: reversed ? 'p_blue.dark' : 'p_purple.dark',
    },
    gradientTo: {
      base: reversed ? 'p_purple.light' : 'p_blue.light',
      _dark: reversed ? 'p_purple.dark' : 'p_blue.dark',
    },
    h: 'fit',
    justifyContent: 'center',
    minH: 'screen',
    p: {
      base: 4,
      md: 12,
    },
    pb: 8,
    transition: 'all 0.5s',
    w: 'full',
  });
};

export {vCatTechView_section};
