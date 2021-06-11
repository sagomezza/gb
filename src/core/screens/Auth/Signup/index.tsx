import * as React from 'react';
import { navigator } from 'core/navigation';
import DefaultLayout, { Body, Footer } from 'layout/default';
import {
  LinkButton,
  Spacing,
  Paragraph,
  KeyboardAwareScrollViewContainer,
  ContentStyles,
} from 'core/components';
import routes from 'config/routes';
import Form from '../components/Form/Form';
import { Container } from './styled';

import { IAuthData } from '../types/auth.types';

const SignupScreen: React.FC = (): React.ReactElement => {
  const { goToPage } = navigator();
  const onSubmit = (data: IAuthData) => {
    goToPage(routes.HOME, { data });
  };
  return (
    <DefaultLayout>
      <KeyboardAwareScrollViewContainer
        contentContainerStyle={ContentStyles}
        enableOnAndroid={false}
        viewIsInsideTabBar={false}
      >
        <Body>
          <Container>
            <Spacing size={108} />
            <Form isLoading={false} title="Signup" onSubmit={onSubmit} />
          </Container>
        </Body>
        <Footer>
          <Container>
            <Spacing size={20} />
            <Paragraph center>You already have an account?</Paragraph>
            <LinkButton onPress={() => goToPage(routes.LOGIN)}>Login</LinkButton>
          </Container>
        </Footer>
      </KeyboardAwareScrollViewContainer>
    </DefaultLayout>
  );
};

export default SignupScreen;
