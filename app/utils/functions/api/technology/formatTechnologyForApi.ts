import {
  CompleteTechnologyFromApi,
  CompleteTechnologyFromDatabase,
  TechnologyFromApi,
  TechnologyFromDatabase,
  TechnologyWhenDeleted,
} from '@schemas/api/technology/technology.schema';

/**
 * Format a technology for the api return
 *
 * @param {TechnologyFromDatabase | CompleteTechnologyFromDatabase} technology the technology to format
 * @param {boolean} isDeleted if the technology is deleted
 * @param {boolean} isFull if the technology is complete
 *
 * @returns {TechnologyFromApi | TechnologyWhenDeleted | CompleteTechnologyFromApi} the formatted technology
 */
const formatTechnologyForApi = (
  technology: TechnologyFromDatabase | CompleteTechnologyFromDatabase,
  isDeleted: boolean = false,
  isFull: boolean = false,
): TechnologyFromApi | TechnologyWhenDeleted | CompleteTechnologyFromApi => {
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

  if (isFull && 'description' in technology) {
    return {
      category: {
        id: technology.category.id,
        logo: technology.category.logo,
        name: {
          english: technology.category.name.english,
          french: technology.category.name.french,
          id: technology.category.id,
        },
      },
      color: technology.color,
      description: {
        english: technology.description.english,
        french: technology.description.french,
        id: technology.description.id,
      },
      id: technology.id,
      logo: technology.logo,
      name: technology.name,
      links: {
        self: {
          method: 'GET',
          href: `/api/technologies/${technology.id}`,
        },
        update: {
          method: 'PUT',
          href: `/api/technologies/${technology.id}`,
        },
        delete: {
          method: 'DELETE',
          href: `/api/technologies/${technology.id}`,
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
    } as CompleteTechnologyFromApi;
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
        href: `/api/technologies/${technology.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/technologies/${technology.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/technologies/${technology.id}`,
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
