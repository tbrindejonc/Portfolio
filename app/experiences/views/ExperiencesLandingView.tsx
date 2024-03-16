import {hstack, vstack} from '@/styled-system/patterns';
import Link from 'next/link';
import {css} from '@/styled-system/css';
import Image from 'next/image';

export default function ExperiencesLandingView() {
  const experiencesLandingStyle = vstack({
    bgColor: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    gap: 8,
    h: 'screen',
    justifyContent: 'center',
    transition: 'all 0.5s',
  });

  const textContainerStyle = vstack({
    gap: 8,
    justifyContent: 'center',
    px: 3,
  });

  const imageStyle: string = css({
    borderRadius: '2xl',
    height: '250px',
    objectFit: 'cover',
    shadow: {
      base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
      _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
    },
    width: '80%',
  });

  const titleStyle = css({
    fontFamily: 'bricolage',
    fontSize: '4xl',
    fontWeight: 'bold',
  });

  const paragraphStyle = css({
    color: {
      base: 'neutral.800',
      _dark: 'neutral.200',
    },
    fontSize: '1.4em',
    textAlign: 'center',
  });

  const svgStyle = css({
    stroke: {
      base: 'neutral.light',
      _dark: 'neutral.dark',
    },
    strokeWidth: 4,
  });

  const linkToNextStyle = hstack({
    bgColor: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
    borderRadius: 'xl',
    color: {
      base: 'neutral.light',
      _dark: 'neutral.dark',
    },
    fontSize: '2xl',
    fontWeight: 'semibold',
    justifyContent: 'center',
    p: 2,
    w: '4/5',
  });

  return (
    <section id={'experiences-landing'} className={experiencesLandingStyle}>
      <h1 className={titleStyle}>Mes Experiences</h1>
      <div className={textContainerStyle}>
        <Image
          src={'/images/portfolio/experiences/costume.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={imageStyle}
        />
        <div className={textContainerStyle}>
          <p className={paragraphStyle}>
            Durant mes études et mon temps personnel de transition (les vacances scolaires en l’occurrence), j’ai pu
            accumuler de l’expérience au travail. Vous pouvez voir ces dernières ci-dessous.
          </p>
          <Link href={'#experiences'} className={linkToNextStyle}>
            <h2>Découvrir</h2>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className={svgStyle}
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
