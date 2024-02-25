import sendErrorResponse from '@functions/api/sendErrorResponse';
import formatAdminForApi from '@functions/api/admin/formatAdminForApi';
import {Admin, AdminFromDatabase} from '@schemas/api/admin/admin.schema';
import {prisma} from '@utils/prisma/client';
import {ApiError, ApiParams} from '@appTypes/api';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@constants/api';
import sendJsonResponse from '@functions/api/sendJsonResponse';
import {Credentials, credentialsValidator} from '@schemas/api/admin/credentials.schema';
import encryptPassword from '@functions/bcrypt/encryptPassword';

/**
 * Get an admin by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the admin in json format
 */
export async function GET(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const admin: AdminFromDatabase | null = await prisma.admin.findUnique({
      where: {
        id: parseInt(apiParams.params.id),
      },
    });

    if (!admin) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Admin with id ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    const adminToReturn: Admin = formatAdminForApi(admin);

    return sendJsonResponse<Admin>(adminToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}

/**
 * Update an admin by id
 *
 * @param {Request} request the request data object
 * @param {ApiParams} apiParams the request parameters
 *
 * @returns {Promise<Response>} a promise containing the updated admin in json format
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Credentials = await credentialsValidator.validate(body);

    const newPassword: string = await encryptPassword(parsedBody.password);

    const updatedAdmin: AdminFromDatabase = await prisma.admin.update({
      where: {
        id: parseInt(apiParams.params.id),
      },
      data: {
        password: newPassword,
      },
    });

    const adminToReturn: Admin = formatAdminForApi(updatedAdmin);

    return sendJsonResponse<Admin>(adminToReturn, HTTP_OK);
  } catch (error: any) {
    return sendErrorResponse(error);
  }
}
