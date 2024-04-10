import {vstack} from '@/styled-system/patterns';
import ExperiencesNavMenuButton from '../button/ExperiencesNavMenuButton';

export default function ExperiencesNavMenu() {
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

  return (
    <div className={cExpNavMenu_container}>
      <ExperiencesNavMenuButton />
    </div>
  );
}
