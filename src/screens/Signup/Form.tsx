import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import Spacing from 'components/Spacing';
import Fb from '../../../assets/imgs/FB.svg';
import Google from '../../../assets/imgs/Google.svg';
import { ButtonSignup, FbButton, GoogleButton, ParagraphSignup, SocialContainer } from './styled';
import { REGEX_EMAIL, REGEX_LETTERS } from '../../utils/regexes';
import { IFormValuesSignup, ISignupFormProps } from './types';
import InputSignup from '../../components/InputSignup';

const SignupForm: React.FC<ISignupFormProps> = ({ onSignup }: ISignupFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const signupFb = () => {};
  const signupGoogle = () => {};

  const onSubmit = useCallback(
    (data: IFormValuesSignup) => {
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
        rules={{
          required: {
            value: true,
            message: 'Full name is required',
          },
          pattern: {
            value: REGEX_LETTERS,
            message: 'Characters only',
          },
        }}
      />
      <Spacing size={15} />
      <InputSignup
        control={control}
        error={errors.userName}
        errorText={errors.userName?.message}
        keyboardType="default"
        name="userName"
        placeholder="User name"
        rules={{
          required: {
            value: true,
            message: 'User name is required',
          },
        }}
      />
      <Spacing size={15} />
      <InputSignup
        control={control}
        error={errors.email}
        errorText={errors.email?.message}
        keyboardType="email-address"
        name="email"
        placeholder="Email"
        rules={{
          required: {
            value: true,
            message: 'Email is required',
          },
          pattern: {
            value: REGEX_EMAIL,
            message: 'Invalid email',
          },
        }}
      />
      <Spacing size={15} />
      <InputSignup
        secureTextEntry
        control={control}
        error={errors.password}
        errorText={errors.password?.message}
        name="password"
        placeholder="Password"
        rules={{
          required: {
            value: true,
            message: 'Password is required',
          },
        }}
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
      <ButtonSignup onPress={handleSubmit(onSubmit)}>Sign Up</ButtonSignup>
    </View>
  );
};

export default SignupForm;
