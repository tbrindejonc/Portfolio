import {ApiError} from '@appTypes/api';
import {HTTP_SERVER_ERROR, MSG_DUPLICATE_ERROR, MSG_SERVER_ERROR} from '@constants/api';

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

  // si l'erreur concerne un enregistrement déjà existant
  if (error.code === 'P2002') {
    apiError.error.message = MSG_DUPLICATE_ERROR;
    apiError.error.details = {
      field: error.meta!.target[0],
      message: `A record for the ${error.meta!.modelName} table with the ${error.meta!.target} value already exists`,
    };
  }

  return Response.json(apiError, {status: HTTP_SERVER_ERROR});
};

export default sendErrorResponse;
