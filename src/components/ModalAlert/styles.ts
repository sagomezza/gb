import styled from 'styled-components/native';
import { PrimaryButton } from 'components/Button';
import { Caption } from 'components/Caption';
import { Modal } from 'react-native-paper';
import { nlz, rs } from '../../utils/dimensions';
import { theme } from '../../config/theme';

type ButtonModalProps = {
  fullWidth?: boolean;
  isError?: boolean;
};

type CaptionAlertProps = {
  textAlign?: string;
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
  color: ${({ theme: { colors } }) => colors.darkGreenModal};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(24)}px;
  font-weight: bold;
  text-align: center;
`;

export const TextAlert = styled.Text`
  color: ${({ theme: { colors } }) => colors.textModal};
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
    fontWeight: 'bold',
  },
}))<ButtonModalProps>`
  align-self: center;
  background-color: ${(props) => (props.isError ? theme.colors.error : '#57E2C8')};
  border-radius: 10px;
  height: ${rs(62)}px;
  justify-content: center;
  margin-horizontal: ${rs(20)}px;
  margin-vertical: ${rs(10)}px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : `${rs(200)}px`)};
`;

export const ContainerContentModal = styled.View`
  align-items: center;
`;

export const TitleAlertError = styled.Text`
  color: #ce2b15;
  font-family: ${({ theme: { fonts } }) => fonts.light.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.light.fontWeight};
  margin-top: ${rs(5)}px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const CaptionAlert = styled(Caption)(({ textAlign }: CaptionAlertProps) => ({
  textAlign: textAlign || 'center',
  fontFamily: theme.fonts.light.fontFamily,
  fontWeight: theme.fonts.light.fontWeight,
  fontSize: nlz(15),
  paddingTop: rs(8),
}));

export const TitleAlert = styled.Text`
  color: #ce2b15;
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(20)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
  margin-top: ${rs(5)}px;
`;

export const TitleConfirm = styled(TitleAlert)`
  color: ${({ theme: { colors } }) => colors.greenPrimary};
`;

export const CloseContainer = styled.TouchableOpacity`
  align-items: flex-end;
  width: 100%;
`;
