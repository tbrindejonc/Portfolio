import {vLegal_legal} from '../GlobalView.styles';
import AuthorView from '../author/AuthorView';
import LegalMentionsView from '../legal_mentions/LegalMentionsView';

export default function LegalView() {
  return (
    <section className={vLegal_legal}>
      <AuthorView />
      <LegalMentionsView />
    </section>
  );
}
