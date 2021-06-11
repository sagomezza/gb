import React from 'react';
import { View } from 'react-native';
import { useForm, useWatch, SubmitHandler } from 'react-hook-form';
import { Spacing, CaptionLabel, PrimaryButton, Title } from 'core/components';
import { Activity, Input } from './Form.styles';
import { IChangePasswordData } from './types';

interface IFormProps {
  hideLabels?: boolean;
  hidePassword?: boolean;
  isLoading: boolean;
  onSubmit: (data: IChangePasswordData) => void;
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
  } = useForm<IChangePasswordData>();

  const newPassword = useWatch({
    control,
    name: 'NewPassword',
    defaultValue: '',
  });

  const combineHandleWithSubmit: SubmitHandler<IChangePasswordData> = (
    data: IChangePasswordData,
  ) => {
    onSubmit(data);
  };

  return (
    <View>
      <Title center>{title}</Title>
      <Spacing size={16} />
      {!hideLabels && <CaptionLabel>Current Password</CaptionLabel>}
      <Input
        control={control}
        errors={errors}
        input={{
          textContentType: 'password',
          secureTextEntry: true,
        }}
        name="CurrentPassword"
        placeholder="password"
      />
      {!hidePassword && <CaptionLabel>New Password</CaptionLabel>}
      {!hidePassword && (
        <Input
          control={control}
          errors={errors}
          input={{
            textContentType: 'password',
            secureTextEntry: true,
          }}
          name="NewPassword"
          placeholder="password"
        />
      )}
      {!hidePassword && <CaptionLabel>Repeat Password</CaptionLabel>}
      {!hidePassword && (
        <Input
          control={control}
          errors={errors}
          input={{
            textContentType: 'password',
            secureTextEntry: true,
          }}
          name="RepeatPassword"
          placeholder="password"
          rules={{
            validate: (value) => value === newPassword || 'The passwords do not match',
          }}
        />
      )}
      <Spacing size={16} />
      {isLoading ? (
        <Activity animating />
      ) : (
        <PrimaryButton onPress={handleSubmit(combineHandleWithSubmit)}>{title}</PrimaryButton>
      )}
    </View>
  );
};

export default Form;
