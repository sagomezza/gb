import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import Spacing from 'components/Spacing';
import { navigator } from 'navigation';
import routes from 'config/routes';
import { theme } from 'config/theme';
import { REGEX_EMAIL } from 'utils/regexes';
import { IAuthData } from 'store/types';
import { ActivityIndicator } from 'components';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'store/auth/authSelectors';
import InputLogin from '../../components/InputLogin';
import { ButtonForgotPass, ButtonLogin, ButtonSignup } from './styles';
import { ILoginFormProps } from './types';

const LoginForm: React.FC<ILoginFormProps> = ({ onLogin, onPressForgot }: ILoginFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });
  const { goToPage } = navigator();
  const isLoading = useSelector(getLoadingStatus);

  const onSubmit = useCallback(
    (data: IAuthData) => {
      onLogin(data);
    },
    [onLogin],
  );

  return (
    <View>
      <Spacing size={16} />
      <InputLogin
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
      <Spacing size={16} />
      <InputLogin
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
      <Spacing size={15} />
      <ButtonForgotPass color={theme.colors.white} onPress={onPressForgot}>
        Forgot your password?
      </ButtonForgotPass>
      <Spacing size={40} />

      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonLogin onPress={handleSubmit(onSubmit)}>Log in</ButtonLogin>
      )}

      <Spacing size={18} />
      <ButtonSignup onPress={() => goToPage(routes.SIGNUP)}>Sign Up</ButtonSignup>
    </View>
  );
};

export default LoginForm;
