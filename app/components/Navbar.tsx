import {css} from '@/styled-system/css';
import {circle, hstack} from '@/styled-system/patterns';

export default function Navbar() {
  return (
    <nav
      className={hstack({
        bgColor: 'p_purple.light',
        height: 12,
        shadow: '0 0 12px 0',
        shadowColor: 'p_blue.dark/10',
        justifyContent: 'space-around',
        paddingX: 2,
        position: 'fixed',
      })}
    >
      <div
        className={css({
          height: 10,
          width: 10,
          backgroundColor: 'p_purple.dark',
          position: 'relative',
          borderRadius: 10,
          bgGradient: 'to-tr',
          gradientFrom: 'p_purple.800',
          gradientTo: 'p_blue.800',
        })}
      >
        <div
          className={circle({size: '22px', bgColor: 'p_purple.main', position: 'absolute', bottom: 1, left: 1})}
        ></div>
        <div className={circle({size: '22px', bgColor: 'p_blue.main', position: 'absolute', top: 1, right: 1})}></div>
        <div
          className={css({
            bgColor: 'p_purple.light/70',
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
          })}
        >
          <div className={css({width: '70%', height: '3px', bgColor: 'p_purple.dark', borderRadius: 20})}></div>
          <div className={css({width: '70%', height: '3px', bgColor: 'p_purple.dark', borderRadius: 20})}></div>
          <div className={css({width: '70%', height: '3px', bgColor: 'p_purple.dark', borderRadius: 20})}></div>
        </div>
      </div>
      <h2
        className={css({
          fontSize: 'lg',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #001A38, #7DB9FF, #CF8BFF, #130823)',
          color: 'transparent',
          bgClip: 'text',
        })}
      >
        Timothée Brindejonc
      </h2>
      <div className={hstack({gap: 4})}>
        <div className={css({height: 10, width: 10, backgroundColor: 'p_purple.dark'})}></div>
        <div className={css({height: 10, width: 10, backgroundColor: 'p_purple.dark'})}></div>
      </div>
    </nav>
  );
}
