import {hstack, vstack} from '@/styled-system/patterns';

const cExpNavMenuMenu_menu = (showMenu: boolean) => {
  return vstack({
    borderRadius: 'lg',
    gap: 0,
    me: {
      base: 2,
      md: 6,
    },
    shadow: {
      base: '0 0 5px 2px token(colors.p_blue.dark_25)',
      _dark: '0 0 5px 2px token(colors.p_blue.light_25)',
    },
    translateX: showMenu ? '0' : '120%',
    translate: 'auto',
    transition: 'all 0.5s',
  });
};

const cExpNavMenuMenu_item = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return hstack({
    alignItems: 'center',
    bg: {
      base: isActive ? 'p_blue.700' : 'neutral.200',
      _dark: isActive ? 'p_blue.200' : 'neutral.700',
    },
    borderBottomRadius: index === 2 ? 'lg' : 'none',
    borderColor: 'p_blue.dark',
    borderTop: index !== 0 ? '3px solid' : 'none',
    borderTopRadius: index === 0 ? 'lg' : 'none',
    color: {
      base: isActive ? 'neutral.light' : 'neutral.dark',
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
    ps: 6,
    pointerEvents: 'auto',
    position: 'relative',
    transition: 'all 0.3s',
    w: {
      base: 52,
      md: 72,
    },
  });
};

const cExpNavMenuMenu_endBar = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return hstack({
    bg: {
      base: isActive ? 'p_blue.700' : 'neutral.200',
      _dark: isActive ? 'p_blue.200' : 'neutral.700',
    },
    h: 'full',
    position: 'absolute',
    right: 0,
    shadow: {
      base: isActive ? '-2px 0 5px 2px token(colors.p_blue.light_25)' : '-2px 0 5px 2px token(colors.p_blue.dark_25)',
      _dark: isActive ? '-2px 0 5px 2px token(colors.p_blue.dark_25)' : '-2px 0 5px 2px token(colors.p_blue.light_25)',
    },
    transition: 'all 0.3s',
    w: {
      base: 4,
      md: 6,
    },
  });
};

export {cExpNavMenuMenu_menu, cExpNavMenuMenu_item, cExpNavMenuMenu_endBar};
