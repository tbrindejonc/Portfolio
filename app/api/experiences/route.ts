import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {ExperienceFromApi, ExperienceFromDatabase} from '@schemas/api/experience/experience.schema';
import formatExperienceForApi from '@functions/api/experience/formatExperienceForApi';

/**
 * Get all experiences
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the collection of experiences in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const experiences: ExperienceFromDatabase[] = await prisma.experience.findMany();

    const experiencesToReturn: ExperienceFromApi[] = experiences.map((experience: ExperienceFromDatabase) => {
      return formatExperienceForApi(experience) as ExperienceFromApi;
    });

    return sendCollectionResponse<ExperienceFromApi>(experiencesToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
