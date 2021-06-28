import React from 'react';
import Spacing from 'components/Spacing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';
import { TextAlert, ContainerContentModal, TitleInput } from './styles';

type ContentModalSuccessProps = {
  text: string;
  title: string;
};

const ContentModalSuccess = ({ text, title }: ContentModalSuccessProps) => (
  <ContainerContentModal>
    <Icon color={theme.colors.darkGreenModal} name="done" size={60} />
    <TitleInput>{title}</TitleInput>
    <Spacing />
    <TextAlert>{text}</TextAlert>
    <Spacing />
  </ContainerContentModal>
);

export default ContentModalSuccess;
