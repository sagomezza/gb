import styled from 'styled-components';
import { View, Text, TextInput } from 'react-native';
import { theme } from 'config/theme';
import { rs, nlz } from 'utils/dimensions';
import { PrimaryButton } from 'components';

export const Container = styled(View)`
  flex: 1;
  padding-vertical: ${rs(8)}px;
`;

export const InputContainer = styled(View)`
  padding-horizontal: ${rs(32)}px;
`;

export const Label = styled(Text)`
  align-self: flex-start;
  color: ${({ theme }) => theme.codeField.label};
  font-size: ${nlz(18)}px;
  margin-bottom: ${rs(9)}px;
  margin-top: ${rs(16)}px;
  text-align: left;
`;

export const InputSignupForm = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.codeField.border};
  border-radius: ${rs(7)}px;
  border-width: ${rs(1)}px;
  font-family: ${({ theme }) => theme.fonts.light.fontFamily};
  font-size: ${nlz(16)}px;
  height: ${rs(50)}px;
  margin-vertical: ${rs(5)}px;
  padding-horizontal: ${rs(16)}px;
`;

export const Button = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: '800',
    fontSize: nlz(20),
    color: theme.colors.white,
  },
}))`
  background-color: #57e2c8;
  margin-horizontal: ${rs(20)}px;
  height: ${rs(62)}px;
  justify-content: center;
  border-radius: 10px;
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
`;
