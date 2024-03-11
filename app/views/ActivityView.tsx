import {css} from '@/styled-system/css';
import {grid, hstack, vstack} from '@/styled-system/patterns';

const activityStyle = vstack({
  bgColor: 'p_purple.light',
  gap: 12,
  pb: 10,
});

const titleStyle = css({
  color: 'neutral.800',
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
  stroke: 'neutral.800',
  height: 12,
  width: 12,
});

const dividerStyle = css({
  bgColor: 'p_purple.main',
  height: '5vh',
  width: 1,
});

const divHeadingStyle = hstack({
  fontSize: '2xl',
  gap: 8,
  w: 'full',
});

const paragraphStyle = css({
  color: 'neutral.dark',
  lineHeight: '1.7em',
  fontSize: 'lg',
  textWrap: 'balance',
});

export default function ActivityView() {
  return (
    <section id={'activity'} className={activityStyle}>
      <h2 className={titleStyle}>Mes activités</h2>
      <div className={containerStyle}>
        <div className={divHeadingStyle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={svgStyle}
          >
            <circle cx='12' cy='12' r='10' />
            <path d='m10 8 4 4-4 4' />
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
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={svgStyle}
          >
            <circle cx='12' cy='12' r='10' />
            <path d='m10 8 4 4-4 4' />
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
            viewBox='0 0 24 24'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={svgStyle}
          >
            <circle cx='12' cy='12' r='10' />
            <path d='m10 8 4 4-4 4' />
          </svg>
          <div className={dividerStyle}></div>
          <h3>Découvertes</h3>
        </div>
        <p className={paragraphStyle}>
          J’adore découvrir de nouvelles choses, surtout dans le développement web, mais aussi à travers mes différentes
          lectures. Je lis beaucoup de romans, de mangas et de webtoons.
        </p>
      </div>
    </section>
  );
}
