import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

export default function NavMenuButton() {
  const cNavMenuButton_button = vstack({
    bg: {
      base: 'p_purple.dark',
      _dark: 'p_purple.200',
    },
    borderRadius: 'lg',
    h: 14,
    ms: 6,
    p: 2,
    pointerEvents: 'auto',
    rowGap: 2,
    shadow: '0 0 5px 2px token(colors.p_purple.main)',
    transition: 'all 0.5s',
    w: 14,
  });

  const cNavMenuButton_buttonLine = css({
    bg: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    borderRadius: 'full',
    h: 4,
    w: 1,
  });

  return (
    <button className={cNavMenuButton_button}>
      <div className={cNavMenuButton_buttonLine} />
      <div className={cNavMenuButton_buttonLine} />
      <div className={cNavMenuButton_buttonLine} />
    </button>
  );
}
