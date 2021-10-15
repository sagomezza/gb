import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

import { PrimaryButton, FormInputMask, Typography, Checkbox } from 'components';
import { theme } from 'config/theme';

export const FormContainer = styled.View`
  align-self: flex-start;
  width: 100%;
`;

export const CheckBoxContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Button = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: '600',
    fontSize: nlz(16),
    color: theme.colors.white,
  },
}))`
  background-color: ${({ theme }) => theme.colors.greenPrimary};
  border-radius: ${rs(9)}px;
  font-family: ${({ theme }) => theme.fonts.medium.fontFamily};
  font-weight: ${({ theme }) => theme.fonts.medium.fontWeight};
  width: 70%;
`;

export const Input = styled(FormInputMask).attrs({
  inputStyle: {
    height: rs(62),
    borderRadius: rs(7),
  },
})`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const CheckboxText = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.regular.fontFamily};
  font-weight: ${({ isTouched }) => (isTouched ? 'bold' : '400')};
`;

export const CheckboxCustom = styled(Checkbox).attrs({
  color: theme.colors.darkGreenSecondary,
})``;
