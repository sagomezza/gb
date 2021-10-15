import * as Yup from 'yup';
import { PASSWORD_VALIDATOR } from './common';

export const ForgotPasswordSchema = Yup.object().shape({
  password: PASSWORD_VALIDATOR,
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  pinCode: Yup.string()
    .required('Verification code is required')
    .min(6, 'Code must be 6 numbers')
    .max(6, 'Code must be 6 numbers'),
});
