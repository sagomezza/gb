import * as Yup from 'yup';
import { PASSWORD_VALIDATOR } from './common';

export const UserSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: PASSWORD_VALIDATOR,
  username: Yup.string().required('Username is required'),
});
