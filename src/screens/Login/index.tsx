import * as React from 'react';
import { navigator } from 'navigation';
import DefaultLayout, { Header, Body, Footer } from 'layout/default';
import { LinkButton, Spacing, Paragraph } from 'components';
import LoginForm from './Form';
import routes from 'config/routes';
import { Container } from './styled';

const LoginScreen = () => {
  const { goToPage } = navigator();
  return (
    <DefaultLayout>
      <Body>
        <Container>
          <Spacing size={108} />
          <LoginForm />
        </Container>
      </Body>
      <Footer>
        <Container>
          <Spacing size={20} />
          <Paragraph center>GO TO STYLEGUIDE</Paragraph>
          <LinkButton onPress={() => goToPage(routes.STYLEGUIDE)}>Styleguide</LinkButton>
          <Spacing size={60} />
        </Container>
      </Footer>
    </DefaultLayout>
  );
};

export default LoginScreen;
