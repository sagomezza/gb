export interface IEditProfileForm {
  description: string;
  isTrainer?: boolean;
  name: string;
  premium?: boolean;
}

export interface IEditProfileProps {
  onSubmit: (data: IEditProfileForm) => void;
  userData: IEditProfileForm;
}
