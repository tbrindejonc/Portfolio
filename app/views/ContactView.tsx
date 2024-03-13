import Image from 'next/image';
import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import Link from 'next/link';

export default function ContactView() {
  const contactStyle = css({
    alignItems: 'center',
    bgColor: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    display: 'flex',
    flexDirection: {
      base: 'column',
      xl: 'row-reverse',
    },
    gap: {
      base: 12,
      md: 16,
    },
    padding: {
      base: 4,
      md: 8,
      xl: 20,
    },
    pb: 10,
    h: {
      base: 'fit',
      md: '80vh',
      xl: 'screen',
    },
    transition: 'all 0.5s',
  });

  const imageDivStyle = css({
    borderRadius: {
      base: 10,
      md: 20,
    },
    height: {
      base: '300px',
      md: '400px',
      xl: '600px',
    },
    overflow: 'hidden',
    shadow: {
      base: '0px 4px 4px 0 token(colors.p_blue.dark_25)',
      _dark: '0px 4px 4px 0 token(colors.p_blue.light_25)',
    },
    width: {
      base: '300px',
      md: '400px',
      xl: '600px',
    },
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
      xl: '600px',
    },
  });

  const titleStyle = css({
    fontFamily: 'bricolage',
    fontSize: {
      base: '4xl',
      md: '6xl',
      xl: '7xl',
    },
    fontWeight: 'bold',
    letterSpacing: 'wide',
    textAlign: {
      base: 'center',
      xl: 'right',
    },
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
    fontSize: {
      base: '3xl',
      md: '4xl',
      xl: '6xl',
    },
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
    p: {
      base: 1,
      md: 2,
    },
    transition: 'all 0.5s',
    w: {
      base: '4/5',
      xl: '2/3',
    },
  });

  const titleAndLinkContainerStyle = vstack({
    gap: {
      base: 12,
      md: 16,
      xl: 32,
    },
    justifyContent: 'center',
    w: {
      xl: '1/2',
    },
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
      <div className={titleAndLinkContainerStyle}>
        <h2 className={titleStyle}>Si vous voulez me contacter, n&apos;hésitez plus !</h2>
        <Link href={'/contact'} className={`group ${contactLinkContainerStyle}`}>
          <div className={contactLinkStyle}>Me contacter</div>
        </Link>
      </div>
    </section>
  );
}
