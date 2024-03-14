/**
 * Check if the provided name is a valid image name
 *
 * @param {string} imageName the name of the image
 *
 * @returns {boolean} true if the name is a valid image name, false otherwise
 */
const checkIsImage = (imageName: string): boolean => {
  const regex = /\.(jpg|jpeg|png|gif)$/i;
  return regex.test(imageName);
};

export default checkIsImage;
