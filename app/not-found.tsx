import {Metadata} from 'next';
import NotFoundView from '@views/NotFoundView';

export const metadata: Metadata = {
  title: 'Timeuh - Page introuvable',
  description: 'Not found page for Timeuh portfolio',
};

export default function NotFound() {
  return <NotFoundView />;
}
