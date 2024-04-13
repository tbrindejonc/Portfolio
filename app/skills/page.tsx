import SkillsLandingView from './views/landing/SkillsLandingView';
import TechCategoryView from './views/technologies/TechCategoryView';
import {TechCategory} from '@appTypes/portfolio';

export default function Page() {
  return (
    <main>
      <SkillsLandingView />
      <TechCategoryView category={TechCategory.TOOLS} />
      <TechCategoryView category={TechCategory.MASTERED} />
      <TechCategoryView category={TechCategory.LEARNING} />
      <TechCategoryView category={TechCategory.PLANNED} />
    </main>
  );
}
