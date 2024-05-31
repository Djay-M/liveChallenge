exports.encodeString = async (url) => {
  const newUrl = url.split("www.")[1];
  const encodeUrl = newUrl ? newUrl.split("/")[0] : newUrl;
  return encodeUrl;
};
