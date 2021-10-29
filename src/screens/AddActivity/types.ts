import { Activity } from 'lib/api';

export interface IFormValuesAddActivity {
  description: string;
  endTime: string;
  startTime: string;
  title: string;
  ubication: string;
}

export interface IAddActivityFormProps {
  item?: Activity;
  onSubmit: (data: IFormValuesAddActivity) => void;
}
