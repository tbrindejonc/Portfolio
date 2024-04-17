'use client';

import useTechWithCategory from '@app/skills/hooks/useTechWithCategory';
import {TechCategory} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import {vCatTechView_section} from './CategoryTechnologiesView.styles';
import TechnologiesLoading from '@app/skills/components/technologies_loading/TechnologiesLoading';
import TechnologiesDisplay from '@app/skills/components/technologies_section/TechnologiesDisplay';

type Props = {
  category: TechCategory;
  reversed?: boolean;
};

export default function CategoryTechnologiesView({category, reversed = false}: Props) {
  const {filteredTechnologies, technologies} = useTechWithCategory(category);
  const {language} = useLanguage();

  const readyToDisplay = technologies.isSuccess && filteredTechnologies.length !== 0;

  return (
    <section id={`skills-${TechCategory[category].toLowerCase()}`} className={vCatTechView_section(reversed)}>
      {readyToDisplay ? (
        <TechnologiesDisplay technologies={filteredTechnologies} language={language} category={category} />
      ) : (
        <TechnologiesLoading />
      )}
    </section>
  );
}
