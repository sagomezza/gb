import React from 'react';

export default () => {
  const [modal, setModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(false);

  const closeModal = () => {
    setModal(false);
    setModalContent(false);
  };

  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, closeModal, modalContent };
};
