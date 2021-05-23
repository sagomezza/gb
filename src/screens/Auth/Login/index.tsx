import * as React from "react";
import { navigator } from "navigation";
import DefaultLayout, { Body, Footer } from "layout/default";
import {
  LinkButton,
  Spacing,
  Paragraph,
  KeyboardAwareScrollViewContainer,
  ContentStyles,
} from "components";
import routes from "config/routes";
import Form from "../components/Form/Form";
import { Container } from "./styled";

import { IAuthData } from "../types/auth.types";

const LoginScreen: React.FC = (): React.ReactElement => {
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
            <Form isLoading={false} title="Login" onSubmit={onSubmit} />
          </Container>
        </Body>
        <Footer>
          <Container>
            <Spacing size={20} />
            <LinkButton onPress={() => goToPage(routes.FORGOTPASSWORD)}>
              Forgot Password
            </LinkButton>
            <Spacing size={20} />
            <Paragraph center>You don&#39;t have an account?</Paragraph>
            <LinkButton onPress={() => goToPage(routes.SIGNUP)}>
              Signup
            </LinkButton>
          </Container>
        </Footer>
      </KeyboardAwareScrollViewContainer>
    </DefaultLayout>
  );
};

export default LoginScreen;
