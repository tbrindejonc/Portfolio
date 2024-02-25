import {ProjectFromApi, ProjectFromDatabase, ProjectWhenDeleted} from '@schemas/api/project/project.schema';

/**
 * Format a project for the api return
 *
 * @param {ProjectFromDatabase} project the project to format
 * @param {boolean} isDeleted if the project is deleted
 *
 * @returns {ProjectFromApi | ProjectWhenDeleted} the formatted project
 */
const formatProjectForApi = (
  project: ProjectFromDatabase,
  isDeleted: boolean = false,
): ProjectFromApi | ProjectWhenDeleted => {
  if (isDeleted) {
    return {
      description_id: project.description_id,
      gif: project.gif,
      github: project.github,
      id: project.id,
      live_version: project.live_version,
      name: project.name,
    } as ProjectWhenDeleted;
  }

  return {
    description_id: project.description_id,
    gif: project.gif,
    github: project.github,
    id: project.id,
    live_version: project.live_version,
    name: project.name,
    links: {
      self: {
        method: 'GET',
        href: `/api/projects/${project.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/projects/${project.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/projects/${project.id}`,
      },
      gif: {
        method: 'GET',
        href: `/api/logos/gifs/${project.gif}`,
      },
      description: {
        method: 'GET',
        href: `/api/texts/${project.description_id}`,
      },
    },
  } as ProjectFromApi;
};

export default formatProjectForApi;
