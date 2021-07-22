import React, { useState } from 'react';
import { StatusBar } from 'react-native';
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
import { IFormValuesLogin } from './types';
import { REGEX_EMAIL } from '../../utils/regexes';

const LoginScreen: React.FC = () => {
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

  const onLogin = (data: IFormValuesLogin) => {
    NetInfo.fetch().then((state) => {
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
        goToPage(routes.ONBOARDINGSKILLS, { data });
      }
    });
  };

  const onSubmitModal: SubmitHandler<FormValues> = (data: FormValues) => {
    setModalForgotVisible(false);
    reset();
    clearErrors();
    dispatch(
      showModalAlert({
        title: 'Link sent!',
        text: `A password reset link has been sent to ${data.email}`,
        textButton: 'Ok',
        type: 'success',
        visible: true,
      }),
    );
  };

  const onCloseModal = () => {
    setModalForgotVisible(!modalForgotVisible);
    reset();
    clearErrors();
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <HeaderContainer>
        <ScreensHeader />
      </HeaderContainer>
      <ContainerLogin>
        <ContainerTitle>
          <TitleLogin>Welcome back!</TitleLogin>
        </ContainerTitle>
        <LinearGradientStyled>
          <ContainerForm>
            <Spacing size={10} />
            <LoginForm onLogin={onLogin} onPressForgot={() => setModalForgotVisible(true)} />
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
