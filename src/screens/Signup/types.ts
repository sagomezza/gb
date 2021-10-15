import { IAuthData } from 'store/types';

export interface ISignupFormProps {
  onLogin: () => void;
  onSignup: (data: IAuthData) => void;
}
