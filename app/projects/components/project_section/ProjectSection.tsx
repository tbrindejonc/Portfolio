import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Project from '../project/Project';
import {cProjSection_section} from './ProjectSection.styles';
import {Direction} from '@appTypes/portfolio';
import ProjectDecoration from '../project_decoration/ProjectDecoration';

type Props = {
  project: CompleteProjectFromApi;
  direction: Direction;
  index: number;
};

export default function ProjectSection({project, direction, index}: Props) {
  return (
    <section className={cProjSection_section}>
      <Project project={project} direction={direction} />
      <ProjectDecoration index={index} />
    </section>
  );
}
