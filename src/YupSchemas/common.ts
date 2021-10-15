import {
  AT_LEAST_ONE_LOWERCASE,
  AT_LEAST_ONE_NUMBER,
  AT_LEAST_ONE_SPECIAL_CHAR,
  AT_LEAST_ONE_UPPERCASE,
} from 'utils/input-regex';
import * as Yup from 'yup';

export const PASSWORD_VALIDATOR = Yup.string()
  .required('Password is required')
  .matches(AT_LEAST_ONE_UPPERCASE, 'Password must contain at least one uppercased letter')
  .matches(AT_LEAST_ONE_LOWERCASE, 'Password must contain at least one lowecased letter')
  .matches(AT_LEAST_ONE_NUMBER, 'Password must contain at least one number')
  .matches(AT_LEAST_ONE_SPECIAL_CHAR, 'Password must contain at least one special character')
  .min(8, 'Password must be at least 8 characters');
