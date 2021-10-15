import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import Spacing from 'components/Spacing';
import { UserSchema } from 'YupSchemas/auth.user';
import { IAuthData } from 'store/types';
import { ActivityIndicator } from 'components';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'store/auth/authSelectors';
import Fb from '../../../assets/imgs/FB.svg';
import Google from '../../../assets/imgs/Google.svg';
import { ButtonSignup, FbButton, GoogleButton, ParagraphSignup, SocialContainer } from './styles';
import { ISignupFormProps } from './types';
import InputSignup from '../../components/InputSignup';

const SignupForm: React.FC<ISignupFormProps> = ({ onSignup }: ISignupFormProps) => {
  const isLoading = useSelector(getLoadingStatus);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(UserSchema) });

  const signupFb = () => {};
  const signupGoogle = () => {};

  const onSubmit = useCallback(
    (data: IAuthData) => {
      onSignup(data);
    },
    [onSignup],
  );

  return (
    <View>
      <Spacing size={15} />
      <InputSignup
        control={control}
        error={errors.name}
        errorText={errors.name?.message}
        keyboardType="default"
        name="name"
        placeholder="Full name"
      />
      <Spacing size={15} />
      <InputSignup
        control={control}
        error={errors.username}
        errorText={errors.username?.message}
        keyboardType="default"
        name="username"
        placeholder="User Name"
      />
      <Spacing size={15} />
      <InputSignup
        control={control}
        error={errors.email}
        errorText={errors.email?.message}
        keyboardType="email-address"
        name="email"
        placeholder="Email"
      />
      <Spacing size={15} />
      <InputSignup
        secureTextEntry
        control={control}
        error={errors.password}
        errorText={errors.password?.message}
        name="password"
        placeholder="Password"
      />
      <Spacing size={30} />
      <ParagraphSignup>Sign Up with</ParagraphSignup>
      <SocialContainer>
        <FbButton onPress={signupFb}>
          <Fb height={40} width={120} />
        </FbButton>
        <GoogleButton onPress={signupGoogle}>
          <Google />
        </GoogleButton>
      </SocialContainer>
      <Spacing size={30} />
      {isLoading ? (
        <ActivityIndicator color="#3CC7AD" />
      ) : (
        <ButtonSignup onPress={handleSubmit(onSubmit)}>Sign Up</ButtonSignup>
      )}
    </View>
  );
};

export default SignupForm;
