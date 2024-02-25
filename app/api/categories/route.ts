import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {CategoryFromApi, CategoryFromDatabase} from '@schemas/api/category/category.schema';
import formatCategoryForApi from '@functions/api/category/formatCategoryForApi';

/**
 * Get all categories
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the collection of categories in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const categories: CategoryFromDatabase[] = await prisma.category.findMany();

    const categoriesToReturn: CategoryFromApi[] = categories.map((category: CategoryFromDatabase) => {
      return formatCategoryForApi(category) as CategoryFromApi;
    });

    return sendCollectionResponse<CategoryFromApi>(categoriesToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
