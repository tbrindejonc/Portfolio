import {css} from '@/styled-system/css';

const cProjSidebarItem_item = css({
  borderRadius: 'xl',
  cursor: 'pointer',
  h: '15vh',
  position: 'relative',
  transition: 'all 0.5s',
  w: 4,
});

const cProjSidebarItem_activeState = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return css({
    bg: {
      base: isActive ? 'p_blue.700' : 'neutral.200',
      _dark: isActive ? 'p_blue.200' : 'neutral.700',
    },
    color: {
      base: isActive ? 'neutral.light' : 'neutral.700',
      _dark: isActive ? 'neutral.dark' : 'neutral.light',
    },
    transition: 'all 0.5s',
  });
};

const cProjSidebarItem_title = (index: number, currentActive: number) => {
  const isActive = index === currentActive;

  return css({
    bg: {
      base: isActive ? 'p_blue.700' : 'neutral.200',
      _dark: isActive ? 'p_blue.200' : 'neutral.700',
    },
    borderRadius: 'lg',
    display: {
      base: 'none',
      _groupHover: 'block',
    },
    left: 8,
    minW: 40,
    p: 2,
    ps: 6,
    position: 'absolute',
    top: '35%',
    transition: 'all 0.3s',
  });
};

export {cProjSidebarItem_item, cProjSidebarItem_activeState, cProjSidebarItem_title};
