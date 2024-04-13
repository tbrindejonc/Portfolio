import {TechCategory} from '@appTypes/portfolio';
import useTechnologies from '@app/skills/hooks/useTechnologies';
import {useEffect} from 'react';
import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';
import {UseQueryResult} from '@tanstack/react-query';
import {ApiCollection} from '@appTypes/api';

/**
 * Custom hook to get the technologies from a specified category
 *
 * @param category The category of the technologies to fetch
 */
const useTechWithCategory = (category: TechCategory): UseQueryResult<ApiCollection<CompleteTechnologyFromApi>> => {
  const technologies = useTechnologies();

  useEffect(() => {
    if (technologies.isSuccess) {
      technologies.data.items = technologies.data.items.filter((tech: CompleteTechnologyFromApi) => {
        return tech.category.id === category;
      });
      technologies.data.count = technologies.data.items.length;
    }
  }, [technologies, category]);

  return technologies;
};

export default useTechWithCategory;
