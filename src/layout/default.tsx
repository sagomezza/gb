import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'components';
import { ModalProvider } from 'components/Modal';

const Container = styled.View`
  flex: 1;
  padding: 0px 20px 20px 20px;
  justify-content: space-evenly;
  background-color: #ffffff;
`;

const BodyContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const Header = (props) => <View>{props.children}</View>;
export const Footer = (props) => <View>{props.children}</View>;
export const Body = (props) => <BodyContainer style={props.style}>{props.children}</BodyContainer>;

const OnboardingLayout = (props) => (
  <PaperProvider>
    <ModalProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <Container>
          <StatusBar />
          {props.children}
        </Container>
      </TouchableWithoutFeedback>
    </ModalProvider>
  </PaperProvider>
);

export default OnboardingLayout;
