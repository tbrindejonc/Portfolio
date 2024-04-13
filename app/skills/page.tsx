import SkillsLandingView from './views/landing/SkillsLandingView';
import CategoryTechnologiesView from './views/technologies/CategoryTechnologiesView';
import {TechCategory} from '@appTypes/portfolio';

export default function Page() {
  return (
    <main>
      <SkillsLandingView />
      <section id={'skills-display'}>
        <CategoryTechnologiesView category={TechCategory.TOOLS} />
        <CategoryTechnologiesView category={TechCategory.MASTERED} reversed />
        <CategoryTechnologiesView category={TechCategory.LEARNING} />
        <CategoryTechnologiesView category={TechCategory.PLANNED} reversed />
      </section>
    </main>
  );
}
