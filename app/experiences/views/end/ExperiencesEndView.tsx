import Link from 'next/link';
import {css} from '@/styled-system/css';
import {hstack} from '@/styled-system/patterns';

export default function ExperiencesEndView() {
  const vExpEnd_end = css({
    alignItems: 'center',
    bg: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    display: 'flex',
    flexDirection: 'column',
    fontSize: '3xl',
    gap: 8,
    h: 'screen',
    justifyContent: 'center',
    px: 8,
    textAlign: 'center',
    transition: 'all 0.5s',
  });

  const vExpEnd_button = hstack({
    bg: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
    borderRadius: 'lg',
    color: {
      base: 'neutral.light',
      _dark: 'neutral.dark',
    },
    fontFamily: 'bricolage',
    fontSize: '2xl',
    fontWeight: 'bold',
    gap: 4,
    justifyContent: 'center',
    p: 2,
    transition: 'all 0.5s',
    w: 'full',
  });

  const vExpEnd_svg = css({
    h: 7,
    stroke: {
      base: 'neutral.light',
      _dark: 'neutral.dark',
    },
    rotate: {
      _groupHover: '-90deg',
    },
    strokeWidth: 4,
    transition: 'all 0.3s ease-in-out',
    w: 7,
  });

  return (
    <div className={vExpEnd_end}>
      <h2>
        Si vous êtes convaincu par ces expériences et que vous souhaitez travailler avec moi, ou que vous voulez en
        savoir plus, n’hésitez pas à me contacter !
      </h2>
      <Link href={'/contact'} className={`group ${vExpEnd_button}`}>
        <h3>Contacter</h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={vExpEnd_svg}
        >
          <path d='M12 5v14' />
          <path d='m19 12-7 7-7-7' />
        </svg>
      </Link>
    </div>
  );
}
