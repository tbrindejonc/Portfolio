import sendErrorResponse from '@functions/api/sendErrorResponse';
import {prisma} from '@utils/prisma/client';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {ApiError, ApiParams} from '@appTypes/api';
import {Text, TextFromApi, TextFromDatabase, textValidator} from '@schemas/api/text/text.schema';
import formatTextForApi from '@functions/api/text/formatTextForApi';

/**
 * Get a text by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the text in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const text: TextFromDatabase | null = await prisma.text.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    if (!text) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `text with id ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    const textToReturn: TextFromApi = formatTextForApi(text) as TextFromApi;

    return sendJsonResponse<TextFromApi>(textToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Update a text by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the updated text in json format
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Text = await textValidator.validate(body);

    const updatedText: TextFromDatabase = await prisma.text.update({
      where: {
        id: parseInt(apiParams.params.id),
      },
      data: {
        english: parsedBody.english,
        french: parsedBody.french,
      },
    });

    const textToReturn: TextFromApi = formatTextForApi(updatedText) as TextFromApi;

    return sendJsonResponse<TextFromApi>(textToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
