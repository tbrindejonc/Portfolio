import {TechCategory, TechCategoryUtils} from '@appTypes/portfolio';
import useTechnologies from '@app/skills/hooks/useTechnologies';
import {useEffect, useState} from 'react';
import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';

/**
 * Custom hook to get the technologies from a specified category
 *
 * @param category The category of the technologies to fetch
 */
const useTechWithCategory = (category: TechCategory): TechCategoryUtils => {
  const technologies = useTechnologies();
  const [filteredTechnologies, setFilteredTechnologies] = useState<CompleteTechnologyFromApi[]>([]);

  useEffect(() => {
    if (technologies.isSuccess) {
      const filteredTechs = technologies.data.items.filter((tech: CompleteTechnologyFromApi) => {
        return tech.category.id === category;
      });
      setFilteredTechnologies(filteredTechs);
    }
  }, [technologies.data?.items, technologies.isSuccess, category]);

  return {filteredTechnologies, technologies};
};

export default useTechWithCategory;
