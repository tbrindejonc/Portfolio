import {css} from '@/styled-system/css';
import {circle} from '@/styled-system/patterns';

export default function ThemeButton() {
  return (
    <div
      className={css({
        height: 10,
        width: 10,
        backgroundColor: 'p_purple.800',
        position: 'relative',
        borderRadius: 10,
      })}
    >
      <div className={circle({size: '22px', bgColor: 'p_purple.main', position: 'absolute', bottom: 1, left: 1})}></div>
      <div
        className={css({
          bgColor: 'p_purple.light/70',
          position: 'absolute',
          top: '6px',
          right: '6px',
          height: 7,
          width: 7,
          borderRadius: 7,
          borderColor: 'p_purple.light/50',
          border: '2px solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        })}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`lucide lucide-moon-star ${css({stroke: 'p_purple.800'})}`}
        >
          <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
          <path d='M19 3v4' />
          <path d='M21 5h-4' />
        </svg>
      </div>
    </div>
  );
}
