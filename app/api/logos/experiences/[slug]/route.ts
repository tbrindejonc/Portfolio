import {ApiError, ApiLogoParams} from '@appTypes/api';
import checkIsImage from '@functions/api/checkIsImage';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {
  HTTP_NOT_FOUND,
  HTTP_SERVER_ERROR,
  LOGO_EXPERIENCE_PATH,
  MSG_INVALID_IMAGE,
  MSG_NOT_FOUND,
} from '@constants/api';
import * as fs from 'node:fs';
import sendLogoResponse from '@functions/api/sendLogoResponse';
import sendErrorResponse from '@functions/api/sendErrorResponse';

/**
 * Get the gif image for project
 *
 * @param {Request} request the request data object
 * @param {ApiLogoParams} apiParams the request parameters
 *
 * @returns {Response} the gif image of the project
 */
export function GET(request: Request, apiParams: ApiLogoParams): Response {
  try {
    if (!checkIsImage(apiParams.params.slug)) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_SERVER_ERROR,
            message: MSG_INVALID_IMAGE,
            details: `Image name ${apiParams.params.slug} is not a valid image name.`,
          },
        },
        HTTP_SERVER_ERROR,
      );
    }

    const imagePath = `${LOGO_EXPERIENCE_PATH}${apiParams.params.slug}`;

    if (!fs.existsSync(imagePath)) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: {
              file: apiParams.params.slug,
              message: `The file ${apiParams.params.slug} does not exist.`,
            },
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    return sendLogoResponse(imagePath);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
