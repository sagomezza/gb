import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Spacing } from 'components';

import { ICodeData } from '../Types/types';

import {
  FormContainer,
  CheckBoxContainer,
  CheckboxCustom,
  CheckboxText,
  Button,
  Input,
} from './Form.styles';

interface IFormProps {
  loading: boolean;
  onSubmit: (data: ICodeData) => void;
}

const Form: React.FC<IFormProps> = ({ loading, onSubmit }: IFormProps): ReactElement => {
  const [checked, setChecked] = React.useState(false);
  const { control, formState, handleSubmit } = useForm({ mode: 'onBlur' });

  const onValidate = (data: ICodeData): void => {
    onSubmit(data);
  };

  return (
    <>
      <FormContainer>
        <Input
          autoFocus
          control={control}
          errors={formState?.errors}
          formState={formState}
          keyboardType="phone-pad"
          mask="999999"
          name="Code"
          placeholder="XXXXXX"
          returnKeyType="done"
          textAlign="center"
        />
        <Spacing size={32} />
        <CheckBoxContainer>
          <CheckboxCustom
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <CheckboxText
            isTouched={formState.isDirty && formState.isValid}
            onPress={() => {
              setChecked(!checked);
            }}
          >
            Don’t ask for this device again
          </CheckboxText>
        </CheckBoxContainer>
        <Spacing size={23} />
      </FormContainer>
      {loading ? (
        <ActivityIndicator color="#3CC7AD" />
      ) : (
        <Button onPress={handleSubmit(onValidate)}>Send</Button>
      )}
    </>
  );
};

export default Form;
