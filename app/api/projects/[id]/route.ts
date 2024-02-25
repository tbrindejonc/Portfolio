import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {ProjectFromApi, ProjectFromDatabase} from '@schemas/api/project/project.schema';
import formatProjectForApi from '@functions/api/project/formatProjectForApi';

/**
 * Get a project by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the project in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const project: ProjectFromDatabase | null = await prisma.project.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    if (!project) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Project with id ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    const projectToReturn: ProjectFromApi = formatProjectForApi(project) as ProjectFromApi;

    return sendJsonResponse<ProjectFromApi>(projectToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
