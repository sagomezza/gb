import React from 'react';
import Spacing from 'components/Spacing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'store/auth/authSelectors';
import { ActivityIndicator } from 'components';
import { ButtonModal, ContainerContentModal, TextAlert, TitleInput } from './styles';

type ContentConfirmCustomModal = {
  onButtonPress?: () => void;
  onDismiss: () => void;
  text: string;
  textButton: string;
  title: string;
};

const ContentConfirmCustomModal = ({
  onButtonPress,
  onDismiss,
  text,
  textButton,
  title,
}: ContentConfirmCustomModal) => {
  const isLoading = useSelector(getLoadingStatus);
  const onPressHandler = () => {
    if (onButtonPress) onButtonPress();
    onDismiss();
  };

  return (
    <ContainerContentModal>
      <Icon color={theme.colors.darkGreenModal} name="logout" size={50} />
      <TitleInput>{title}</TitleInput>
      <Spacing />
      <TextAlert>{text}</TextAlert>
      <Spacing />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ButtonModal onPress={onPressHandler}>{textButton}</ButtonModal>
      )}
    </ContainerContentModal>
  );
};
export default ContentConfirmCustomModal;
