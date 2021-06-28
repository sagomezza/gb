export interface IFormValuesLogin {
  email: string;
  password: string;
}

export interface ILoginFormProps {
  onLogin: (data: IFormValuesLogin) => void;
  onPressForgot: () => void;
}
