export const isImageBase64 = async (base64String: string): Promise<Boolean> => {
  const knownTypes = {
    '/': 'data:image/jpg;base64,',
    i: 'data:image/png;base64,',
    /* ETC */
  };

  const image = new Image();

  if (!knownTypes[base64String[0]]) {
    // encoded image didn't match known types
    return false;
  }
  image.src = knownTypes[0] + base64String;
  return new Promise((resolve) => {
    image.onload = function onloadImage() {
      if (image.height === 0 || image.width === 0) {
        resolve(false);
        return;
      }
      resolve(true);
    };
    image.onerror = () => {
      resolve(false);
    };
  });
};
