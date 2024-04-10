import {vstack} from '@/styled-system/patterns';

const cExpNavMenuMenu_menu = (showMenu: boolean) => {
  return vstack({
    borderRadius: 'lg',
    gap: 0,
    me: 2,
    translateX: showMenu ? '0' : '110%',
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
    fontSize: 'xl',
    h: 32,
    justifyContent: 'center',
    ps: 10,
    pointerEvents: 'auto',
    transition: 'all 0.3s',
    w: 52,
  });
};

export {cExpNavMenuMenu_menu, cExpNavMenuMenu_item};
