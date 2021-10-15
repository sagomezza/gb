import { IAuthData } from 'store/types';

export interface ISignupFormProps {
  onSignup: (data: IAuthData) => void;
}
