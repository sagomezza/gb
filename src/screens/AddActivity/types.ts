export interface IFormValuesAddActivity {
  description: string;
  endTime: string;
  startTime: string;
  title: string;
  ubication: string;
}

export interface IAddActivityFormProps {
  item?: object;
  onSubmit: (data: IFormValuesAddActivity) => void;
}
