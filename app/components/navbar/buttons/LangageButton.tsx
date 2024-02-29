import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

export default function LangageButton() {
  return (
    <div
      className={css({
        height: 10,
        width: 10,
        backgroundColor: 'p_blue.800',
        position: 'relative',
        borderRadius: 10,
      })}
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
        })}
      >
        <h2
          className={css({
            fontSize: 'sm',
            fontWeight: 'bold',
            color: 'p_blue.800',
          })}
        >
          FR
        </h2>
      </div>
    </div>
  );
}
