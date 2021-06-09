import ImagePicker from "core/components/ImagePicker";
import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";

interface IAvatarPickerProps {
  defaultUri?: string;
  onChange: (newImageUri: string) => void;
  size?: number;
}

const AvatarPicker: React.FC<IAvatarPickerProps> = ({
  defaultUri,
  onChange,
  size = 128,
}: IAvatarPickerProps) => {
  const [selectedUri, setUri] = useState(defaultUri || "");

  useEffect(() => {
    if (onChange) {
      onChange(selectedUri);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUri]);

  return (
    <ImagePicker onChange={(newImageUri) => setUri(newImageUri)}>
      <Avatar.Image size={size} source={{ uri: selectedUri }} />
    </ImagePicker>
  );
};

export default AvatarPicker;
