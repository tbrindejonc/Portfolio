import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {
  ExperienceFromApi,
  ExperienceFromDatabase,
  ExperienceUpsert,
  experienceUpsertValidator,
} from '@schemas/api/experience/experience.schema';
import formatExperienceForApi from '@functions/api/experience/formatExperienceForApi';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {HTTP_CREATED} from '@constants/api';

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

/**
 * Create a new experience
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the created experience in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: ExperienceUpsert = await experienceUpsertValidator.validate(body);

    const createdExperience: ExperienceFromDatabase = await prisma.experience.create({
      data: {
        company: parsedBody.company,
        description: {
          create: {
            english: parsedBody.description.english,
            french: parsedBody.description.french,
          },
        },
        end_date: parsedBody.end_date,
        job_title: {
          create: {
            english: parsedBody.job_title.english,
            french: parsedBody.job_title.french,
          },
        },
        job_description: {
          create: {
            english: parsedBody.job_description.english,
            french: parsedBody.job_description.french,
          },
        },
        logo: parsedBody.logo,
        start_date: parsedBody.start_date,
      },
    });

    const experienceToReturn: ExperienceFromApi = formatExperienceForApi(createdExperience) as ExperienceFromApi;

    return sendJsonResponse<ExperienceFromApi>(experienceToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
