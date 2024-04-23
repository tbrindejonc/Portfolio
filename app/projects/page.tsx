import ProjectsLandingView from '@app/projects/views/ProjectsLanding/ProjectsLandingView';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Timeuh - Projets',
  description: 'Page presenting Timeuh projects.',
};

export default function Page() {
  return (
    <main>
      <ProjectsLandingView />
    </main>
  );
}
