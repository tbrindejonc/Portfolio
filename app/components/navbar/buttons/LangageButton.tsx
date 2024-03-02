'use client';

import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';
import useLangage from '@hooks/useLangage';

export default function LangageButton() {
  const {langage, setLangage} = useLangage();

  const switchLangage = () => {
    setLangage(langage === 'fr' ? 'en' : 'fr');
  };

  return (
    <div
      className={css({
        height: {
          base: 10,
          md: 14,
          xl: 12,
        },
        width: {
          base: 10,
          md: 14,
          xl: 12,
        },
        bgColor: {
          base: 'p_blue.800',
          _dark: 'p_blue.light',
        },
        position: 'relative',
        borderRadius: 10,
        cursor: 'pointer',
        transition: 'background-color 0.5s',
      })}
      onClick={switchLangage}
    >
      <div
        className={circle({
          size: {
            base: '22px',
            md: 8,
            xl: 7,
          },
          bgColor: 'p_blue.main',
          position: 'absolute',
          top: 1,
          right: 1,
        })}
      ></div>
      <div
        className={css({
          bgColor: {
            base: 'p_blue.light/70',
            _dark: 'p_blue.dark/70',
          },
          borderColor: {
            base: 'p_blue.light/50',
            _dark: 'p_blue.dark/50',
          },
          position: 'absolute',
          top: {
            base: '6px',
            md: '8px',
            xl: '6px',
          },
          right: {
            base: '6px',
            md: '8px',
            xl: '6px',
          },
          height: {
            base: 7,
            md: 10,
            xl: 9,
          },
          width: {
            base: 7,
            md: 10,
            xl: 9,
          },
          borderRadius: 7,
          border: '2px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          transition: 'background-color 0.5s',
        })}
      >
        <h2
          className={css({
            fontSize: {
              base: 'sm',
              md: 'lg',
            },
            fontWeight: 'bold',
            color: {
              base: 'p_blue.800',
              _dark: 'p_blue.light',
            },
            transition: 'color 0.5s',
            textTransform: 'uppercase',
          })}
        >
          {langage}
        </h2>
      </div>
    </div>
  );
}
