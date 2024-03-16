import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiCollection} from '@appTypes/api';
import {CompleteExperienceFromApi} from '@schemas/api/experience/experience.schema';

/**
 * Fetches the experiences from the API
 *
 * @returns {Promise<ApiCollection<CompleteExperienceFromApi>>} The experiences
 */
const getExperiences = async (): Promise<ApiCollection<CompleteExperienceFromApi>> => {
  const response = await fetch('/api/experiences?fullContent=true');
  return await response.json();
};

/**
 * Custom hook to fetch the experiences from the API
 *
 * @returns {UseQueryResult<ApiCollection<CompleteExperienceFromApi>>} The experiences
 */
const useExperiences = (): UseQueryResult<ApiCollection<CompleteExperienceFromApi>> => {
  return useQuery<ApiCollection<CompleteExperienceFromApi>>({
    queryKey: ['experiences'],
    queryFn: getExperiences,
  });
};

export default useExperiences;
