import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {CategoryFromApi, CategoryFromDatabase} from '@schemas/api/category/category.schema';
import formatCategoryForApi from '@functions/api/category/formatCategoryForApi';

/**
 * Get a category by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the category in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const category: CategoryFromDatabase | null = await prisma.category.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    if (!category) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Category with id ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    const categoryToReturn: CategoryFromApi = formatCategoryForApi(category) as CategoryFromApi;

    return sendJsonResponse<CategoryFromApi>(categoryToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
