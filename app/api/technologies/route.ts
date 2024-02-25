import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {
  TechnologyFromApi,
  TechnologyFromDatabase,
  TechnologyUpsert,
  technologyUpsertValidator,
} from '@schemas/api/technology/technology.schema';
import formatTechnologyForApi from '@functions/api/technology/formatTechnologyForApi';
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
    const technologies: TechnologyFromDatabase[] = await prisma.technology.findMany();

    const technologiesToReturn: TechnologyFromApi[] = technologies.map((technology: TechnologyFromDatabase) => {
      return formatTechnologyForApi(technology) as TechnologyFromApi;
    });

    return sendCollectionResponse<TechnologyFromApi>(technologiesToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Create a new technology
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the created technology in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: TechnologyUpsert = await technologyUpsertValidator.validate(body);

    const createdTechnology: TechnologyFromDatabase = await prisma.technology.create({
      data: {
        category: {
          connect: {
            id: parsedBody.category_id,
          },
        },
        color: parsedBody.color,
        description: {
          create: {
            english: parsedBody.description.english,
            french: parsedBody.description.french,
          },
        },
        logo: parsedBody.logo,
        name: parsedBody.name,
      },
    });

    const technologyToReturn: TechnologyFromApi = formatTechnologyForApi(createdTechnology) as TechnologyFromApi;

    return sendJsonResponse<TechnologyFromApi>(technologyToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
