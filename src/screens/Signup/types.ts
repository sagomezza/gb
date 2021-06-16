export interface IFormValuesSignup {
  email: string;
  name: string;
  password: string;
  username: string;
}

export interface ISignupFormProps {
  onSignup: (data: IFormValuesSignup) => void;
}
