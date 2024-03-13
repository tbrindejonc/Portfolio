import Image from 'next/image';
import Link from 'next/link';
import {
  contactLinkContainerStyle,
  contactLinkStyle,
  contactStyle,
  imageDivStyle,
  imageStyle,
  titleAndLinkContainerStyle,
  titleStyle,
} from '@styles/views/ContactView.styles';

export default function ContactView() {
  return (
    <section id={'contact'} className={contactStyle}>
      <div className={imageDivStyle}>
        <Image
          src={'/images/portfolio/landing/profile.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={imageStyle}
        />
      </div>
      <div className={titleAndLinkContainerStyle}>
        <h2 className={titleStyle}>Si vous voulez me contacter, n&apos;hésitez plus !</h2>
        <Link href={'/contact'} className={`group ${contactLinkContainerStyle}`}>
          <div className={contactLinkStyle}>Me contacter</div>
        </Link>
      </div>
    </section>
  );
}
