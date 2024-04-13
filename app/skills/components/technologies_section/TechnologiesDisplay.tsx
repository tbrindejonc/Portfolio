import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {Language, TechCategory} from '@appTypes/portfolio';
import {grid, vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';
import Technology from '@app/skills/components/technology/Technology';

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

  return (
    <div className={cTechDisplay_container}>
      <div className={cTechDisplay_headerContainer}>
        <div className={`${cTechDisplay_headerDecorator} ${cTechDisplay_headerDecoratorColor(category, 'right')}`} />
        <h1 className={cTechDisplay_headerTitle}>{technologies[0].category.name[language]}</h1>
        <div className={`${cTechDisplay_headerDecorator} ${cTechDisplay_headerDecoratorColor(category, 'left')}`} />
      </div>
      <div className={cTechDisplay_technologiesContainer}>
        {technologies.map((tech: CompleteTechnologyFromApi) => {
          return <Technology key={tech.id} technology={tech} language={language} />;
        })}
      </div>
    </div>
  );
}
