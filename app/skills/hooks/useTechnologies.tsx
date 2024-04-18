import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiCollection} from '@appTypes/api';
import {CompleteTechnologyFromApi} from '@schemas/api/technology/technology.schema';

/**
 * Fetches the technologies from the API
 */
const getTechnologies = async (): Promise<ApiCollection<CompleteTechnologyFromApi>> => {
  const response = await fetch('/api/technologies?fullContent=true');
  return await response.json();
};

/**
 * Custom hook to fetch the technologies from the API with react query
 */
const useTechnologies = (): UseQueryResult<ApiCollection<CompleteTechnologyFromApi>> => {
  return useQuery<ApiCollection<CompleteTechnologyFromApi>>({
    queryKey: ['technologies'],
    queryFn: getTechnologies,
  });
};

export default useTechnologies;
