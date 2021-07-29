import React from 'react';
import FullScreenModal from 'components/FullScreenModal';
import ContentModalChildren from 'components/ModalAlert/contentChildrenModal';
import { useNavigation } from '@react-navigation/native';
import routes from 'config/routes';

interface IGoPremiumModalProps {
  onClose: () => void;
  visible: boolean;
}

const GoPremiumModal: React.FC<IGoPremiumModalProps> = ({
  onClose,
  visible,
}: IGoPremiumModalProps) => {
  const navigation = useNavigation();

  return (
    <FullScreenModal visible={visible} onClose={onClose}>
      <ContentModalChildren
        fullWidthButton
        text="You can post bulletins with your buddies and being a trainer"
        textButton="Subscribe me"
        title="Want to be premium?"
        onSubmit={() => {
          onClose();
          navigation.navigate(routes.GOPREMIUM);
        }}
      />
    </FullScreenModal>
  );
};

export default GoPremiumModal;
