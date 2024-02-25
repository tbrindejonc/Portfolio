import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {ExperienceFromApi, ExperienceFromDatabase} from '@schemas/api/experience/experience.schema';
import formatExperienceForApi from '@functions/api/experience/formatExperienceForApi';

/**
 * Get a experience by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the experience in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const experience: ExperienceFromDatabase | null = await prisma.experience.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    if (!experience) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Experience with id ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    const experienceToReturn: ExperienceFromApi = formatExperienceForApi(experience) as ExperienceFromApi;

    return sendJsonResponse<ExperienceFromApi>(experienceToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
