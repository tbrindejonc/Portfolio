'use client';

import useProjects from '@app/projects/hooks/useProjects';
import ProjectSection from '../../components/project_section/ProjectSection';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';

export default function ProjectsView() {
  const projects = useProjects();

  if (!projects.isSuccess) {
    return;
  }

  return (
    <section id={'projects-display'}>
      {projects.data.items.map((project: CompleteProjectFromApi) => {
        return <ProjectSection key={project.id} project={project} />;
      })}
    </section>
  );
}
