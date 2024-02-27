import {
  CategoryFromApi,
  CategoryFromDatabase,
  CategoryWhenDeleted,
  CompleteCategoryFromApi,
  CompleteCategoryFromDatabase,
} from '@schemas/api/category/category.schema';

/**
 * Format a category for the api return
 *
 * @param {CategoryFromDatabase | CompleteCategoryFromDatabase} category the category to format
 * @param {boolean} isDeleted if the category is deleted
 * @param {boolean} isFull if the category is complete
 *
 * @returns {CategoryFromApi | CategoryWhenDeleted | CompleteCategoryFromApi} the formatted category
 */
const formatCategoryForApi = (
  category: CategoryFromDatabase | CompleteCategoryFromDatabase,
  isDeleted: boolean = false,
  isFull: boolean = false,
): CategoryFromApi | CategoryWhenDeleted | CompleteCategoryFromApi => {
  if (isDeleted) {
    return {
      id: category.id,
      logo: category.logo,
      name_id: category.name_id,
    } as CategoryWhenDeleted;
  }

  if (isFull && 'name' in category) {
    return {
      id: category.id,
      logo: category.logo,
      name: {
        english: category.name.english,
        french: category.name.french,
        id: category.name_id,
      },
      technologies: category.technologies.map((technology) => {
        return {
          id: technology.id,
          name: technology.name,
          logo: technology.logo,
          color: technology.color,
          description: {
            english: technology.description.english,
            french: technology.description.french,
            id: technology.description.id,
          },
        };
      }),
      links: {
        self: {
          method: 'GET',
          href: `/api/categories/${category.id}`,
        },
        update: {
          method: 'PUT',
          href: `/api/categories/${category.id}`,
        },
        delete: {
          method: 'DELETE',
          href: `/api/categories/${category.id}`,
        },
        name: {
          method: 'GET',
          href: `/api/texts/${category.name_id}`,
        },
      },
    } as CompleteCategoryFromApi;
  }

  return {
    id: category.id,
    logo: category.logo,
    name_id: category.name_id,
    links: {
      self: {
        method: 'GET',
        href: `/api/categories/${category.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/categories/${category.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/categories/${category.id}`,
      },
      name: {
        method: 'GET',
        href: `/api/texts/${category.name_id}`,
      },
    },
  } as CategoryFromApi;
};

export default formatCategoryForApi;
