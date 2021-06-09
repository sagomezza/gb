import * as React from "react";
import { navigator } from "core/navigation";
import DefaultLayout, { Body, Footer } from "layout/default";
import {
  LinkButton,
  Spacing,
  KeyboardAwareScrollViewContainer,
  ContentStyles,
} from "core/components";
import routes from "config/routes";
import Form from "../components/Form/Form";
import { Container } from "./styled";

import { IAuthData } from "../types/auth.types";

const ForgotPasswordScreen: React.FC = (): React.ReactElement => {
  const { goToPage } = navigator();
  const onSubmit = (data: IAuthData) => {
    goToPage(routes.LOGIN, { data });
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
            <Form
              hidePassword
              isLoading={false}
              title="Forgot Password"
              onSubmit={onSubmit}
            />
          </Container>
        </Body>
        <Footer>
          <Container>
            <Spacing size={20} />
            <LinkButton onPress={() => goToPage(routes.LOGIN)}>
              Go back
            </LinkButton>
          </Container>
        </Footer>
      </KeyboardAwareScrollViewContainer>
    </DefaultLayout>
  );
};

export default ForgotPasswordScreen;
