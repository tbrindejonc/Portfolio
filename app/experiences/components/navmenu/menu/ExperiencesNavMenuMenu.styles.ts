import {vstack} from '@/styled-system/patterns';

const cExpNavMenuMenu_menu = (showMenu: boolean) => {
  return vstack({
    gap: 0,
    borderRadius: 'lg',
    me: 2,
    translateX: showMenu ? '0' : '110%',
    translate: 'auto',
    transition: 'all 0.5s',
  });
};

const cExpNavMenuMenu_item = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return vstack({
    bg: {
      base: isActive ? 'p_blue.700' : 'neutral.200',
      _dark: isActive ? 'p_blue.200' : 'neutral.700',
    },
    color: {
      base: isActive ? 'neutral.light' : 'neutral.700',
      _dark: isActive ? 'neutral.dark' : 'neutral.light',
    },
    h: 32,
    w: 52,
    alignItems: 'start',
    justifyContent: 'center',
    ps: 10,
    borderTop: index !== 0 ? '3px solid' : 'none',
    borderColor: 'p_blue.dark',
    fontSize: 'xl',
    fontFamily: 'bricolage',
    borderTopRadius: index === 0 ? 'lg' : 'none',
    borderBottomRadius: index === 2 ? 'lg' : 'none',
    transition: 'all 0.3s',
    pointerEvents: 'auto',
  });
};

export {cExpNavMenuMenu_menu, cExpNavMenuMenu_item};
