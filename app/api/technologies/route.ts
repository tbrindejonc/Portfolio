import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {TechnologyFromApi, TechnologyFromDatabase} from '@schemas/api/technology/technology.schema';
import formatTechnologyForApi from '@functions/api/technology/formatTechnologyForApi';

/**
 * Get all technologies
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the collection of technologies in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const technologies: TechnologyFromDatabase[] = await prisma.technology.findMany();

    const technologiesToReturn: TechnologyFromApi[] = technologies.map((technology: TechnologyFromDatabase) => {
      return formatTechnologyForApi(technology) as TechnologyFromApi;
    });

    return sendCollectionResponse<TechnologyFromApi>(technologiesToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
