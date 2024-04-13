import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {Language, TechCategory} from '@appTypes/portfolio';
import Technology from '@app/skills/components/technology/Technology';
import {
  cTechDisplay_container,
  cTechDisplay_headerContainer,
  cTechDisplay_headerDecorator,
  cTechDisplay_headerDecoratorColor,
  cTechDisplay_headerTitle,
  cTechDisplay_technologiesContainer,
} from './TechnologiesDisplay.styles';

type Props = {
  technologies: CompleteTechnologyFromApi[];
  language: Language;
  category: TechCategory;
};

export default function TechnologiesDisplay({technologies, language, category}: Props) {
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
