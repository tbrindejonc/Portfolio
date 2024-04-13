'use client';

import useTechWithCategory from '@app/skills/hooks/useTechWithCategory';
import {TechCategory} from '@appTypes/portfolio';

type Props = {
  category: TechCategory;
};

export default function TechCategoryView({category}: Props) {
  const technologies = useTechWithCategory(category);

  if (!technologies.isSuccess) {
    return (
      <section>
        <h1>loading</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>Technologies</h1>
    </section>
  );
}
