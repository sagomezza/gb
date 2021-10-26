import React from 'react';

import Spacing from 'components/Spacing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';
import { ButtonModal, CaptionAlert, ContainerContentModal, TitleConfirm } from './styles';

type ContentModalErrorProps = {
  onButtonPress: () => void;
  text: string;
  textButton: string;
  title: string;
};

const ContentModalError = ({ onButtonPress, text, textButton, title }: ContentModalErrorProps) => (
  <ContainerContentModal>
    <Icon color={theme.colors.greenPrimary} name="logout" size={50} />
    <TitleConfirm>{title}</TitleConfirm>
    <Spacing />
    <CaptionAlert>{text}</CaptionAlert>
    <Spacing />
    <ButtonModal onPress={onButtonPress}>{textButton}</ButtonModal>
  </ContainerContentModal>
);

export default ContentModalError;
