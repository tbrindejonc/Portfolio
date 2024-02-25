import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import sendCollectionResponse from '@functions/api/sendCollectionResponse';
import {Text, TextFromApi, TextFromDatabase, textValidator} from '@schemas/api/text/text.schema';
import formatTextForApi from '@functions/api/text/formatTextForApi';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {HTTP_CREATED} from '@constants/api';

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

/**
 * Create a new text
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the created text in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Text = await textValidator.validate(body);

    const createdText: TextFromDatabase = await prisma.text.create({
      data: {
        english: parsedBody.english,
        french: parsedBody.french,
      },
    });

    const textToReturn: TextFromApi = formatTextForApi(createdText) as TextFromApi;

    return sendJsonResponse<TextFromApi>(textToReturn, HTTP_CREATED);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
