import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {
  CategoryFromApi,
  CategoryFromDatabase,
  CategoryUpsert,
  categoryUpsertValidator,
  CategoryWhenDeleted,
  CompleteCategoryFromApi,
  CompleteCategoryFromDatabase,
} from '@schemas/api/category/category.schema';
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
    const {searchParams} = new URL(request.url);
    const fullContent = searchParams.get('fullContent');

    const category: CategoryFromDatabase | CompleteCategoryFromDatabase | null = await prisma.category.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
      include: {
        name: !!fullContent,
        technologies: {
          include: {
            description: !!fullContent,
          },
        },
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

    const categoryToReturn: CategoryFromApi | CompleteCategoryFromApi = formatCategoryForApi(
      category,
      false,
      !!fullContent,
    ) as CategoryFromApi | CompleteCategoryFromApi;

    return sendJsonResponse<CategoryFromApi | CompleteCategoryFromApi>(categoryToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Update a category by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the updated category in json format
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: CategoryUpsert = await categoryUpsertValidator.validate(body);

    const updatedCategory: CategoryFromDatabase = await prisma.category.update({
      where: {
        id: parseInt(apiParams.params.id),
      },
      data: {
        logo: parsedBody.logo,
        name: {
          update: {
            english: parsedBody.name.english,
            french: parsedBody.name.french,
          },
        },
      },
    });

    const categoryToReturn: CategoryFromApi = formatCategoryForApi(updatedCategory) as CategoryFromApi;

    return sendJsonResponse<CategoryFromApi>(categoryToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Delete a category by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the deleted category in json format
 */
export async function DELETE(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const deletedCategory: CategoryFromDatabase = await prisma.category.delete({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    const categoryToReturn: CategoryWhenDeleted = formatCategoryForApi(deletedCategory, true) as CategoryWhenDeleted;

    return sendJsonResponse<CategoryWhenDeleted>(categoryToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
