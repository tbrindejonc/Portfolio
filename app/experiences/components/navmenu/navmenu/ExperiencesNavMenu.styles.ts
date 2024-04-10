import {vstack} from '@/styled-system/patterns';

const cExpNavMenu_container = vstack({
  alignItems: 'end',
  h: '100vh',
  justifyContent: 'end',
  mt: '-100vh',
  pointerEvents: 'none',
  position: 'sticky',
  top: 0,
  zIndex: 2,
});

export default cExpNavMenu_container;
