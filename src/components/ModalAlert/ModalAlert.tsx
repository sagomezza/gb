import React from 'react';
import { View } from 'react-native';
import { ContainerModal } from './styles';
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

  return (
    <ContainerModal visible={visible} onDismiss={onDismiss}>
      {bodyModal()}
    </ContainerModal>
  );
};

export default ModalAlert;
