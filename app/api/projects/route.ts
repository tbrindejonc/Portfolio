import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {
  ProjectFromApi,
  ProjectFromDatabase,
  ProjectUpsert,
  projectUpsertValidator,
} from '@schemas/api/project/project.schema';
import formatProjectForApi from '@functions/api/project/formatProjectForApi';
import {HTTP_CREATED} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';

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

/**
 * Create a new project
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the created project in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: ProjectUpsert = await projectUpsertValidator.validate(body);

    const createdProject: ProjectFromDatabase = await prisma.project.create({
      data: {
        description: {
          create: {
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

    const projectToReturn: ProjectFromApi = formatProjectForApi(createdProject) as ProjectFromApi;

    return sendJsonResponse<ProjectFromApi>(projectToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
