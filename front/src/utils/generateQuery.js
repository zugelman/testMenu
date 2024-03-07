export const generateQuery = (queryObj) => {
  if (!queryObj) {
    return '';
  }
  const keysMap = Object.keys(queryObj).map((key) => `${key}=${queryObj[key]}`);

  return `?${keysMap.join('&')}`;
};