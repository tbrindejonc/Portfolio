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
        paddingTop: {
          base: 20,
          md: 40,
        },
        paddingX: {
          base: 2,
          md: 14,
          xl: '10em',
        },
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
          height: {
            base: '300px',
            md: '400px',
            xl: '500px',
          },
          width: {
            base: '300px',
            md: '400px',
            xl: '500px',
          },
          overflow: 'hidden',
          borderRadius: {
            base: 10,
            md: 20,
          },
          shadow: {
            base: '0px 4px 4px 0 token(colors.p_blue.dark_25)',
            _dark: '0px 4px 4px 0 token(colors.p_blue.light_25)',
          },
          zIndex: 1,
          top: {
            xl: '15em',
          },
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
            width: {
              base: '300px',
              md: '400px',
              xl: '500px',
            },
            backgroundSize: 'cover',
            borderRadius: {
              base: 10,
              md: 20,
            },
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
          width: {
            base: '90vw',
            md: '45vw',
            xl: '27vw',
          },
          position: 'absolute',
          top: {
            base: '21em',
            md: '9em',
            xl: '14em',
          },
          right: {
            base: '-3em',
            md: '5em',
            xl: '50em',
          },
          p: {
            base: 2,
            xl: 4,
          },
          paddingX: {
            base: 4,
            md: 6,
          },
          borderRadius: {
            base: 10,
            md: 20,
          },
          zIndex: 1,
          lineHeight: {
            xl: '6em',
          },
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
            fontWeight: 'bold',
            fontSize: {
              base: '5xl',
              md: '6xl',
              xl: '8xl',
            },
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
          size: {
            base: '130vw',
            md: '80vw',
            xl: '40vw',
          },
          bgColor: {
            base: 'p_purple.light',
            _dark: 'p_purple.dark',
          },
          shadow: '15px 20px 20px 0 token(colors.p_purple.main)',
          zIndex: 0,
          position: 'absolute',
          top: {
            base: '17em',
            md: '25em',
            xl: '8em',
          },
          left: {
            base: '-3em',
            md: '7em',
            xl: '75em',
          },
        })}
      >
        <h2
          className={css({
            position: 'absolute',
            fontSize: {
              base: '3xl',
              md: '6xl',
              xl: '7xl',
            },
            zIndex: 1,
            textAlign: 'right',
            fontWeight: 'bold',
            right: {
              base: '3.5em',
              md: '2em',
              xl: '1.5em',
            },
            top: {
              base: '9em',
              md: '5em',
              xl: '4em',
            },
            width: {
              base: '2/3',
              md: '3/4',
            },
          })}
        >
          Étudiant et futur développeur Fullstack React
        </h2>
      </div>
    </section>
  );
}
