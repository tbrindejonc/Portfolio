import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {
  CompleteTechnologyFromApi,
  CompleteTechnologyFromDatabase,
  TechnologyFromApi,
  TechnologyFromDatabase,
  TechnologyUpsert,
  technologyUpsertValidator,
  TechnologyWhenDeleted,
} from '@schemas/api/technology/technology.schema';
import formatTechnologyForApi from '@functions/api/technology/formatTechnologyForApi';

/**
 * Get a technology by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the technology in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const {searchParams} = new URL(request.url);
    const fullContent = searchParams.get('fullContent');

    const technology: TechnologyFromDatabase | CompleteTechnologyFromDatabase | null =
      await prisma.technology.findUnique({
        where: {
          id: parseInt(apiParams.params.id),
        },
        include: {
          category: {
            include: {
              name: !!fullContent,
            },
          },
          description: !!fullContent,
        },
      });

    if (!technology) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Technology with id ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    const technologyToReturn: TechnologyFromApi | CompleteTechnologyFromApi = formatTechnologyForApi(
      technology,
      false,
      !!fullContent,
    ) as TechnologyFromApi;

    return sendJsonResponse<TechnologyFromApi | CompleteTechnologyFromApi>(technologyToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Update a technology by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the updated technology in json format
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: TechnologyUpsert = await technologyUpsertValidator.validate(body);

    const updatedTechnology: TechnologyFromDatabase = await prisma.technology.update({
      where: {
        id: parseInt(apiParams.params.id),
      },
      data: {
        category: {
          connect: {
            id: parsedBody.category_id,
          },
        },
        color: parsedBody.color,
        description: {
          update: {
            english: parsedBody.description.english,
            french: parsedBody.description.french,
          },
        },
        logo: parsedBody.logo,
        name: parsedBody.name,
        website: parsedBody.website,
      },
    });

    const technologyToReturn: TechnologyFromApi = formatTechnologyForApi(updatedTechnology) as TechnologyFromApi;

    return sendJsonResponse<TechnologyFromApi>(technologyToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Delete a technology by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the deleted technology in json format
 */
export async function DELETE(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const deletedTechnology: TechnologyFromDatabase = await prisma.technology.delete({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    const technologyToReturn: TechnologyWhenDeleted = formatTechnologyForApi(
      deletedTechnology,
      true,
    ) as TechnologyWhenDeleted;

    return sendJsonResponse<TechnologyWhenDeleted>(technologyToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
