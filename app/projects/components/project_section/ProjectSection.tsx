import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Project from '../project/Project';
import {cProjSection_decoration, cProjSection_section} from './ProjectSection.styles';
import {Direction} from '@appTypes/portfolio';

type Props = {
  project: CompleteProjectFromApi;
  direction: Direction;
};

export default function ProjectSection({project, direction}: Props) {
  return (
    <section className={cProjSection_section}>
      <Project project={project} direction={direction} />
      <div className={cProjSection_decoration} />
    </section>
  );
}
