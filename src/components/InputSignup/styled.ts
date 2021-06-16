// REACT
import { StyleSheet, View } from 'react-native';

// CONFIG
import { theme } from 'config/theme';

// UTILS

import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import { nlz, rs } from '../../utils/dimensions';

export const InputSignup = styled(TextInput)`
  background-color: transparent;
  font-family: ${theme.fonts.light.fontFamily};
  font-size: ${nlz(17)}px;
  font-weight: ${theme.fonts.light.fontWeight};
  height: ${rs(50)}px;
  margin: 0;
  padding-horizontal: 0;
  width: 100%;
`;

export const ContainerInputLogin = styled(View)`
  width: 100%;
`;

export const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
  },
});
