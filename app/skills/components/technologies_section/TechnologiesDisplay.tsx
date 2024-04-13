import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {Language, TechCategory} from '@appTypes/portfolio';
import {circle, grid, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  technologies: CompleteTechnologyFromApi[];
  language: Language;
  category: TechCategory;
};

export default function TechnologiesDisplay({technologies, language, category}: Props) {
  const cTechDisplay_container = vstack({
    gap: 8,
    justifyContent: 'center',
  });

  const cTechDisplay_headerContainer = vstack({
    justifyContent: 'center',
  });

  const cTechDisplay_headerDecorator = css({
    bg: 'p_blue.main',
    h: 1,
    w: '40vw',
  });

  const cTechDisplay_headerDecoratorColor = (category: TechCategory, direction: 'left' | 'right') => {
    switch (category) {
      case TechCategory.MASTERED:
        return css({
          bg: 'p_blue.main',
        });

      case TechCategory.LEARNING:
        return css({
          bgGradient: direction === 'right' ? 'to-r' : 'to-l',
          gradientFrom: 'p_blue.main',
          gradientTo: 'p_purple.main',
        });

      case TechCategory.PLANNED:
        return css({
          bgGradient: direction === 'right' ? 'to-r' : 'to-l',
          gradientFrom: 'p_purple.main',
          gradientTo: 'p_blue.main',
        });

      default:
        return css({
          bg: 'p_purple.main',
        });
    }
  };

  const cTechDisplay_headerTitle = css({
    fontFamily: 'bricolage',
    fontSize: '3xl',
    fontWeight: 'bold',
    lineHeight: 1,
    textAlign: 'center',
  });

  const cTechDisplay_technologiesContainer = grid({
    gap: 4,
    gridTemplateColumns: 2,
  });

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
    <div className={cTechDisplay_container}>
      <div className={cTechDisplay_headerContainer}>
        <div className={`${cTechDisplay_headerDecorator} ${cTechDisplay_headerDecoratorColor(category, 'right')}`} />
        <h1 className={cTechDisplay_headerTitle}>{technologies[0].category.name[language]}</h1>
        <div className={`${cTechDisplay_headerDecorator} ${cTechDisplay_headerDecoratorColor(category, 'left')}`} />
      </div>
      <div className={cTechDisplay_technologiesContainer}>
        {technologies.map((tech) => {
          return (
            <div key={tech.id} className={cTechDisplay_technology}>
              <div className={cTechDisplay_imageContainer}>
                <Image
                  src={tech.links.logo.href}
                  alt={tech.name}
                  width={0}
                  height={0}
                  sizes={'100vw'}
                  className={cTechDisplay_image}
                />
              </div>
              <div className={cTechDisplay_textContainer}>
                <h2 className={cTechDisplay_title}>{tech.name}</h2>
                <p className={cTechDisplay_paragraph}>{tech.description[language]}</p>
              </div>
              <Link href={tech.website} className={cTechDisplay_link}>
                Consulter
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
