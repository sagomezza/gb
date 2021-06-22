import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hideModalAlert } from 'store/app/appActions';
import { useDispatch } from 'react-redux';
import { ContainerModal, IconContainer } from './styles';
import ContentModalError from './contentErrorModal';

type ModalAlertProps = {
  hideModal: () => void;
  onDismiss: () => void;
  text: string;
  textButton: string;
  title: string;
  type: string;
  visible?: boolean;
};

const ModalAlert = ({
  hideModal,
  onDismiss,
  text,
  textButton,
  title,
  type,
  visible = false,
}: ModalAlertProps) => {
  const bodyModal = () => {
    if (type === 'error') {
      return (
        <ContentModalError
          hideModal={hideModal}
          text={text}
          textButton={textButton}
          title={title}
        />
      );
    }
    return <View />;
  };

  const dispatch = useDispatch();

  return (
    <ContainerModal visible={visible} onDismiss={onDismiss}>
      <IconContainer onPress={() => dispatch(hideModalAlert())}>
        <Icon color="black" name="close" size={24} />
      </IconContainer>
      {bodyModal()}
    </ContainerModal>
  );
};

export default ModalAlert;
