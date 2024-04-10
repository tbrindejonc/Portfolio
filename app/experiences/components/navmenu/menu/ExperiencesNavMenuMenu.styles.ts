import {vstack} from '@/styled-system/patterns';

const cExpNavMenuMenu_menu = (showMenu: boolean) => {
  return vstack({
    borderRadius: 'lg',
    gap: 0,
    me: {
      base: 2,
      md: 6,
    },
    translateX: showMenu ? '0' : '120%',
    translate: 'auto',
    transition: 'all 0.5s',
  });
};

const cExpNavMenuMenu_item = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return vstack({
    alignItems: 'start',
    bg: {
      base: isActive ? 'p_blue.700' : 'neutral.200',
      _dark: isActive ? 'p_blue.200' : 'neutral.700',
    },
    borderBottomRadius: index === 2 ? 'lg' : 'none',
    borderColor: 'p_blue.dark',
    borderTop: index !== 0 ? '3px solid' : 'none',
    borderTopRadius: index === 0 ? 'lg' : 'none',
    color: {
      base: isActive ? 'neutral.light' : 'neutral.700',
      _dark: isActive ? 'neutral.dark' : 'neutral.light',
    },
    fontFamily: 'bricolage',
    fontSize: {
      base: 'xl',
      md: '3xl',
    },
    h: {
      base: 32,
      md: 40,
    },
    justifyContent: 'center',
    ps: 10,
    pointerEvents: 'auto',
    transition: 'all 0.3s',
    w: {
      base: 52,
      md: 72,
    },
  });
};

export {cExpNavMenuMenu_menu, cExpNavMenuMenu_item};
