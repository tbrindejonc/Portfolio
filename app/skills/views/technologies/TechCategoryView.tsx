'use client';

import useTechWithCategory from '@app/skills/hooks/useTechWithCategory';
import {TechCategory} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';

type Props = {
  category: TechCategory;
};

export default function TechCategoryView({category}: Props) {
  const {filteredTechnologies, technologies} = useTechWithCategory(category);
  const {language} = useLanguage();

  const readyToDisplay = technologies.isSuccess && filteredTechnologies.length !== 0;

  return (
    <section id={`skills-${TechCategory[category].toLowerCase()}`}>
      {readyToDisplay ? (
        <>
          <h1>{filteredTechnologies[0].category.name[language]}</h1>
        </>
      ) : (
        <h1>loading</h1>
      )}
    </section>
  );
}
