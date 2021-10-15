import { IAuthData } from 'store/types';

export interface ILoginFormProps {
  onLogin: (data: IAuthData) => void;
  onPressForgot: () => void;
}
