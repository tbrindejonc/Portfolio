import Image from 'next/image';
import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

export default function LandingView() {
  return (
    <section
      id={'landing'}
      className={css({
        overflow: 'hidden',
        position: 'relative',
        paddingTop: 20,
        paddingX: 2,
        height: 'screen',
        width: 'full',
        transition: 'all 0.5s',
        bgColor: {
          base: 'p_purple.light',
          _dark: 'p_purple.dark',
        },
        color: {
          base: 'neutral.dark',
          _dark: 'neutral.light',
        },
        fontFamily: 'bricolage',
      })}
    >
      <div
        className={css({
          height: '300px',
          width: '300px',
          overflow: 'hidden',
          borderRadius: 10,
          shadow: {
            base: '0px 4px 4px 0 token(colors.p_blue.dark_25)',
            _dark: '0px 4px 4px 0 token(colors.p_blue.light_25)',
          },
          zIndex: 1,
          position: 'absolute',
        })}
      >
        <Image
          src={'/images/portfolio/landing/profile.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={css({
            height: 'auto',
            width: '300px',
            backgroundSize: 'cover',
            borderRadius: 10,
          })}
        />
      </div>
      <div
        className={css({
          transition: 'all 0.5s',
          bgColor: {
            base: 'p_purple.light',
            _dark: 'p_purple.dark',
          },
          width: '90vw',
          position: 'absolute',
          top: '21em',
          right: '-1em',
          p: 2,
          paddingX: 4,
          borderRadius: 10,
          zIndex: 1,
        })}
      >
        <h1
          className={css({
            transition: 'all 0.5s',
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
            width: 'fit-content',
            fontWeight: 'bold',
            fontSize: '5xl',
            textShadow: {
              base: '4px 4px 3px token(colors.p_purple.dark_25)',
              _dark: '4px 4px 3px token(colors.p_purple.light_25)',
            },
          })}
        >
          Timothée Brindejonc
        </h1>
      </div>
      <div
        className={circle({
          size: '130vw',
          bgColor: {
            base: 'p_purple.light',
            _dark: 'p_purple.dark',
          },
          shadow: '15px 20px 20px 0 token(colors.p_purple.main)',
          zIndex: 0,
          position: 'absolute',
          top: '17em',
          left: '-3em',
        })}
      >
        <h2
          className={css({
            position: 'absolute',
            fontSize: '3xl',
            zIndex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            right: '3.5em',
            top: '9em',
            width: '2/3',
          })}
        >
          Étudiant et futur développeur Fullstack React
        </h2>
      </div>
    </section>
  );
}
