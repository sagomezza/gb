import { PrimaryButton } from 'components/Button';
import { theme } from 'config/theme';
import FormInput from 'components/FormInput';
import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { H, nlz, rs } from 'utils/dimensions';

export const HeaderContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? rs(40) : rs(20)}px;
`;

export const ButtonSubscribe = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: '700',
    fontSize: nlz(20),
  },
}))`
  align-self: center;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border-radius: 24px;
  bottom: ${Platform.OS === 'ios' ? rs(20) : rs(40)}px;
  margin-horizontal: ${rs(20)}px;
  height: ${rs(62)}px;
  justify-content: center;
  width: ${rs(200)}px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
`;

export const SubscribePaymentsTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: 800;
  text-align: center;
`;

export const SubscribePaymentsSubTitle = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
  text-align: center;
`;

export const InputSubscribePayments = styled(FormInput).attrs(() => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    marginHorizontal: rs(50),
  },
  inputStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 0,
    fontFamily: theme.fonts.regular.fontFamily,
    fontSize: nlz(18),
    marginBottom: rs(6),
    fontWeight: theme.fonts.regular.fontWeight,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 6,
  },
}))``;

export const SubscribePaymentsContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  height: ${H}px;
`;

export const FormContainer = styled.View`
  height: ${H * 0.55}px;
  justify-content: space-between;
`;

export const CardContainer = styled.View`
  border-radius: 18px;
  elevation: 10;
  margin-horizontal: ${rs(50)}px;
  shadow-color: #000;
  shadow-offset: 3px;
  shadow-opacity: 0.3;
  shadow-radius: 3.5px;
`;

export const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 18,
    fontSize: nlz(14),
    fontFamily: theme.fonts.regular.fontFamily,
  },
  style: {
    height: Platform.OS === 'ios' ? rs(56) : rs(64),
  },
});
