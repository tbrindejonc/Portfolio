/**
 * Send a response in json format
 *
 * @param data the data object to send
 * @param code the http status code of the response
 */
const sendJsonResponse = (data: Object, code: number) => {
  return Response.json(data, {status: code});
};

export default sendJsonResponse;
