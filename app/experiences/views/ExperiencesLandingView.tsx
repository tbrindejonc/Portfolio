import Link from 'next/link';
import Image from 'next/image';
import {
  experiencesLandingStyle,
  imageStyle,
  linkToNextStyle,
  paragraphStyle,
  svgStyle,
  textContainerStyle,
  titleStyle,
} from '@app/experiences/styles/ExperienceLandingView.styles';

export default function ExperiencesLandingView() {
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
