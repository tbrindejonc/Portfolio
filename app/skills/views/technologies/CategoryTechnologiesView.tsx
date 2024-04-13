'use client';

import useTechWithCategory from '@app/skills/hooks/useTechWithCategory';
import {TechCategory} from '@appTypes/portfolio';
import useLanguage from '@hooks/useLanguage';
import TechnologiesDisplay from '../../components/technologies_section/TechnologiesDisplay';
import {vstack} from '@/styled-system/patterns';

type Props = {
  category: TechCategory;
  reversed?: boolean;
};

export default function CategoryTechnologiesView({category, reversed = false}: Props) {
  const {filteredTechnologies, technologies} = useTechWithCategory(category);
  const {language} = useLanguage();

  const readyToDisplay = technologies.isSuccess && filteredTechnologies.length !== 0;

  const vCatTechView_section = vstack({
    bgGradient: 'to-b',
    color: {
      base: 'neutral.dark',
      _dark: 'neutral.light',
    },
    gap: 4,
    gradientFrom: {
      base: reversed ? 'p_blue.light' : 'p_purple.light',
      _dark: reversed ? 'p_blue.dark' : 'p_purple.dark',
    },
    gradientTo: {
      base: reversed ? 'p_purple.light' : 'p_blue.light',
      _dark: reversed ? 'p_purple.dark' : 'p_blue.dark',
    },
    h: 'fit',
    justifyContent: 'center',
    minH: 'screen',
    p: 4,
    pb: 8,
    transition: 'all 0.5s',
    w: 'full',
  });

  return (
    <section id={`skills-${TechCategory[category].toLowerCase()}`} className={vCatTechView_section}>
      {readyToDisplay ? (
        <TechnologiesDisplay technologies={filteredTechnologies} language={language} category={category} />
      ) : (
        <h1>loading</h1>
      )}
    </section>
  );
}
