import {CategoryFromApi, CategoryFromDatabase, CategoryWhenDeleted} from '@schemas/api/category/category.schema';

/**
 * Format a category for the api return
 *
 * @param {CategoryFromDatabase} category the category to format
 * @param {boolean} isDeleted if the category is deleted
 *
 * @returns {CategoryFromApi | CategoryWhenDeleted} the formatted category
 */
const formatCategoryForApi = (
  category: CategoryFromDatabase,
  isDeleted: boolean = false,
): CategoryFromApi | CategoryWhenDeleted => {
  if (isDeleted) {
    return {
      id: category.id,
      logo: category.logo,
      name_id: category.name_id,
    } as CategoryWhenDeleted;
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
