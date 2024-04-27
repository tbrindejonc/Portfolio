'use client';

import useProjects from '@app/projects/hooks/useProjects';
import ProjectSection from '../../components/project_section/ProjectSection';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import LoadingProjectSection from '@app/projects/components/loading_project_section/LoadingProjectSection';

export default function ProjectsView() {
  const projects = useProjects();
  const fakeLoading: any[] = new Array(4).fill(null);

  return (
    <section id={'projects-display'}>
      {projects.isSuccess
        ? projects.data.items.map((project: CompleteProjectFromApi, index: number) => {
            return (
              <ProjectSection
                key={project.id}
                project={project}
                direction={index % 2 === 0 ? 'left' : 'right'}
                index={index}
              />
            );
          })
        : fakeLoading.map((_, index: number) => {
            return <LoadingProjectSection key={index} index={index} />;
          })}
    </section>
  );
}
