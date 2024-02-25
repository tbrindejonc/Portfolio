import sendErrorResponse from '@functions/api/sendErrorResponse';
import {ApiLinkParams, ApiParams} from '@appTypes/api';
import {prisma} from '@utils/prisma/client';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {HTTP_CREATED} from '@constants/api';
import {ExperienceTechnologyAssociation} from '@schemas/api/experience/experience.schema';

/**
 * Link a technology to an experience
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the link in json format
 */
export async function POST(request: Request, apiParams: ApiLinkParams): Promise<Response> {
  try {
    const linkedTechnology = await prisma.experience_Technology.create({
      data: {
        experience_id: parseInt(apiParams.params.id),
        technology_id: parseInt(apiParams.params.tech_id),
      },
    });

    const formattedResponse: ExperienceTechnologyAssociation = {
      experience_id: linkedTechnology.experience_id,
      technology_id: linkedTechnology.technology_id,
      links: {
        experience: {
          href: `/api/experiences/${linkedTechnology.experience_id}`,
          method: 'GET',
        },
        technology: {
          href: `/api/technologies/${linkedTechnology.technology_id}`,
          method: 'GET',
        },
      },
    };

    return sendJsonResponse<ExperienceTechnologyAssociation>(formattedResponse, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
