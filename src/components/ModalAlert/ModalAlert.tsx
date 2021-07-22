import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ContainerModal, IconContainer } from './styles';
import ContentModalError from './contentErrorModal';
import ContentModalChildren from './contentChildrenModal';
import ContentModalSuccess from './contentSuccessModal';

type ModalAlertProps = {
  children?: React.ReactNode | React.ReactNodeArray;
  fullWidthButton?: boolean;
  hideModal: () => void;
  onDismiss: () => void;
  onSubmit?: () => void;
  text: string;
  textButton: string;
  title: string;
  type: string;
  visible?: boolean;
};

const ModalAlert = ({
  children,
  fullWidthButton,
  hideModal,
  onDismiss,
  onSubmit,
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
    if (type === 'content') {
      return (
        <ContentModalChildren
          fullWidthButton={fullWidthButton}
          text={text}
          textButton={textButton}
          title={title}
          onSubmit={onSubmit}
        >
          {children}
        </ContentModalChildren>
      );
    }
    return <ContentModalSuccess text={text} title={title} />;
  };

  return (
    <ContainerModal visible={visible} onDismiss={onDismiss}>
      <IconContainer onPress={onDismiss}>
        <Icon color="black" name="close" size={24} />
      </IconContainer>
      {bodyModal()}
    </ContainerModal>
  );
};

export default ModalAlert;
