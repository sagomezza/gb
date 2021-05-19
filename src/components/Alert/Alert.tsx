import { PrimaryButton } from "components/Button";
import Spacing from "components/Spacing";
import * as React from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { AlertIconImage, CaptionAlert, styles } from "./styles";

const alertSrc = require("./alert.png");

interface Props {
  hideModal: () => void;
  onDismiss: () => void;
  text: string;
  textButton: string;
  visible: boolean;
}

const Alert = ({ hideModal, onDismiss, text, textButton, visible }: Props) => (
  <Provider>
    <Portal>
      <Modal
        contentContainerStyle={styles.container}
        visible={visible}
        onDismiss={onDismiss}
      >
        <AlertIconImage source={alertSrc} />
        <Spacing />
        <CaptionAlert>{text}</CaptionAlert>
        <Spacing />
        <PrimaryButton
          contentStyle={styles.contentStyleButton}
          mode="contained"
          onPress={hideModal}
        >
          {textButton}
        </PrimaryButton>
      </Modal>
    </Portal>
  </Provider>
);

export default Alert;
