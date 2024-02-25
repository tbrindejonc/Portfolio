import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {TextFromApi, TextFromDatabase} from '@schemas/api/text/text.schema';
import formatTextForApi from '@functions/api/text/formatTextForApi';

/**
 * Get all texts
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the collection of texts in json format
 */
export async function GET(request: Request): Promise<Response> {
  try {
    const texts: TextFromDatabase[] = await prisma.text.findMany();

    const textsToReturn: TextFromApi[] = texts.map((text: TextFromDatabase) => {
      return formatTextForApi(text) as TextFromApi;
    });

    return sendCollectionResponse<TextFromApi>(textsToReturn);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
