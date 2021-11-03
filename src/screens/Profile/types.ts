export interface IEditProfileForm {
  description: string;
  isTrainer?: boolean;
  name: string;
  photo?: string;
  premium?: boolean;
}

export interface IEditProfileProps {
  onSubmit: (data: IEditProfileForm) => void;
  userData: IEditProfileForm;
}
