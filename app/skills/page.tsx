import SkillsLandingView from './views/landing/SkillsLandingView';
import CategoryTechnologiesView from './views/technologies/CategoryTechnologiesView';
import {TechCategory} from '@appTypes/portfolio';

export default function Page() {
  return (
    <main>
      <SkillsLandingView />
      <CategoryTechnologiesView category={TechCategory.TOOLS} />
      <CategoryTechnologiesView category={TechCategory.MASTERED} />
      <CategoryTechnologiesView category={TechCategory.LEARNING} />
      <CategoryTechnologiesView category={TechCategory.PLANNED} />
    </main>
  );
}
