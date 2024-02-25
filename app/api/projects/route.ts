import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {ProjectFromApi, ProjectFromDatabase} from '@schemas/api/project/project.schema';
import formatProjectForApi from '@functions/api/project/formatProjectForApi';

/**
 * Get all technologies
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the collection of technologies in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const technologies: ProjectFromDatabase[] = await prisma.project.findMany();

    const technologiesToReturn: ProjectFromApi[] = technologies.map((project: ProjectFromDatabase) => {
      return formatProjectForApi(project) as ProjectFromApi;
    });

    return sendCollectionResponse<ProjectFromApi>(technologiesToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
