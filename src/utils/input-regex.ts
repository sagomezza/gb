export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const VALID_PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
export const AT_LEAST_ONE_UPPERCASE = /^(?=.*[A-Z])/;
export const AT_LEAST_ONE_LOWERCASE = /^(?=.*?[a-z])/;
export const AT_LEAST_ONE_NUMBER = /^(?=.*?[0-9])/;
export const AT_LEAST_ONE_SPECIAL_CHAR = /^(?=.*?[#?!@$%^&*-.])/;
export const CLEAN_SPACES = /\s/g;
