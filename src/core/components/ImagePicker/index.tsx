import React, { useCallback, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import * as ImageSelector from 'react-native-image-picker';
import { ButtonsCard, CardTitle, Fallback, OptionButton, OptionButtonContentStyle } from './styles';

interface IImagePickerProps {
  children: React.ReactElement;
  onChange: (imageUri: string) => void;
  title?: string;
}

const ImagePicker: React.FC<IImagePickerProps> = ({
  children,
  onChange,
  title,
}: IImagePickerProps) => {
  const [showModal, toggleModal] = useState(false);

  const sendImageToParent = useCallback(
    (selectedImageUri) => {
      if (onChange) {
        onChange(selectedImageUri);
      }
      toggleModal(false);
    },
    [onChange],
  );

  const pickImage = () => {
    ImageSelector.launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (result) => {
        if (!result.didCancel) {
          sendImageToParent(result.uri);
        } else {
          toggleModal(true);
        }
      },
    );
  };

  const takePhoto = () => {
    ImageSelector.launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (result) => {
        if (!result.didCancel) {
          sendImageToParent(result.uri);
        } else {
          toggleModal(true);
        }
      },
    );
  };

  return (
    <>
      <Modal
        transparent
        animationType="slide"
        visible={showModal}
        onRequestClose={() => toggleModal(false)}
      >
        <Fallback>
          <ButtonsCard>
            {title && <CardTitle size={14}>{title}</CardTitle>}

            <OptionButton
              contentStyle={OptionButtonContentStyle}
              icon="camera"
              mode="outlined"
              uppercase={false}
              onPress={takePhoto}
            >
              Camera
            </OptionButton>

            <OptionButton
              contentStyle={OptionButtonContentStyle}
              icon="image"
              mode="outlined"
              uppercase={false}
              onPress={pickImage}
            >
              Gallery
            </OptionButton>

            <OptionButton
              contentStyle={OptionButtonContentStyle}
              icon="close"
              mode="outlined"
              uppercase={false}
              onPress={() => toggleModal(false)}
            >
              Close
            </OptionButton>
          </ButtonsCard>
        </Fallback>
      </Modal>

      <TouchableOpacity onPress={() => toggleModal(true)}>{children}</TouchableOpacity>
    </>
  );
};

export default ImagePicker;
