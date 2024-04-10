import {vstack} from '@/styled-system/patterns';

const cExpNavMenu_container = (currentActive: number) => {
  return vstack({
    alignItems: 'end',
    display: currentActive === 3 ? 'none' : 'flex',
    gap: {
      base: 28,
      md: 60,
    },
    justifyContent: 'end',
    pointerEvents: 'none',
    position: 'fixed',
    bottom: 4,
    right: 2,
    transition: 'all 0.5s',
    zIndex: 2,
  });
};

export default cExpNavMenu_container;
