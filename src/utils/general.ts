export const getErrorMessage = (action) => {
  const error: string = action.payload
    ? JSON.parse(action.payload.message).message
    : action.error.message;

  return error;
};
