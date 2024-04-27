import {vstack} from '@/styled-system/patterns';

const cProjSidebar_sidebar = vstack({
  alignItems: 'start',
  display: {
    base: 'none',
    xl: 'flex',
  },
  gap: 12,
  h: 'screen',
  justifyContent: 'center',
  mt: '-100vh',
  ps: 10,
  position: 'sticky',
  top: 0,
  zIndex: 2,
});

export {cProjSidebar_sidebar};
