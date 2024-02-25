import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {
  CategoryFromApi,
  CategoryFromDatabase,
  CategoryUpsert,
  categoryUpsertValidator,
} from '@schemas/api/category/category.schema';
import formatCategoryForApi from '@functions/api/category/formatCategoryForApi';
import {HTTP_CREATED} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';

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

/**
 * Create a new category
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the created category in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: CategoryUpsert = await categoryUpsertValidator.validate(body);

    const createdCategory: CategoryFromDatabase = await prisma.category.create({
      data: {
        logo: parsedBody.logo,
        name: {
          create: {
            english: parsedBody.name.english,
            french: parsedBody.name.french,
          },
        },
      },
    });

    const categoryToReturn: CategoryFromApi = formatCategoryForApi(createdCategory) as CategoryFromApi;

    return sendJsonResponse<CategoryFromApi>(categoryToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
