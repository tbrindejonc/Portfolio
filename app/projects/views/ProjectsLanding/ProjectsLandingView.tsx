import {css} from '@/styled-system/css';
import Image from 'next/image';

export default function ProjectsLandingView() {
  const vProjLanding_landing = css({
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
    gap: 4,
    h: 'screen',
    w: 'full',
    transition: 'all 0.5s',
  });

  const vProjLanding_image: string = css({
    borderRadius: '2xl',
    h: {
      base: '250px',
      md: '350px',
      xl: '500px',
    },
    objectFit: 'cover',
    shadow: {
      base: '4px 4px 5px 2px token(colors.p_blue.dark_25)',
      _dark: '4px 4px 5px 2px token(colors.p_blue.light_25)',
    },
    w: {
      base: '80%',
      md: '50%',
      xl: '70%',
    },
  });

  const vProjLanding_paragraph: string = css({
    fontSize: '2xl',
    textWrap: 'balance',
    w: 'full',
  });

  return (
    <section id={'projects-landing'} className={vProjLanding_landing}>
      <h1>Mes projets</h1>
      <Image
        src={'/images/portfolio/experiences/costume.jpg'}
        alt={'me'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={vProjLanding_image}
      />
      <p className={vProjLanding_paragraph}>
        A travers mes études et mes expériences professionnelles, j’ai peu apprendre diverses technologies qui me sont
        très utiles pour développer des sites web
      </p>
    </section>
  );
}
