import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {TechnologyFromApi, TechnologyFromDatabase} from '@schemas/api/technology/technology.schema';
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
    const technology: TechnologyFromDatabase | null = await prisma.technology.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
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

    const technologyToReturn: TechnologyFromApi = formatTechnologyForApi(technology) as TechnologyFromApi;

    return sendJsonResponse<TechnologyFromApi>(technologyToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
