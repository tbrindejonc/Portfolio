import {vstack} from '@/styled-system/patterns';

const cExpSidebar_sidebar = vstack({
  alignItems: 'end',
  display: {
    base: 'none',
    xl: 'flex',
  },
  gap: 12,
  h: 'screen',
  justifyContent: 'center',
  mt: '-100vh',
  pe: 10,
  position: 'sticky',
  top: 0,
  zIndex: 2,
});

export {cExpSidebar_sidebar};
