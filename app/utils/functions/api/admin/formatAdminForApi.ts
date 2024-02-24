import {Admin, AdminFromDatabase} from '@schemas/api/admin/admin.schema';

/**
 * Format an admin for the api return
 *
 * @param {AdminFromDatabase} admin the admin to format
 *
 * @returns {Admin} the formatted admin
 */
const formatAdminForApi = (admin: AdminFromDatabase): Admin => {
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
  };
};

export default formatAdminForApi;
