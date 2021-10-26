import FormInputNative from 'components/FormInputNative';
import { theme } from 'config/theme';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const SubmitButtonContainer = styled.View`
  align-self: flex-end;
  margin-bottom: ${Platform.OS === 'ios' ? rs(40) : rs(60)}px;
  margin-top: ${rs(20)}px;
`;

export const InputName = styled(FormInputNative).attrs(() => ({
  inputStyle: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: 'bold',
    fontSize: nlz(26),
  },
}))``;

export const FormContainer = styled.View`
  padding-horizontal: ${rs(20)}px;
`;

export const AddButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: ${rs(25)}px;
  flex-direction: row;
  height: ${rs(32)}px;
  justify-content: center;
  margin-horizontal: ${rs(10)}px;
  width: ${rs(100)}px;
`;
