import {css} from '@/styled-system/css';
import {grid, hstack, vstack} from '@/styled-system/patterns';
import Link from 'next/link';

const activityStyle = vstack({
  bgColor: {
    base: 'p_purple.light',
    _dark: 'p_purple.dark',
  },
  gap: 12,
  pb: 10,
});

const titleStyle = css({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontFamily: 'bricolage',
  fontSize: '4xl',
  fontWeight: 'bold',
  textAlign: 'center',
});

const containerStyle = grid({
  justifyItems: 'center',
  columns: 1,
  gap: 2,
  px: 8,
});

const svgStyle = css({
  stroke: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  height: 12,
  width: 12,
});

const dividerStyle = css({
  bgColor: 'p_purple.main',
  height: '5vh',
  width: 1,
});

const divHeadingStyle = hstack({
  color: {
    base: 'neutral.800',
    _dark: 'neutral.200',
  },
  fontSize: '2xl',
  gap: 8,
  w: 'full',
});

const paragraphStyle = css({
  color: {
    base: 'neutral.dark',
    _dark: 'neutral.light',
  },
  lineHeight: '1.7em',
  fontSize: 'lg',
  textWrap: 'balance',
});

const projectsLinkStyle = css({
  bgColor: {
    base: 'p_purple.dark',
    _dark: 'p_purple.light',
  },
  borderRadius: 'md',
  color: {
    base: 'neutral.light',
    _dark: 'neutral.dark',
  },
  fontFamily: 'bricolage',
  fontSize: '2xl',
  fontWeight: 'bold',
  p: 2,
  textAlign: 'center',
  w: '4/5',
});

export default function ActivityView() {
  return (
    <section id={'activity'} className={activityStyle}>
      <h2 className={titleStyle}>Mes activités</h2>
      <div className={containerStyle}>
        <div className={divHeadingStyle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={svgStyle}
          >
            <line x1='6' x2='10' y1='11' y2='11' />
            <line x1='8' x2='8' y1='9' y2='13' />
            <line x1='15' x2='15.01' y1='12' y2='12' />
            <line x1='18' x2='18.01' y1='10' y2='10' />
            <path d='M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z' />
          </svg>
          <div className={dividerStyle}></div>
          <h3>Jeux vidéo</h3>
        </div>
        <p className={paragraphStyle}>
          Mon principal hobby est de jouer aux jeux vidéos. J’aime plusieurs type de jeux, que ce soit en solo ou
          multijoueur. Mes jeux préférés sont Minecraft et The Binding of Isaac.
        </p>
      </div>
      <div className={containerStyle}>
        <div className={divHeadingStyle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={svgStyle}
          >
            <rect width='18' height='18' x='3' y='3' rx='2' />
            <path d='m10 10-2 2 2 2' />
            <path d='m14 14 2-2-2-2' />
          </svg>
          <div className={dividerStyle}></div>
          <h3>Développement</h3>
        </div>
        <p className={paragraphStyle}>
          En dehors des jeux vidéo, j’adore développer des petits ou gros projets de mon côté, pour apprendre de
          nouvelles technologies. Ma découverte la plus récente est Next Js.
        </p>
      </div>
      <div className={containerStyle}>
        <div className={divHeadingStyle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={svgStyle}
          >
            <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
            <polyline points='10 2 10 10 13 7 16 10 16 2' />
          </svg>
          <div className={dividerStyle}></div>
          <h3>Découvertes</h3>
        </div>
        <p className={paragraphStyle}>
          J’adore découvrir de nouvelles choses, surtout dans le développement web, mais aussi à travers mes différentes
          lectures. Je lis beaucoup de romans, de mangas et de webtoons.
        </p>
      </div>
      <Link href={'/projects'} className={projectsLinkStyle}>
        Voir mes projets
      </Link>
    </section>
  );
}
