import {
  CompleteProjectFromApi,
  CompleteProjectFromDatabase,
  ProjectFromApi,
  ProjectFromDatabase,
  ProjectWhenDeleted,
} from '@schemas/api/project/project.schema';

/**
 * Format a project for the api return
 *
 * @param {ProjectFromDatabase | CompleteProjectFromDatabase} project the project to format
 * @param {boolean} isDeleted if the project is deleted
 * @param {boolean} isFull if the project is complete
 *
 * @returns {ProjectFromApi | ProjectWhenDeleted | CompleteProjectFromApi} the formatted project
 */
const formatProjectForApi = (
  project: ProjectFromDatabase | CompleteProjectFromDatabase,
  isDeleted: boolean = false,
  isFull: boolean = false,
): ProjectFromApi | ProjectWhenDeleted | CompleteProjectFromApi => {
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

  if (isFull && 'Project_Technologies' in project) {
    return {
      description: {
        english: project.description.english,
        french: project.description.french,
        id: project.description.id,
      },
      gif: project.gif,
      github: project.github,
      id: project.id,
      live_version: project.live_version,
      name: project.name,
      technologies: project.Project_Technologies.map((association) => {
        return {
          category_id: association.technology.category_id,
          color: association.technology.color,
          description_id: association.technology.description_id,
          id: association.technology.id,
          logo: association.technology.logo,
          name: association.technology.name,
        };
      }),
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
          href: `/api/logos/gif/${project.gif}`,
        },
        description: {
          method: 'GET',
          href: `/api/texts/${project.description_id}`,
        },
      },
    } as CompleteProjectFromApi;
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
        href: `/api/logos/gif/${project.gif}`,
      },
      description: {
        method: 'GET',
        href: `/api/texts/${project.description_id}`,
      },
    },
  } as ProjectFromApi;
};

export default formatProjectForApi;
