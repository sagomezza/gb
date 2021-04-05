import { PrimaryButton } from 'components/Button';
import { Caption } from 'components/Caption';
import Spacing from 'components/Spacing';
import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import alertSrc from './alert.png';

const AlertIconImage = styled.Image`
  width: 67px;
  height: 67px;
`;

interface Props {
  text: string;
  textButton: string;
  visible: boolean;
  onDismiss: () => void;
  hideModal: () => void;
}

const Alert = ({ text, textButton, visible, onDismiss, hideModal }: Props) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 20,
      margin: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
          <AlertIconImage source={alertSrc} />
          <Spacing />
          <Caption style={{ textAlign: 'center' }}>{text}</Caption>
          <Spacing />
          <PrimaryButton contentStyle={{ width: 200 }} mode="contained" onPress={hideModal}>
            {textButton}
          </PrimaryButton>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default Alert;
