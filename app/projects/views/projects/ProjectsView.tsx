'use client';

import useProjects from '../../hooks/useProjects';
import ProjectSection from '../../components/project_section/ProjectSection';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';
import LoadingProjectSection from '../../components/loading_project_section/LoadingProjectSection';
import ProjectSidebar from '../../components/project_sidebar/sidebar/ProjectSidebar';
import ProjectNavMenu from '../../components/project_navmenu/navmenu/ProjectNavMenu';

export default function ProjectsView() {
  const projects = useProjects();
  const fakeLoading: any[] = new Array(4).fill(null);

  return (
    <section>
      {projects.isSuccess ? (
        <>
          <ProjectSidebar data={projects.data} />
          <ProjectNavMenu data={projects.data} />
          <section id={'projects-display'}>
            {projects.data.items.map((project: CompleteProjectFromApi, index: number) => {
              return (
                <ProjectSection
                  key={project.id}
                  project={project}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  index={index}
                />
              );
            })}
          </section>
        </>
      ) : (
        fakeLoading.map((_, index: number) => {
          return <LoadingProjectSection key={index} index={index} />;
        })
      )}
    </section>
  );
}
