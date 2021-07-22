import { DefaultIcon } from 'components';
import React from 'react';
import Modal from 'react-native-modal';
import { IWithChildren } from 'utils/types';
import { BackdropContainer, CloseIconContainer, ContentContainer } from './styles';

interface IFullScreenModalProps extends IWithChildren {
  onClose: () => void;
  visible: boolean;
}

const FullScreenModal: React.FC<IFullScreenModalProps> = ({
  children,
  onClose,
  visible,
}: IFullScreenModalProps) => (
  <Modal isVisible={visible} swipeDirection="down" onBackdropPress={() => onClose()}>
    <BackdropContainer>
      <ContentContainer>
        {children}
        <CloseIconContainer>
          <DefaultIcon
            color="gray2"
            iconFamily="MaterialIcons"
            name="close"
            size={24}
            onPress={onClose}
          />
        </CloseIconContainer>
      </ContentContainer>
    </BackdropContainer>
  </Modal>
);

export default FullScreenModal;
