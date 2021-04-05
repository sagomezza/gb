import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Spacing, CaptionLabel, TextInput, PrimaryButton } from 'components';
import { navigator } from 'navigation';
import routes from 'config/routes';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const { goToPage } = navigator();

  const onSubmit = (data) => {
    goToPage(routes.HOME);
  };

  return (
    <View>
      <CaptionLabel>Email</CaptionLabel>
      <TextInput placeholder="Email" ref={register({ required: true })} />
      <Spacing size={16} />
      <CaptionLabel>Password</CaptionLabel>
      <TextInput placeholder="Password" ref={register({ required: true })} />
      <Spacing size={80} />
      <PrimaryButton onPress={handleSubmit(onSubmit)}>Login</PrimaryButton>
    </View>
  );
};

export default LoginForm;
