import ExperiencesLandingView from '@app/experiences/views/ExperiencesLandingView';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Timeuh - Experiences',
  description: 'Page which displays Timeuh work experiences.',
};

export default function Page() {
  return (
    <main>
      <ExperiencesLandingView />
    </main>
  );
}
