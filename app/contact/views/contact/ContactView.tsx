import Image from 'next/image';
import Link from 'next/link';
import contactLinks from '../../texts/contactLinks';
import {
  vContact_contact,
  vContact_image,
  vContact_link,
  vContact_linkImage,
  vContact_linksContainer,
  vContact_title,
  vContact_titleContainer,
} from './ContactView.styles';

export default function ContactView() {
  return (
    <section id={'contact'} className={vContact_contact}>
      <div className={vContact_titleContainer}>
        <h1 className={vContact_title}>Mes différents liens</h1>
        <Image
          src={'/images/portfolio/contact/phone.jpg'}
          alt={'me'}
          width={0}
          height={0}
          sizes={'100vw'}
          className={vContact_image}
        />
      </div>
      <div className={vContact_linksContainer}>
        {contactLinks.map((link) => {
          return (
            <Link href={link.href} key={`link-${link.linkName}`} className={vContact_link}>
              <Image
                src={link.imageSrc}
                alt={link.linkName}
                width={0}
                height={0}
                sizes={'100vw'}
                className={vContact_linkImage}
              />
              <h2>{link.linkName}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
