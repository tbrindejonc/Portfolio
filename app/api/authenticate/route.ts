import sendErrorResponse from '@functions/api/sendErrorResponse';
import {Credentials, credentialsValidator} from '@schemas/api/admin/credentials.schema';
import {prisma} from '@utils/prisma/client';
import {AdminFromDatabase} from '@schemas/api/admin/admin.schema';
import {AdminJWT, ApiError} from '@appTypes/api';
import {HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK, MSG_INCORRECT_PASSWORD, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import validatePassword from '@functions/bcrypt/validatePassword';
import createJwt from '@functions/jwt/createJwt';

/**
 * Authenticate an admin
 *
 * @param {Request} request the request data object
 *
 * @returns {Promise<Response>} a promise containing the jwt in json format
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Credentials = await credentialsValidator.validate(body);

    const adminToAuthenticate: AdminFromDatabase | null = await prisma.admin.findUnique({
      where: {
        email: parsedBody.email,
      },
    });

    if (!adminToAuthenticate) {
      const error: ApiError = {
        error: {
          code: HTTP_NOT_FOUND,
          message: MSG_NOT_FOUND,
          details: `Admin with email ${parsedBody.email} not found`,
        },
      };

      return sendJsonResponse<ApiError>(error, HTTP_NOT_FOUND);
    }

    const isPasswordCorrect: boolean = await validatePassword(parsedBody.password, adminToAuthenticate.password);

    if (!isPasswordCorrect) {
      const error: ApiError = {
        error: {
          code: HTTP_BAD_REQUEST,
          message: MSG_INCORRECT_PASSWORD,
          details: '',
        },
      };

      return sendJsonResponse<ApiError>(error, HTTP_BAD_REQUEST);
    }

    const jwt: string = await createJwt(adminToAuthenticate);

    return sendJsonResponse<AdminJWT>({token: jwt}, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
