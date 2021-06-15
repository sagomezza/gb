import { StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { theme } from 'config/theme';
import { nlz, rs } from 'utils/dimensions';
import Typography from 'core/components/Typography';

export const Input = styled(TextInput)`
  background-color: transparent;
  border: 1px solid
    ${({ isFocused, theme }) => (isFocused ? theme.colors.primary : theme.colors.lightGrey)};
  border-radius: ${rs(4)}px;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.light.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${theme.fonts.light.fontWeight};
  height: ${rs(54)}px;
  margin-vertical: ${rs(1)}px;
  padding-horizontal: 0;
  padding-left: ${rs(8)}px;
  width: 100%;
`;

export const ContainerFormInput = styled.View`
  height: ${rs(84)}px;
  width: 100%;
`;

export const Label = styled(Typography)`
  font-size: ${nlz(11)}px; ;
`;

export const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
  },
  textPaperInput: {
    fontSize: 14,
    height: 50,
  },
});
