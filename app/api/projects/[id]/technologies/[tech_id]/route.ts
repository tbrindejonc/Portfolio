import sendErrorResponse from '@functions/api/sendErrorResponse';
import {ApiLinkParams} from '@appTypes/api';
import {prisma} from '@utils/prisma/client';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {HTTP_CREATED} from '@constants/api';
import {ProjectTechnologyAssociation} from '@schemas/api/project/project.schema';

/**
 * Link a technology to a project
 *
 * @param {Request} request the request data object
 * @param {ApiLinkParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the link in json format
 */
export async function POST(request: Request, apiParams: ApiLinkParams): Promise<Response> {
  try {
    const linkedTechnology = await prisma.project_Technology.create({
      data: {
        project_id: parseInt(apiParams.params.id),
        technology_id: parseInt(apiParams.params.tech_id),
      },
    });

    const formattedResponse: ProjectTechnologyAssociation = {
      project_id: linkedTechnology.project_id,
      technology_id: linkedTechnology.technology_id,
      links: {
        project: {
          href: `/api/projects/${linkedTechnology.project_id}`,
          method: 'GET',
        },
        technology: {
          href: `/api/technologies/${linkedTechnology.technology_id}`,
          method: 'GET',
        },
      },
    };

    return sendJsonResponse<ProjectTechnologyAssociation>(formattedResponse, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
