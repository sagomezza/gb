import React from 'react';
import FullScreenModal from 'components/FullScreenModal';
import ContentModalChildren from 'components/ModalAlert/contentChildrenModal';

interface IGoPremiumModalProps {
  onClose: () => void;
  visible: boolean;
}

const GoPremiumModal: React.FC<IGoPremiumModalProps> = ({
  onClose,
  visible,
}: IGoPremiumModalProps) => (
  <FullScreenModal visible={visible} onClose={onClose}>
    <ContentModalChildren
      fullWidthButton
      text="You can post bulletins with your buddies and being a trainer"
      textButton="Subscribe me"
      title="Want to be premium?"
      onSubmit={() => {}}
    />
  </FullScreenModal>
);

export default GoPremiumModal;
