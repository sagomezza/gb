import { StyleSheet, View, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const TextInputStyled = styled(TextInput)`
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  justify-content: center;
  padding-left: ${rs(30)}px;
  width: 100%;
`;

export const ContainerFormInput = styled(View)`
  width: 100%;
`;

export const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
  },
  textPaperInput: {
    borderRadius: 18,
    fontSize: 14,
  },
});
