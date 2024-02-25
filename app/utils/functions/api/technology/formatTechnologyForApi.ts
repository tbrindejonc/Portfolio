import {
  TechnologyFromApi,
  TechnologyFromDatabase,
  TechnologyWhenDeleted,
} from '@schemas/api/technology/technology.schema';

/**
 * Format a technology for the api return
 *
 * @param {TechnologyFromDatabase} technology the technology to format
 * @param {boolean} isDeleted if the technology is deleted
 *
 * @returns {TechnologyFromApi | TechnologyWhenDeleted} the formatted technology
 */
const formatTechnologyForApi = (
  technology: TechnologyFromDatabase,
  isDeleted: boolean = false,
): TechnologyFromApi | TechnologyWhenDeleted => {
  if (isDeleted) {
    return {
      category_id: technology.category_id,
      color: technology.color,
      description_id: technology.description_id,
      id: technology.id,
      logo: technology.logo,
      name: technology.name,
    } as TechnologyWhenDeleted;
  }

  return {
    category_id: technology.category_id,
    color: technology.color,
    description_id: technology.description_id,
    id: technology.id,
    logo: technology.logo,
    name: technology.name,
    links: {
      self: {
        method: 'GET',
        href: `/api/categories/${technology.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/categories/${technology.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/categories/${technology.id}`,
      },
      category: {
        method: 'GET',
        href: `/api/categories/${technology.category_id}`,
      },
      description: {
        method: 'GET',
        href: `/api/texts/${technology.description_id}`,
      },
    },
  } as TechnologyFromApi;
};

export default formatTechnologyForApi;
