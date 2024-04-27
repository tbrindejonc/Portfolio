import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {ApiCollection} from '@appTypes/api';
import {CompleteProjectFromApi} from '@schemas/api/project/project.schema';

/**
 * Fetches the projects from the API
 */
const getProjects = async (): Promise<ApiCollection<CompleteProjectFromApi>> => {
  return await fetch('/api/projects?fullContent=true').then((res: Response) => {
    return res.json();
  });
};

/**
 * Custom hook to fetch the projects from the API with react-query
 */
const useProjects = (): UseQueryResult<ApiCollection<CompleteProjectFromApi>> => {
  return useQuery<ApiCollection<CompleteProjectFromApi>>({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
};

export default useProjects;
