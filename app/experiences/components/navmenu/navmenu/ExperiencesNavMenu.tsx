import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

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

  const cExpNavMenu_button = vstack({
    bg: {
      base: 'p_blue.200',
      _dark: 'p_blue.dark',
    },
    borderRadius: 'lg',
    h: 14,
    mb: 4,
    me: 2,
    p: 2,
    rowGap: 2,
    shadow: '0 0 5px 2px token(colors.p_blue.main)',
    transition: 'all 0.5s',
    w: 14,
  });

  const cExpNavMenu_buttonLine = css({
    borderRadius: 'full',
    bg: {
      base: 'p_blue.dark',
      _dark: 'p_blue.light',
    },
    h: 3,
    w: 1,
  });

  return (
    <div className={cExpNavMenu_container}>
      <div className={cExpNavMenu_button}>
        <div className={cExpNavMenu_buttonLine} />
        <div className={cExpNavMenu_buttonLine} />
        <div className={cExpNavMenu_buttonLine} />
      </div>
    </div>
  );
}
