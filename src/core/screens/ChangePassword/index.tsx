import React from "react";
import DefaultLayout, { Body } from "layout/default";
import { navigator } from "core/navigation";
import {
  Spacing,
  KeyboardAwareScrollViewContainer,
  ContentStyles,
} from "core/components";
import routes from "config/routes";
import Form from "./Form";
import { Container } from "./styled";
import { IChangePasswordData } from "./Form/types";

const ChangePasswordScreen = () => {
  const { goToPage } = navigator();

  const onSubmit = (data: IChangePasswordData) => {
    goToPage(routes.HOME, { data });
  };

  return (
    <DefaultLayout>
      <KeyboardAwareScrollViewContainer
        contentContainerStyle={ContentStyles}
        enableOnAndroid={false}
        keyboardShouldPersistTaps="handled"
        viewIsInsideTabBar={false}
      >
        <Body>
          <Container>
            <Spacing size={108} />
            <Form
              isLoading={false}
              title="Change Password"
              onSubmit={onSubmit}
            />
          </Container>
        </Body>
      </KeyboardAwareScrollViewContainer>
    </DefaultLayout>
  );
};

export default ChangePasswordScreen;
