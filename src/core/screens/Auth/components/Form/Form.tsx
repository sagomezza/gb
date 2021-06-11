import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Spacing, CaptionLabel, PrimaryButton, Title } from 'core/components';
import { EMAIL_REGEX } from 'utils/input-regex';
import { Activity, Input } from './Form.styles';
import { IAuthData } from '../../types/auth.types';

interface IFormProps {
  hideLabels?: boolean;
  hidePassword?: boolean;
  isLoading: boolean;
  onSubmit: (data: IAuthData) => void;
  title: string;
}

const Form: React.FC<IFormProps> = ({
  hideLabels,
  hidePassword,
  isLoading,
  onSubmit,
  title,
}: IFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const combineHandleWithSubmit = (data: IAuthData) => {
    onSubmit(data);
  };

  return (
    <View>
      <Title center>{title}</Title>
      <Spacing size={16} />
      {!hideLabels && <CaptionLabel>Email</CaptionLabel>}
      <Input
        control={control}
        errors={errors}
        keyboardType="email-address"
        name="Email"
        pattern={{ value: EMAIL_REGEX }}
      />
      <Spacing size={16} />
      {!hidePassword && <CaptionLabel>Password</CaptionLabel>}
      {!hidePassword && (
        <Input
          control={control}
          errors={errors}
          input={{
            textContentType: 'password',
            secureTextEntry: true,
          }}
          name="Password"
        />
      )}
      <Spacing size={80} />
      {isLoading ? (
        <Activity animating />
      ) : (
        <PrimaryButton onPress={handleSubmit(combineHandleWithSubmit)}>{title}</PrimaryButton>
      )}
    </View>
  );
};

export default Form;
