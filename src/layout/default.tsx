import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components/native";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "core/components";
import { IWithChildren, IWithStyle } from "utils/types";

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
  justify-content: space-evenly;
  padding: 0px 20px 20px 20px;
`;

const BodyContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const Header: React.FC<IWithChildren> = ({
  children,
}: IWithChildren) => <View>{children}</View>;
export const Footer = ({ children }: IWithChildren) => <View>{children}</View>;

interface IBodyProps extends IWithChildren, IWithStyle {}

export const Body: React.FC<IBodyProps> = ({ children, style }: IBodyProps) => (
  <BodyContainer style={style}>{children}</BodyContainer>
);

const OnboardingLayout: React.FC<IWithChildren> = ({
  children,
}: IWithChildren) => (
  <PaperProvider>
    <TouchableWithoutFeedback
      accessible={false}
      onPress={() => Keyboard.dismiss()}
    >
      <Container>
        <StatusBar />
        {children}
      </Container>
    </TouchableWithoutFeedback>
  </PaperProvider>
);

export default OnboardingLayout;
