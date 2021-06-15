import styled from 'styled-components/native';
import { PrimaryButton } from 'components/Button';
import { Modal } from 'react-native-paper';
import { nlz, rs } from '../../utils/dimensions';
import { theme } from '../../config/theme';

type ButtonModalProps = {
  isError?: boolean;
};

export const ContainerModal = styled(Modal).attrs(() => ({
  contentContainerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    margin: rs(40),
    padding: rs(20),
  },
}))``;

export const TitleInput = styled.Text`
  color: #3ea997;
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: 500;
  margin-top: ${rs(5)}px;
  text-align: center;
`;

export const TextAlert = styled.Text`
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
  text-align: center;
`;

export const ButtonModal = styled(PrimaryButton).attrs(() => ({
  labelStyle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium.fontFamily,
    fontSize: nlz(16),
    fontWeight: theme.fonts.medium.fontWeight,
  },
}))<ButtonModalProps>`
  background-color: ${(props) => (props.isError ? theme.colors.error : '#57E2C8')};
  border-radius: 10px;
  height: ${rs(62)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
  margin-vertical: ${rs(10)}px;
  width: ${rs(200)}px;
`;

export const ContainerContentModal = styled.View`
  align-items: center;
`;

export const TitleAlertError = styled.Text`
  color: ${({ theme: { colors } }) => colors.error};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
  margin-top: ${rs(5)}px;
`;
