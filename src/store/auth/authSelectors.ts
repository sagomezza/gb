export const getAuthState = (state) => state.auth;
export const getUserAuth = (state) => getAuthState(state).user;
export const getUserToken = (state) => getAuthState(state).token;
export const getUserId = (state) => getAuthState(state).userId;
export const getLoadingStatus = (state) => getAuthState(state).loading;
