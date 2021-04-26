import * as React from 'react';
import { Modal } from 'react-native';
import { FadedContainer } from './styles';
import BaseModalContent from './BaseModalContent';
export interface IBaseModalProps {
  actionOnPress?: () => void;
  actionText?: string;
  children?: any;
  onClose: () => void;
  subtitle: string;
  title: string;
  visible: boolean;
}
interface IModalInfoProps extends IBaseModalProps {
  emphasis: "SUCCESS" | "ERROR";
};

const ModalInfo = (props: IModalInfoProps) => {
  const {
    actionOnPress,
    actionText,
    children,
    emphasis,
    onClose,
    subtitle,
    title,
    visible,
  } = props;

  const renderChildren = React.useCallback(() => {
    return <React.Fragment>{children ?? null}</React.Fragment>;
  }, [children]);

  const renderDefaults = React.useCallback(() => {
    const DefaultsContent = (() => {
      return (
        <BaseModalContent
          actionOnPress={actionOnPress}
          actionText={actionText}
          emphasis={emphasis}
          onClose={onClose}
          subtitle={subtitle}
          title={title}
        />
      );
    })();

    return (
      <React.Fragment>{!children ? DefaultsContent : null}</React.Fragment>
    );
  }, [
    actionOnPress,
    actionText,
    children,
    emphasis,
    onClose,
    subtitle,
    title,
    visible,
  ]);

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => { }}
      transparent={true}
      visible={visible}
    >
      <FadedContainer>
        {renderChildren()}
        {renderDefaults()}
      </FadedContainer>
    </Modal>
  );
};

ModalInfo.defaultProps = {
  text: '',
};


export default ModalInfo;