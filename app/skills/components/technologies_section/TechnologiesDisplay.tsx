import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {Language} from '@appTypes/portfolio';
import {vstack} from '@/styled-system/patterns';
import {css} from '@/styled-system/css';

type Props = {
  technologies: CompleteTechnologyFromApi[];
  language: Language;
};

export default function TechnologiesDisplay({technologies, language}: Props) {
  const cTechDisplay_headerContainer = vstack({
    justifyContent: 'center',
  });

  const cTechDisplay_headerDecorator = css({
    bg: 'p_blue.main',
    h: 1,
    w: '40vw',
  });

  const cTechDisplay_headerTitle = css({
    fontFamily: 'bricolage',
    fontSize: '3xl',
    fontWeight: 'bold',
    lineHeight: 1,
    textAlign: 'center',
  });

  return (
    <div>
      <div className={cTechDisplay_headerContainer}>
        <div className={cTechDisplay_headerDecorator} />
        <h1 className={cTechDisplay_headerTitle}>{technologies[0].category.name[language]}</h1>
        <div className={cTechDisplay_headerDecorator} />
      </div>
      <div>
        {technologies.map((tech) => {
          return (
            <div key={tech.id} className={css({fontSize: 'sm'})}>
              <h2>{tech.name}</h2>
              <p>{tech.description[language]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
