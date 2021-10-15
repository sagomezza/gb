import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IForgotPasswordData } from 'store/types';
import Typography from 'components/Typography';
import { ActivityIndicator, PinField, Spacing } from 'components';
import { ForgotPasswordSchema } from 'YupSchemas/forgotPassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'store/auth/authSelectors';
import { Container, Button, InputSignupForm, Label, InputContainer } from './styles';
import { IFormProps } from './types';

const Form: React.FC<IFormProps> = ({ onPress }: IFormProps) => {
  const isLoading = useSelector(getLoadingStatus);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(ForgotPasswordSchema) });

  const onSubmitHandler = (data: IForgotPasswordData) => {
    onPress(data);
  };

  return (
    <Container>
      <Controller
        control={control}
        name="pinCode"
        render={({ field: { onChange, value } }) => (
          <>
            <PinField value={value} onChangeValue={onChange} />
            <InputContainer>
              {!!errors.pinCode && (
                <Typography color="error" size={11}>
                  {errors.pinCode?.message}
                </Typography>
              )}
            </InputContainer>
          </>
        )}
      />
      <InputContainer>
        <Label>Create new password</Label>
        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <>
              <InputSignupForm
                secureTextEntry
                placeholder=""
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
              {!!errors.password && (
                <Typography color="error" size={11}>
                  {errors.password?.message}
                </Typography>
              )}
            </>
          )}
        />
      </InputContainer>
      <InputContainer>
        <Label>Confirm new password</Label>
        <Controller
          control={control}
          name="passwordConfirmation"
          render={({ field: { onBlur, onChange, value } }) => (
            <>
              <InputSignupForm
                secureTextEntry
                placeholder=""
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
              {!!errors.passwordConfirmation && (
                <Typography color="error" size={11}>
                  {errors.passwordConfirmation?.message}
                </Typography>
              )}
            </>
          )}
        />
      </InputContainer>

      <Spacing size={30} />

      {isLoading ? (
        <ActivityIndicator color="#3CC7AD" />
      ) : (
        <Button onPress={handleSubmit(onSubmitHandler)}>Confirm password</Button>
      )}
    </Container>
  );
};
export default Form;
