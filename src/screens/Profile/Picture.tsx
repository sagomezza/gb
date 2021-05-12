import React from 'react';
import { Image } from 'react-native';
import AvatarPicker from 'components/AvatarPicker';
import DefaultAvatar from "assets/imgs/default-avatar.png";
const DEFAULT_AVATAR_URI = Image.resolveAssetSource(DefaultAvatar).uri;

const ProfilePicture = () => {
  return (
    <AvatarPicker
      defaultUri={DEFAULT_AVATAR_URI}
      onChange={() => { }}
      size={150}
    />
  );
}

export default ProfilePicture;