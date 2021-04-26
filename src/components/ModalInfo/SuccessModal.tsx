import * as React from 'react';
import ModalInfo, { IBaseModalProps } from './ModalInfo';

const SuccessModal = (props: IBaseModalProps) => {
  const {
    actionOnPress,
    actionText,
    onClose,
    subtitle,
    title,
    visible,
  } = props;

  return (
    <ModalInfo
      actionOnPress={actionOnPress}
      actionText={actionText}
      emphasis="SUCCESS"
      onClose={onClose}
      subtitle={subtitle}
      title={title}
      visible={visible}
    />
  );
};

export default SuccessModal;
