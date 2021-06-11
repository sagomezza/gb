import styled from 'styled-components/native';

import { ImageBackground } from 'react-native';
import { theme } from 'config/theme';
import { nlz, rs, W, H } from 'utils/dimensions';
import { PrimaryButton } from 'components/Button';

export const Background = styled(ImageBackground).attrs(() => ({
  imageStyle: {
    resizeMode: 'cover',
  },
}))`
  height: ${H}px;
  justify-content: space-around;
  width: ${W}px;
`;

export const ButtonLogin = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: theme.fonts.regular.fontWeight,
    fontSize: nlz(16),
    color: theme.colors.black,
  },
}))`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  height: ${rs(44)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
`;

export const ButtonSignup = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: theme.fonts.regular.fontWeight,
    fontSize: nlz(16),
    color: theme.colors.black,
  },
}))`
  background-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: 10px;
  height: ${rs(44)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
`;

export const OnboardingTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(34)}px;
  font-weight: 500;
  line-height: ${rs(62)}px;
  margin-horizontal: 40px;
  text-align: center;
`;
