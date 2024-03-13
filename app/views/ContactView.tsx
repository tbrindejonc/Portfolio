import Image from 'next/image';
import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import Link from 'next/link';

export default function ContactView() {
  const contactStyle = vstack({
    bgColor: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    gap: 12,
    padding: 4,
    pb: 10,
    h: 'fit',
    transition: 'all 0.5s',
  });

  const imageDivStyle = css({
    borderRadius: {
      base: 10,
      md: 20,
    },
    height: '300px',
    overflow: 'hidden',
    shadow: {
      base: '0px 4px 4px 0 token(colors.p_blue.dark_25)',
      _dark: '0px 4px 4px 0 token(colors.p_blue.light_25)',
    },
    width: '300px',
  });

  const imageStyle = css({
    backgroundSize: 'cover',
    borderRadius: {
      base: 10,
      md: 20,
    },
    height: 'auto',
    width: {
      base: '300px',
      md: '400px',
      xl: '500px',
    },
  });

  const titleStyle = css({
    fontFamily: 'bricolage',
    fontSize: '4xl',
    fontWeight: 'bold',
    textAlign: 'center',
  });

  const contactLinkStyle = css({
    bgColor: {
      base: 'p_blue.dark',
      _dark: 'p_blue.light',
    },
    borderRadius: 'lg',
    color: {
      base: 'neutral.light',
      _dark: 'neutral.dark',
    },
    fontFamily: 'bricolage',
    fontSize: '3xl',
    fontWeight: 'bold',
    p: 4,
    textAlign: 'center',
    transition: 'all 0.5s',
    w: 'full',
  });

  const contactLinkContainerStyle = vstack({
    bgGradient: {
      base: 'to-r',
      _hover: 'to-l',
    },
    borderRadius: 'xl',
    gradientFrom: 'p_blue.main',
    gradientTo: 'p_purple.main',
    p: 1,
    transition: 'all 0.5s',
    w: '4/5',
  });

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
      <h2 className={titleStyle}>Si vous voulez me contacter, n&apos;hésitez plus !</h2>
      <Link href={'/contact'} className={`group ${contactLinkContainerStyle}`}>
        <div className={contactLinkStyle}>Me contacter</div>
      </Link>
    </section>
  );
}
