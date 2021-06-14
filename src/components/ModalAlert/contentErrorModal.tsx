import React from 'react';
import Spacing from 'components/Spacing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';
import { ButtonModal, CaptionAlert, ContainerContentModal, TitleAlertError } from './styles';

type ContentModalErrorProps = {
  hideModal: () => void;
  text: string;
  textButton: string;
  title: string;
};

const ContentModalError = ({ hideModal, text, textButton, title }: ContentModalErrorProps) => (
  <ContainerContentModal>
    <Icon color={theme.colors.error} name="cancel" size={50} />
    <TitleAlertError>{title}</TitleAlertError>
    <Spacing />
    <CaptionAlert>{text}</CaptionAlert>
    <Spacing />
    <ButtonModal isError onPress={hideModal}>
      {textButton}
    </ButtonModal>
  </ContainerContentModal>
);

export default ContentModalError;
