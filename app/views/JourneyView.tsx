import Image from 'next/image';
import Link from 'next/link';
import {
  contentWrapperStyle,
  imageStyle,
  journeyStyle,
  journeyTitleStyle,
  linkStyle,
  textSectionStyle,
} from '@styles/views/JourneyView.styles';

export default function JourneyView() {
  return (
    <section id={'journey'} className={journeyStyle}>
      <h1 className={journeyTitleStyle}>Mon parcours</h1>
      <div className={contentWrapperStyle}>
        <div className={textSectionStyle}>
          <p>
            Après un Baccalauréat Scientifique, j’ai choisi de suivre un BUT Informatique, pour découvrir le
            développement, surtout en Java.
          </p>
          <Image
            src={'/images/portfolio/journey/scholarship.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={imageStyle}
          />
        </div>
        <div className={textSectionStyle}>
          <p>
            En m’initiant au PHP lors de ma deuxième année, j’ai été grandement intéressé par le développement web,
            spécifiquement le développement Javascript avec React Js.
          </p>
          <Image
            src={'/images/portfolio/journey/webdev.jpg'}
            alt={'me'}
            width={0}
            height={0}
            sizes={'100vw'}
            className={imageStyle}
          />
        </div>
        <Link href={'/skills'} className={linkStyle}>
          Voir mes compétences
        </Link>
      </div>
    </section>
  );
}
