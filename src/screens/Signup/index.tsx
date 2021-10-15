import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { navigator } from 'navigation';
import routes from 'config/routes';
import Spacing from 'components/Spacing';
import { IAuthData } from 'store/types';
import { useAuth } from 'service/authentication.service';
import { useDispatch } from 'react-redux';
import { AuthAmplifyDictionary } from 'diccionaries/auth.diccionaries';
import { SnackBar } from 'components';
import { saveUserInfo, toggleAuthLoader } from 'store/auth/authActions';
import {
  BackButtonContainer,
  ContainerForm,
  ContainerSignup,
  ContainerText,
  HeaderBackground,
  HeaderSubtitle,
  HeaderTitle,
  SignupBody,
} from './styles';
import SignUpBackButton from './SignUpBackButton';
import Form from './Form';

const backgroundHeader = require('../../../assets/imgs/BgHeader.png');

const SignupScreen: React.FC = () => {
  const [toast, setToast] = useState({ label: '', message: '', visible: false });
  const { goToPage } = navigator();
  const dispatch = useDispatch();
  const { signUp } = useAuth();

  const onSignup = async (data: IAuthData) => {
    dispatch(toggleAuthLoader(true));

    const response = await signUp({
      username: data.email,
      password: data.password,
      phone_number: `+13146009090`,
    });

    const existCode = AuthAmplifyDictionary(response?.code);

    if (existCode) {
      setToast({
        label: 'OK',
        message: response?.message,
        visible: true,
      });
      dispatch(toggleAuthLoader(false));

      return;
    }
    dispatch(toggleAuthLoader(false));
    dispatch(saveUserInfo(data));
    goToPage(routes.VERIFICATION);
  };

  return (
    <ContainerSignup>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <HeaderBackground source={backgroundHeader}>
          <BackButtonContainer>
            <SignUpBackButton />
          </BackButtonContainer>
          <Spacing />
          <ContainerText>
            <HeaderTitle>Hello</HeaderTitle>
            <HeaderSubtitle>Create a new account</HeaderSubtitle>
          </ContainerText>
        </HeaderBackground>
        <SignupBody>
          <ContainerForm>
            <Form onSignup={onSignup} />
          </ContainerForm>
          <SnackBar toast={toast} />
        </SignupBody>
      </ScrollView>
    </ContainerSignup>
  );
};

export default SignupScreen;
