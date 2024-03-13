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
    gap: 2,
    padding: 2,
    h: 'screen',
    transition: 'all 0.5s',
  });

  const imageDivStyle: string = css({
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

  const imageStyle: string = css({
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
      <h2>Si vous voulez me contacter, n&apos;hésitez plus !</h2>
      <Link href={'/contact'}>Me contacter</Link>
    </section>
  );
}
