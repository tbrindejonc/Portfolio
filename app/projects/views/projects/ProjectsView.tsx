'use client';

import useProjects from '@app/projects/hooks/useProjects';

export default function ProjectsView() {
  const projects = useProjects();

  if (projects.isSuccess) {
    console.log(projects.data);
  }

  return (
    <section id={'projects-display'}>
      <h1>Projects</h1>
    </section>
  );
}
