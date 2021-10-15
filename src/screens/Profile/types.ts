export interface IEditProfileForm {
  description: string;
  interests: { id: number; name: string }[];
  isTrainer?: boolean;
  name: string;
}

export interface IEditProfileProps {
  onSubmit: (data: IEditProfileForm) => void;
  userData: IEditProfileForm;
}
