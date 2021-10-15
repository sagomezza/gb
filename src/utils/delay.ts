export const delay = (ms) => {
  let timeout;

  return new Promise<void>((res) => {
    timeout = setTimeout(() => {
      res();

      clearTimeout(timeout);
    }, ms);
  });
};
