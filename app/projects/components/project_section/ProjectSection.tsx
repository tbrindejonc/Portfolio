import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import Project from '../project/Project';
import {cProjSection_decoration, cProjSection_section} from './ProjectSection.styles';

type Props = {
  project: CompleteProjectFromApi;
};

export default function ProjectSection({project}: Props) {
  return (
    <section className={cProjSection_section}>
      <Project project={project} />
      <div className={cProjSection_decoration} />
    </section>
  );
}
