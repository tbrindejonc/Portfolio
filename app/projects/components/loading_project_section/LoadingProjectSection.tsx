import ProjectDecoration from '../project_decoration/ProjectDecoration';
import {cProjSection_section} from '../project_section/ProjectSection.styles';

type Props = {
  index: number;
};

export default function LoadingProjectSection({index}: Props) {
  return (
    <section className={cProjSection_section}>
      <div>loading</div>
      <ProjectDecoration index={index} />
    </section>
  );
}
