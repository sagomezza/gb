import ImagePicker from 'components/ImagePicker';
import React, { useEffect, useState } from 'react';
import { Avatar } from "react-native-paper";
import { Image } from 'react-native';

interface IAvatarPickerProps {
  defaultUri?: string;
  size?: number;
  onChange: (newImageUri: string) => void;
}

const AvatarPicker: React.FC<IAvatarPickerProps> = ({ defaultUri, size = 128, onChange }: IAvatarPickerProps) => {

  const [selectedUri, setUri] = useState(defaultUri || '');

  useEffect(() => {
    if (onChange) {
      onChange(selectedUri);
    }
  }, [selectedUri]);

  return (
    <ImagePicker onChange={(newImageUri) => setUri(newImageUri)}>
      <Avatar.Image
        size={size}
        source={{ uri: selectedUri }}
      />
    </ImagePicker>
  );
};

export default AvatarPicker;
