import {css} from '@/styled-system/css';
import {hstack} from '@/styled-system/patterns';
import MenuButton from '@components/navbar/buttons/MenuButton';
import ThemeButton from '@components/navbar/buttons/ThemeButton';
import LangageButton from '@components/navbar/buttons/LangageButton';

export default function Navbar() {
  return (
    <nav
      className={hstack({
        bgColor: 'p_purple.light',
        height: 12,
        width: 'full',
        shadow: '0 0 12px 0',
        shadowColor: 'p_blue.dark/10',
        justifyContent: 'space-around',
        paddingX: 2,
        position: 'fixed',
        transition: 'background-color 0.5s',
        _dark: {
          bgColor: 'p_purple.dark',
          shadowColor: 'p_purple.light',
        },
      })}
    >
      <MenuButton />
      <h2
        className={css({
          fontSize: 'lg',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #001A38, #7DB9FF, #CF8BFF, #130823)',
          color: 'transparent',
          bgClip: 'text',
          _dark: {
            background: 'linear-gradient(to right, #F0F7FF, #7DB9FF, #CF8BFF, #FBF5FF)',
            color: 'transparent',
            bgClip: 'text',
          },
        })}
      >
        Timothée Brindejonc
      </h2>
      <div className={hstack({gap: 4})}>
        <ThemeButton />
        <LangageButton />
      </div>
    </nav>
  );
}
