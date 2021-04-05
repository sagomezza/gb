import React from 'react';
import { Text, Platform, StatusBar as StatusBarRN } from 'react-native';
import styled from 'styled-components/native';
import { theme } from 'config/theme';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.onPrimary};
  height: ${Platform.OS === 'ios' ? '20px' : StatusBarRN.currentHeight};
`;

export const StatusBar = () => (
  // <Container>
  <StatusBarRN
    barStyle="light-content"
    backgroundColor={theme.colors.onPrimary}
    translucent={true}
    networkActivityIndicatorVisible={true}
  />
  // </Container>
);
