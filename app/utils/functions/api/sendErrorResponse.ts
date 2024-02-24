import {ApiError} from '@appTypes/api';
import {HTTP_SERVER_ERROR, MSG_SERVER_ERROR} from '@constants/api';

/**
 * Construct and send an error response
 *
 * @param {any} error the error object
 *
 * @returns {Response} the error response in json format
 */
const sendErrorResponse = (error: any): Response => {
  const apiError: ApiError = {
    error: {
      code: HTTP_SERVER_ERROR,
      message: MSG_SERVER_ERROR,
      details: error,
    },
  };

  return Response.json(apiError, {status: HTTP_SERVER_ERROR});
};

export default sendErrorResponse;
