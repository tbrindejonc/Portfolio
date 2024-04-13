import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {Language} from '@appTypes/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import {circle, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

type Props = {
  technology: CompleteTechnologyFromApi;
  language: Language;
};

export default function Technology({technology, language}: Props) {
  const cTechDisplay_technology = vstack({
    bg: {
      base: 'p_purple.light',
      _dark: 'p_purple.dark',
    },
    borderRadius: 'lg',
    fontSize: 'sm',
    gap: 4,
    p: 2,
    position: 'relative',
    shadow: {
      base: '0 0 5px 2px token(colors.p_purple.dark)',
      _dark: '0 0 5px 2px token(colors.p_purple.light)',
    },
    transition: 'all 0.5s',
  });

  const cTechDisplay_imageContainer = circle({
    bg: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
    overflow: 'hidden',
    size: 14,
  });

  const cTechDisplay_image = css({
    h: 'auto',
    w: 10,
  });

  const cTechDisplay_title = css({
    alignSelf: 'start',
    fontSize: 'lg',
    fontWeight: 'semibold',
  });

  const cTechDisplay_paragraph = css({
    color: {
      base: 'neutral.800',
      _dark: 'neutral.200',
    },
    textWrap: 'balance',
  });

  const cTechDisplay_link = css({
    bg: {
      base: 'p_purple.dark',
      _dark: 'p_purple.light',
    },
    borderRadius: 'full',
    bottom: 2,
    color: {
      base: 'neutral.light',
      _dark: 'neutral.dark',
    },
    fontSize: 'md',
    justifySelf: 'end',
    p: 0.5,
    position: 'absolute',
    textAlign: 'center',
    w: '90%',
  });

  const cTechDisplay_textContainer = css({
    pb: 10,
  });

  return (
    <div key={technology.id} className={cTechDisplay_technology}>
      <div className={cTechDisplay_imageContainer}>
        <Image
          src={technology.links.logo.href}
          alt={technology.name}
          width={0}
          height={0}
          sizes={'100vw'}
          className={cTechDisplay_image}
        />
      </div>
      <div className={cTechDisplay_textContainer}>
        <h2 className={cTechDisplay_title}>{technology.name}</h2>
        <p className={cTechDisplay_paragraph}>{technology.description[language]}</p>
      </div>
      <Link href={technology.website} className={cTechDisplay_link}>
        Consulter
      </Link>
    </div>
  );
}
