import {css} from '@/styled-system/css';
import {hstack} from '@/styled-system/patterns';
import MenuButton from '@components/navbar/buttons/MenuButton';
import ThemeButton from '@components/navbar/buttons/ThemeButton';
import LangageButton from '@components/navbar/buttons/LangageButton';
import NavLinks from '@components/navbar/NavLinks';

export default function Navbar() {
  return (
    <nav
      className={hstack({
        bgColor: {
          base: 'p_purple.light',
          _dark: 'p_purple.dark',
        },
        height: {
          base: 12,
          md: 20,
          xl: 14,
        },
        width: 'full',
        shadow: {
          base: '0 4px 4px 0 token(colors.p_purple.dark_25)',
          _dark: '0 4px 4px 0 token(colors.p_purple.light_25)',
        },
        justifyContent: {
          base: 'space-around',
          xl: 'space-between',
        },
        paddingX: {
          base: 2,
          xl: 4,
        },
        position: 'fixed',
        transition: 'background-color 0.5s',
      })}
    >
      <MenuButton />
      <h2
        className={css({
          fontSize: {
            base: 'lg',
            md: '4xl',
            xl: '2xl',
          },
          fontWeight: 'bold',
          background: {
            base: 'linear-gradient(to right, token(colors.p_blue.dark), token(colors.p_blue.main), token(colors.p_purple.main), token(colors.p_purple.dark))',
            _dark:
              'linear-gradient(to right, token(colors.p_blue.light), token(colors.p_blue.main), token(colors.p_purple.main), token(colors.p_purple.light))',
          },
          color: 'transparent',
          bgClip: {
            base: 'text',
            _dark: 'text',
          },
        })}
      >
        Timothée Brindejonc
      </h2>
      <NavLinks />
      <div className={hstack({gap: 4})}>
        <ThemeButton />
        <LangageButton />
      </div>
    </nav>
  );
}
