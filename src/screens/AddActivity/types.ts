export interface IFormValuesAddActivity {
  description: string;
  endTime: string;
  startTime: string;
  title: string;
  ubication: string;
}

export interface IAddActivityFormProps {
  onSubmit: (data: IFormValuesAddActivity) => void;
}
