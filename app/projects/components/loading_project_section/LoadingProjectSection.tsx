import ProjectDecoration from '../project_decoration/ProjectDecoration';
import {cProjSection_section} from '../project_section/ProjectSection.styles';
import LoadingProject from '../loading_project/LoadingProject';

type Props = {
  index: number;
};

export default function LoadingProjectSection({index}: Props) {
  return (
    <section className={cProjSection_section}>
      <LoadingProject />
      <ProjectDecoration index={index} />
    </section>
  );
}
