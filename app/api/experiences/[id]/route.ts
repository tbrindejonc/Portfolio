import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {
  CompleteExperienceFromApi,
  CompleteExperienceFromDatabase,
  ExperienceFromApi,
  ExperienceFromDatabase,
  ExperienceUpsert,
  experienceUpsertValidator,
  ExperienceWhenDeleted,
} from '@schemas/api/experience/experience.schema';
import formatExperienceForApi from '@functions/api/experience/formatExperienceForApi';

/**
 * Get an experience by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the experience in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const {searchParams} = new URL(request.url);
    const fullContent = searchParams.get('fullContent');

    const experience: ExperienceFromDatabase | CompleteExperienceFromDatabase | null =
      await prisma.experience.findUnique({
        where: {
          id: parseInt(apiParams.params.id),
        },
        include: {
          description: !!fullContent,
          job_title: !!fullContent,
          job_description: !!fullContent,
          Experience_Technologies: {
            include: {
              technology: !!fullContent,
            },
          },
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

    const experienceToReturn: ExperienceFromApi | CompleteExperienceFromApi = formatExperienceForApi(
      experience,
      false,
      !!fullContent,
    ) as ExperienceFromApi | CompleteExperienceFromApi;

    return sendJsonResponse<ExperienceFromApi | CompleteExperienceFromApi>(experienceToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Update an experience by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the updated experience in json format
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: ExperienceUpsert = await experienceUpsertValidator.validate(body);

    const updatedExperience: ExperienceFromDatabase = await prisma.experience.update({
      where: {
        id: parseInt(apiParams.params.id),
      },
      data: {
        company: parsedBody.company,
        description: {
          update: {
            english: parsedBody.description.english,
            french: parsedBody.description.french,
          },
        },
        end_date: parsedBody.end_date,
        job_title: {
          update: {
            english: parsedBody.job_title.english,
            french: parsedBody.job_title.french,
          },
        },
        job_description: {
          update: {
            english: parsedBody.job_description.english,
            french: parsedBody.job_description.french,
          },
        },
        logo: parsedBody.logo,
        start_date: parsedBody.start_date,
      },
    });

    const experienceToReturn: ExperienceFromApi = formatExperienceForApi(updatedExperience) as ExperienceFromApi;

    return sendJsonResponse<ExperienceFromApi>(experienceToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Delete an experience by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the deleted experience in json format
 */
export async function DELETE(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const deletedExperience: ExperienceFromDatabase = await prisma.experience.delete({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    const experienceToReturn: ExperienceWhenDeleted = formatExperienceForApi(
      deletedExperience,
      true,
    ) as ExperienceWhenDeleted;

    return sendJsonResponse<ExperienceWhenDeleted>(experienceToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
