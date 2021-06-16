import * as React from 'react';
import { ScrollView } from 'react-native';
import Spacing from 'components/Spacing';
import Form from './Form';
import {
  ContainerForm,
  ContainerSignup,
  ContainerText,
  HeaderBackground,
  HeaderSubtitle,
  HeaderTitle,
  SignupBody,
} from './styled';
import { IFormValuesSignup } from './types';

const backgroundHeader = require('../../../assets/imgs/BgHeader.png');

const SignupScreen: React.FC = () => {
  const onSignup = (data: IFormValuesSignup) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <ContainerSignup>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <HeaderBackground source={backgroundHeader}>
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
        </SignupBody>
      </ScrollView>
    </ContainerSignup>
  );
};

export default SignupScreen;
