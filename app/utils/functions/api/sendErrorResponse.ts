import {ApiError} from '@appTypes/api';
import {HTTP_OK as HTTP_SERVER_ERROR, MSG_SERVER_ERROR} from '@constants/api';

/**
 * Construct and send an error response
 *
 * @param error the error object
 *
 * @returns the error response in json format
 */
const sendErrorResponse = (error: any) => {
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
