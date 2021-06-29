import SelectBox from 'react-native-multi-selectbox';
import { OutlinedButton } from 'components/Button';
import { theme } from 'config/theme';
import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const ButtonSignup = styled(OutlinedButton).attrs(() => ({
  labelStyle: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontWeight: '800',
    fontSize: nlz(20),
    color: theme.colors.greenPrimary,
    height: rs(35),
  },
}))`
  border-color: ${({ theme: { colors } }) => colors.greenPrimary};
  border-radius: 10px;
  border-width: 5px;
  height: ${rs(64)}px;
  justify-content: center;
  margin-horizontal: ${rs(40)}px;
  margin-vertical: ${rs(40)}px;
`;

export const OnboardingTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.darkGreenSecondary};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(30)}px;
  font-weight: 600;
  text-align: center;
`;

export const OnboardingContainer = styled.View`
  height: 100%;
  justify-content: space-between;
  margin-horizontal: ${rs(20)}px;
  padding-top: ${rs(60)}px;
`;

export const SelectContainer = styled.View`
  bottom: ${rs(50)}px;
  margin-horizontal: ${rs(20)}px;
`;

export const SelectBoxStyled = styled(SelectBox).attrs(() => ({
  arrowIconColor: theme.colors.greenPrimary,
  containerStyle: {
    alignItems: 'center',
  },
  multiOptionContainerStyle: {
    backgroundColor: theme.colors.greenPrimary,
    height: rs(40),
  },
  multiOptionsLabelStyle: {
    fontSize: nlz(18),
  },
  optionContainerStyle: {
    backgroundColor: theme.colors.darkGreenSecondary,
    borderRadius: 10,
    marginVertical: rs(5),
    paddingLeft: rs(10),
  },
  optionsLabelStyle: {
    color: theme.colors.white,
    fontSize: nlz(16),
  },
  searchIconColor: theme.colors.greenPrimary,
  toggleIconColor: theme.colors.greenPrimary,
}))``;
