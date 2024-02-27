import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {
  CompleteProjectFromApi,
  CompleteProjectFromDatabase,
  ProjectFromApi,
  ProjectFromDatabase,
  ProjectUpsert,
  projectUpsertValidator,
  ProjectWhenDeleted,
} from '@schemas/api/project/project.schema';
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
    const {searchParams} = new URL(request.url);
    const fullContent = searchParams.get('fullContent');

    const project: ProjectFromDatabase | CompleteProjectFromDatabase | null = await prisma.project.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
      include: {
        description: !!fullContent,
        Project_Technologies: {
          include: {
            technology: !!fullContent,
          },
        },
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

    const projectToReturn: ProjectFromApi | CompleteProjectFromApi = formatProjectForApi(
      project,
      false,
      !!fullContent,
    ) as ProjectFromApi | CompleteProjectFromApi;

    return sendJsonResponse<ProjectFromApi | CompleteProjectFromApi>(projectToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Update a project by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the updated project in json format
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: ProjectUpsert = await projectUpsertValidator.validate(body);

    const updatedProject: ProjectFromDatabase = await prisma.project.update({
      where: {
        id: parseInt(apiParams.params.id),
      },
      data: {
        description: {
          update: {
            english: parsedBody.description.english,
            french: parsedBody.description.french,
          },
        },
        gif: parsedBody.gif,
        github: parsedBody.github,
        live_version: parsedBody.live_version,
        name: parsedBody.name,
      },
    });

    const projectToReturn: ProjectFromApi = formatProjectForApi(updatedProject) as ProjectFromApi;

    return sendJsonResponse<ProjectFromApi>(projectToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Delete a project by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the deleted project in json format
 */
export async function DELETE(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const deletedProject: ProjectFromDatabase = await prisma.project.delete({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    const projectToReturn: ProjectWhenDeleted = formatProjectForApi(deletedProject, true) as ProjectWhenDeleted;

    return sendJsonResponse<ProjectWhenDeleted>(projectToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
