import styled from 'styled-components/native';
import { Body } from 'layout/default';

import { ImageBackground } from 'react-native';
import { theme } from 'config/theme';
import { nlz, rs, W } from 'utils/dimensions';
import { OutlinedButton } from 'components/Button';

export const HeaderBackground = styled(ImageBackground).attrs(() => ({
  imageStyle: {
    resizeMode: 'cover',
  },
}))`
  height: ${rs(245)}px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: ${W}px;
`;

export const ContainerText = styled.View`
  flex: 1;
  justify-content: center;
  margin-horizontal: ${rs(40)}px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(40)}px;
  font-weight: 500;
`;

export const HeaderSubtitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(17)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${rs(20)}px;
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

export const ParagraphSignup = styled.Text`
  color: ${({ theme: { colors } }) => colors.gray1};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(15)}px;
  font-weight: 400;
  text-align: center;
`;

export const ContainerSignup = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
  padding-bottom: ${rs(30)}px;
  position: relative;
`;

export const SignupBody = styled(Body)`
  align-items: center;
  justify-content: center;
  margin-top: ${rs(230)}px;
  padding-horizontal: ${rs(60)}px;
`;

export const ContainerForm = styled.View`
  height: auto;
  margin-top: ${rs(20)}px;
  width: 100%;
`;

export const ButtonSignup = styled(OutlinedButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: '800',
    fontSize: nlz(20),
    color: theme.colors.greenPrimary,
  },
}))`
  border-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: 10px;
  border-width: 4px;
  height: ${rs(64)}px;
  justify-content: center;
  margin-horizontal: ${rs(10)}px;
`;
