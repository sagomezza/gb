import { PrimaryButton } from 'components/Button';
import { theme } from 'config/theme';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { H, nlz, rs, W } from 'utils/dimensions';

type TimeTextProps = {
  isTime?: boolean;
};

export const HeaderContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? rs(40) : rs(20)}px;
`;

export const AddActivityTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.greenSecondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(22)}px;
  font-weight: 400;
  text-align: left;
`;

export const ButtonForm = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: '700',
    fontSize: nlz(16),
  },
}))`
  background-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: 9px;
  height: ${rs(62)}px;
  justify-content: center;
  margin-horizontal: ${rs(40)}px;
`;

export const AddActivityContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  height: ${Platform.OS === 'ios' ? H * 0.9 : H * 0.96}px;
  padding-horizontal: ${rs(20)}px;
  width: ${W}px;
`;

export const TimeContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${rs(4)}px;
`;

export const TimeText = styled.Text<TimeTextProps>`
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${(props) => (props.isTime ? 700 : 400)};
  text-align: left;
`;

export const FormContainer = styled.View`
  margin-horizontal: ${rs(20)}px;
`;

export const SeparatorTime = styled.Text`
  color: #d5d5d5;
  font-size: ${nlz(20)}px;
  letter-spacing: ${Platform.OS === 'ios' ? rs(8) : rs(10)}px;
  margin-bottom: ${rs(14)}px;
  position: relative;
  right: 30px;
  width: ${W}px;
`;

export const TitleDate = styled.Text`
  color: ${({ theme: { colors } }) => colors.darkGreenSecondary};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(24)}px;
  font-weight: 700;
  text-align: left;
`;

export const TextDate = styled.Text`
  color: ${({ theme: { colors } }) => colors.textModal};
  font-family: ${({ theme: { fonts } }) => fonts.regular.fontFamily};
  font-size: ${nlz(17)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.regular.fontWeight};
  padding-top: ${rs(5)}px;
  text-align: left;
`;

export const SingleInputContainer = styled.View`
  height: ${rs(60)}px;
  margin-bottom: ${rs(24)}px;
  width: 100%;
`;

export const MultilineInputContainer = styled.View`
  height: ${rs(120)}px;
  margin-bottom: ${rs(20)}px;
  width: 100%;
`;
