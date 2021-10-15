import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigator } from 'navigation';
import NetInfo from '@react-native-community/netinfo';
import { SubmitHandler, useForm } from 'react-hook-form';
import Spacing from 'components/Spacing';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import { ModalAlert } from 'components/ModalAlert';
import { getModalAlertState } from 'store/app/appSelectors';
import routes from 'config/routes';
import InputSignup from 'components/InputSignup';
import ScreensHeader from 'components/ScreensHeader';
import { SnackBar } from 'components';
import { AuthAmplifyDictionary } from 'diccionaries/auth.diccionaries';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import { useAuth } from 'service/authentication.service';
import { saveUserInfo, saveUserToken, toggleAuthLoader } from 'store/auth/authActions';
import { IAuthData } from 'store/types';
import DeviceInfo from 'react-native-device-info';
import LoginForm from './Form';
import {
  ContainerForm,
  ContainerLogin,
  ContainerTitle,
  FbButton,
  GoogleButton,
  HeaderContainer,
  LinearGradientStyled,
  ParagraphLogin,
  SocialContainer,
  TitleLogin,
} from './styles';
import FbLogo from '../../../assets/imgs/FB.svg';
import GoogleLogo from '../../../assets/imgs/Google.svg';
import { REGEX_EMAIL } from '../../utils/regexes';

const LoginScreen: React.FC = () => {
  const [toast, setToast] = useState({ label: '', message: '', visible: false });
  const { forgotPassword, getCurrentSessionUser, resendSignUp, signIn } = useAuth();
  const { goToPage } = navigator();
  const [modalForgotVisible, setModalForgotVisible] = useState(false);
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();
  const modalAlertState = useSelector(getModalAlertState);

  type FormValues = {
    email: string;
  };

  const resendCode = async (email) => {
    resendSignUp({
      username: email,
    });
  };

  const loginFb = () => {};
  const loginGoogle = () => {
    dispatch(
      showModalAlert({
        title: 'Error',
        text: 'Internet connection not available',
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );
  };

  const onLogin = (data: IAuthData) => {
    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        dispatch(
          showModalAlert({
            title: 'Error',
            text: 'Internet connection not available',
            textButton: 'Ok',
            type: 'error',
            visible: true,
          }),
        );
      } else {
        dispatch(toggleAuthLoader(true));

        const { email, password } = data;
        const response: ISignUpResult = await signIn({
          username: email,
          password,
        });

        const existCode = AuthAmplifyDictionary(await response?.code);

        if (existCode) {
          if (response?.code === 'UserNotConfirmedException') {
            const deviceId = DeviceInfo.getUniqueId();
            const user = { ...data, deviceId };
            await dispatch(saveUserInfo(user));
            dispatch(toggleAuthLoader(false));
            resendCode(email);
            goToPage(routes.VERIFICATION);
            return;
          }
          setToast({
            label: 'OK',
            message: response?.message,
            visible: true,
          });
          dispatch(toggleAuthLoader(false));

          return;
        }

        const session = await getCurrentSessionUser();
        dispatch(saveUserInfo({ email }));
        dispatch(
          saveUserToken({
            token: `Bearer ${session?.accessToken?.jwtToken}`,
            userId: session?.idToken?.payload?.sub,
          }),
        );
        dispatch(toggleAuthLoader(false));
      }
    });
  };

  const onSubmitModal: SubmitHandler<FormValues> = (data: FormValues) => {
    reset();
    clearErrors();
    const { email } = data;

    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        dispatch(
          showModalAlert({
            title: 'Error',
            text: 'Internet connection not available',
            textButton: 'Ok',
            type: 'error',
            visible: true,
          }),
        );
      } else {
        const response = await forgotPassword({
          username: email,
        });

        const errorResponse = (await response) && response.code;
        const message = (await response) && response.code ? response.code : response;
        const existCode = AuthAmplifyDictionary(await message);

        if (errorResponse && existCode) {
          setToast({
            label: 'OK',
            message: response?.message,
            visible: true,
          });
          setModalForgotVisible(false);

          return;
        }
        setModalForgotVisible(false);
        dispatch(
          showModalAlert({
            data: data.email,
            title: 'Link sent!',
            text: `A password reset code has been sent to ${data.email}`,
            textButton: 'Next',
            type: 'confirmForgot',
            visible: true,
          }),
        );
      }
    });
  };

  const onCloseModal = () => {
    setModalForgotVisible(!modalForgotVisible);
    reset();
    clearErrors();
  };

  return (
    <>
      <SafeAreaView>
        <HeaderContainer>
          <ScreensHeader />
        </HeaderContainer>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <ContainerLogin>
            <ContainerTitle>
              <TitleLogin>Welcome back!</TitleLogin>
            </ContainerTitle>
            <LinearGradientStyled>
              <ContainerForm>
                <Spacing size={10} />
                <LoginForm onLogin={onLogin} onPressForgot={() => setModalForgotVisible(true)} />
                <SnackBar toast={toast} />
                <Spacing size={40} />
                <ParagraphLogin>Log In with</ParagraphLogin>
                <Spacing size={2} />
                <SocialContainer>
                  <FbButton onPress={loginFb}>
                    <FbLogo />
                  </FbButton>
                  <GoogleButton onPress={loginGoogle}>
                    <GoogleLogo />
                  </GoogleButton>
                </SocialContainer>
              </ContainerForm>
            </LinearGradientStyled>
          </ContainerLogin>
        </ScrollView>
      </SafeAreaView>

      <ModalAlert
        hideModal={onCloseModal}
        text="Enter the email you registered with"
        textButton="Send"
        title="Forgot your Password?"
        type="content"
        visible={modalForgotVisible}
        onDismiss={onCloseModal}
        onSubmit={handleSubmit(onSubmitModal)}
      >
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
      </ModalAlert>

      <ModalAlert
        data={modalAlertState.data}
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible && modalAlertState.type !== 'content'}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </>
  );
};

export default LoginScreen;
