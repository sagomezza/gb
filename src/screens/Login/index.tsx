import * as React from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import Spacing from 'components/Spacing';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import { ModalAlert } from 'components/ModalAlert';
import { getModalAlertState } from 'store/app/appSelectors';
import LoginForm from './Form';
import {
  ContainerForm,
  ContainerLogin,
  ContainerTitle,
  FbButton,
  GoogleButton,
  LinearGradientStyled,
  ParagraphLogin,
  SocialContainer,
  TitleLogin,
} from './styled';
import FbLogo from '../../../assets/imgs/FB.svg';
import GoogleLogo from '../../../assets/imgs/Google.svg';
import { IFormValuesLogin } from './types';

const LoginScreen: React.FC = () => {
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
  const dispatch = useDispatch();

  const modalAlertState = useSelector(getModalAlertState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onLogin = (_data: IFormValuesLogin) => {
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
      }
    });
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ContainerLogin>
        <ContainerTitle>
          <TitleLogin>Welcome back!</TitleLogin>
        </ContainerTitle>
        <LinearGradientStyled>
          <ContainerForm>
            <Spacing size={10} />
            <LoginForm onLogin={onLogin} />
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
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </>
  );
};

export default LoginScreen;
