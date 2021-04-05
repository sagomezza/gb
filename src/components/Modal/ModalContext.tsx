import * as React from 'react';
import { Modal as ModalPaper, Portal } from 'react-native-paper';
import useModal from './useModal';

let ModalContext;
const { Provider } = (ModalContext = React.createContext({}));

const ModalProvider = ({ children }) => {
  const { modal, handleModal, closeModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, closeModal, modalContent }}>
      <GlobalModal />
      {children}
    </Provider>
  );
};

const GlobalModal = () => {
  const { modal, modalContent } = React.useContext(ModalContext);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  };

  if (!modal) return null;

  return (
    <Portal>
      <ModalPaper visible={modal} contentContainerStyle={containerStyle}>
        {modalContent}
      </ModalPaper>
    </Portal>
  );
};

export { ModalContext, ModalProvider };
