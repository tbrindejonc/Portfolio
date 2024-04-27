import {Metadata} from 'next';
import LegalView from './views/legal/LegalView';

export const metadata: Metadata = {
  title: 'Timeuh - Mentions légales',
  description: 'Page presenting Timeuh legal information.',
};

export default function Page() {
  return (
    <main>
      <LegalView />
    </main>
  );
}
