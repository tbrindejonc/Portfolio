import {ApiError} from '@appTypes/api';
import {HTTP_SCHEMA_ERROR, HTTP_SERVER_ERROR, MSG_DUPLICATE_ERROR, MSG_SERVER_ERROR} from '@constants/api';

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

  // if the error is a duplicate error
  if (error.code === 'P2002') {
    apiError.error.message = MSG_DUPLICATE_ERROR;
    apiError.error.details = {
      field: error.meta!.target[0],
      message: `A record for the ${error.meta!.modelName} table with this ${error.meta!.target} value already exists`,
    };
  }

  // if the error is a schema validation error
  if (error.status === HTTP_SCHEMA_ERROR) {
    apiError.error.code = HTTP_SCHEMA_ERROR;
    apiError.error.details = error.messages;
  }

  return Response.json(apiError, {status: HTTP_SERVER_ERROR});
};

export default sendErrorResponse;
