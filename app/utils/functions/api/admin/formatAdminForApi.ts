import {Admin, AdminFromDatabase, AdminWhenDeleted} from '@schemas/api/admin/admin.schema';

/**
 * Format an admin for the api return
 *
 * @param {AdminFromDatabase} admin the admin to format
 * @param {boolean} isDeleted if the admin is deleted
 *
 * @returns {Admin | AdminWhenDeleted} the formatted admin
 */
const formatAdminForApi = (admin: AdminFromDatabase, isDeleted: boolean = false): Admin | AdminWhenDeleted => {
  if (isDeleted) {
    return {
      email: admin.email,
      id: admin.id,
    } as AdminWhenDeleted;
  }

  return {
    email: admin.email,
    id: admin.id,
    links: {
      self: {
        method: 'GET',
        href: `/api/admins/${admin.id}`,
      },
      update: {
        method: 'PUT',
        href: `/api/admins/${admin.id}`,
      },
      delete: {
        method: 'DELETE',
        href: `/api/admins/${admin.id}`,
      },
    },
  } as Admin;
};

export default formatAdminForApi;
