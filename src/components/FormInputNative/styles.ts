import { StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { nlz, rs } from '../../utils/dimensions';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    height: rs(60),
    width: '100%',
  },
  inputPaper: {
    backgroundColor: 'white',
    marginBottom: rs(3),
  },
  label: {
    alignSelf: 'flex-start',
  },
  multiline: {
    height: rs(150),
    textAlignVertical: 'top',
  },
});

export const TextInputStyled = styled(TextInput)`
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  height: ${rs(60)}px;
  justify-content: center;
  padding-horizontal: ${rs(14)}px;
  width: 100%;
`;
