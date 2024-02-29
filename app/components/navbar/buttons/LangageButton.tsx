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
        height: 10,
        width: 10,
        backgroundColor: 'p_blue.800',
        position: 'relative',
        borderRadius: 10,
        cursor: 'pointer',
        transition: 'background-color 0.5s',
        _dark: {
          backgroundColor: 'p_blue.light',
        },
      })}
      onClick={switchLangage}
    >
      <div className={circle({size: '22px', bgColor: 'p_blue.main', position: 'absolute', top: 1, right: 1})}></div>
      <div
        className={css({
          bgColor: 'p_blue.light/70',
          position: 'absolute',
          top: '6px',
          right: '6px',
          height: 7,
          width: 7,
          borderRadius: 7,
          borderColor: 'p_blue.light/50',
          border: '2px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          transition: 'background-color 0.5s',
          _dark: {
            bgColor: 'p_blue.dark/70',
            borderColor: 'p_blue.dark/50',
          },
        })}
      >
        <h2
          className={css({
            fontSize: 'sm',
            fontWeight: 'bold',
            color: 'p_blue.800',
            transition: 'color 0.5s',
            textTransform: 'uppercase',
            _dark: {
              color: 'p_blue.light',
            },
          })}
        >
          {langage}
        </h2>
      </div>
    </div>
  );
}
