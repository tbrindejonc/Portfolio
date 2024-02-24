/* -------------------------------------------------------------------------- */
/*                            HTTP Response codes                             */
/* -------------------------------------------------------------------------- */

// request successful
export const HTTP_OK = 200;

// resource created
export const HTTP_CREATED = 201;

// resource not found
export const HTTP_NOT_FOUND = 404;

// schema validation failed
export const HTTP_SCHEMA_ERROR = 422;

// any server error
export const HTTP_SERVER_ERROR = 500;

/* -------------------------------------------------------------------------- */
/*                           Error Response messages                          */
/* -------------------------------------------------------------------------- */

// any server error
export const MSG_SERVER_ERROR = 'Internal server error';

// resource is duplicated
export const MSG_DUPLICATE_ERROR = 'Duplicate error';
