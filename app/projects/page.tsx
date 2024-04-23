import ProjectsLandingView from './views/landing/ProjectsLandingView';
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
