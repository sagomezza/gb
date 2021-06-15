import * as React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import Spacing from 'components/Spacing';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import { RootState } from '@store';
import { ModalAlert } from 'components/ModalAlert';
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
import Fb from '../../../assets/imgs/FB.svg';
import Google from '../../../assets/imgs/Google.svg';
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

  const modalAlertState = useSelector((state: RootState) => state.app.modalAlert);

  const onLogin = (data: IFormValuesLogin) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View>
            <ContainerTitle>
              <TitleLogin>Welcome back!</TitleLogin>
            </ContainerTitle>
            <LinearGradientStyled colors={['#42BAA4', '#203944']}>
              <ContainerForm>
                <Spacing size={10} />
                <LoginForm onLogin={onLogin} />
                <Spacing size={40} />
                <ParagraphLogin>Log In with</ParagraphLogin>
                <Spacing />
                <SocialContainer>
                  <FbButton onPress={loginFb}>
                    <Fb />
                  </FbButton>
                  <GoogleButton onPress={loginGoogle}>
                    <Google />
                  </GoogleButton>
                </SocialContainer>
              </ContainerForm>
            </LinearGradientStyled>
          </View>
        </ScrollView>
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
