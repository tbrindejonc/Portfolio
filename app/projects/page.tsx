import {Metadata} from 'next';
import ProjectsLandingView from './views/landing/ProjectsLandingView';
import ProjectsView from './views/projects/ProjectsView';

export const metadata: Metadata = {
  title: 'Timeuh - Projets',
  description: 'Page presenting Timeuh projects.',
};

export default function Page() {
  return (
    <main>
      <ProjectsLandingView />
      <ProjectsView />
    </main>
  );
}
