import React, { useCallback, useState } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import * as ImageSelector from "react-native-image-picker";
import {
  ButtonsCard,
  CardTitle,
  Fallback,
  OptionButton,
  OptionButtonContentStyle,
} from "./styles";

interface IImagePickerProps {
  children: React.ReactElement;
  onChange: (imageUri: string) => void;
  title?: string;
}

const ImagePicker: React.FC<IImagePickerProps> = ({ children, onChange, title }: IImagePickerProps) => {

  const [showModal, toggleModal] = useState(false);

  const sendImageToParent = useCallback((selectedImageUri) => {
    if (onChange) {
      onChange(selectedImageUri);
    }
    toggleModal(false);
  }, [onChange]);

  const pickImage = () => {
    ImageSelector.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    }, (result) => {
      if (!result.didCancel) {
        sendImageToParent(result.uri);
      } else {
        toggleModal(true);
      }
    });
  };

  const takePhoto = () => {
    ImageSelector.launchCamera({
      mediaType: 'photo',
      quality: 1,
    }, function(result){
      if (!result.didCancel) {
        sendImageToParent(result.uri);
      } else {
        toggleModal(true);
      }
    });
  };

  return (
    <React.Fragment>
      <Modal
        animationType="slide"
        onRequestClose={() => toggleModal(false)}
        transparent={true}
        visible={showModal}
      >
        <Fallback>
          <ButtonsCard>

            {title && (<CardTitle size={14}>{title}</CardTitle>)}

            <OptionButton
              contentStyle={OptionButtonContentStyle}
              icon="camera"
              mode="outlined"
              onPress={takePhoto}
              uppercase={false}
            >
              Camera
            </OptionButton>

            <OptionButton
              contentStyle={OptionButtonContentStyle}
              icon="image"
              mode="outlined"
              onPress={pickImage}
              uppercase={false}
            >
              Gallery
            </OptionButton>

            <OptionButton
              contentStyle={OptionButtonContentStyle}
              icon="close"
              mode="outlined"
              onPress={() => toggleModal(false)}
              uppercase={false}
            >
              Close
            </OptionButton>
          </ButtonsCard>
        </Fallback>
      </Modal>

      <TouchableOpacity onPress={() => toggleModal(true)}>
        {children}
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default ImagePicker;
