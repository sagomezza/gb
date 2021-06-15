import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from 'config/theme';
import { H, nlz, rs } from 'utils/dimensions';

import { PrimaryButton, OutlinedButton, LinkButton } from 'components/Button';
import { Body } from 'layout/default';

export const LinearGradientStyled = styled(LinearGradient)`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding-bottom: ${rs(30)}px;
`;

export const ParagraphLogin = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(15)}px;
  font-weight: 400;
  text-align: center;
`;

export const BodyLogin = styled(Body)`
  align-items: center;
`;

export const ButtonLogin = styled(PrimaryButton).attrs(() => ({
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
`;

export const ButtonSignup = styled(OutlinedButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: '800',
    fontSize: nlz(20),
    color: theme.colors.white,
  },
}))`
  border-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: 10px;
  border-width: 4px;
  height: ${rs(62)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
`;

export const ButtonForgotPass = styled(LinkButton).attrs(() => ({
  contentStyle: {
    alignSelf: 'flex-end',
  },
}))``;

export const ContainerForm = styled.View`
  height: ${H * 0.75}px;
  margin: 0 auto;
  min-width: ${rs(280)}px;
`;

export const ContainerLogin = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const ContainerTitle = styled.View`
  height: ${H * 0.25}px;
  justify-content: center;
`;

export const TitleLogin = styled.Text`
  color: ${({ theme: { colors } }) => colors.darkGreen};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(35)}px;
  font-weight: 800;
  text-align: center;
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${rs(10)}px;
  padding-horizontal: ${rs(50)}px;
`;

export const FbButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.backgroundFbImage};
  border-radius: 10px;
  height: ${rs(46)}px;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  width: ${rs(46)}px;
`;

export const GoogleButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 10px;
  height: ${rs(46)}px;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  width: ${rs(46)}px;
`;
