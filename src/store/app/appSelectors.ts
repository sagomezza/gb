export const getAppState = (state) => state.app;
export const getModalAlertState = (state) => getAppState(state).modalAlert;
export const getEditProfileState = (state) => getAppState(state).editProfile;
export const getProfileState = (state) => getAppState(state).profile;
