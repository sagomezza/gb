import React from 'react';
import { Image } from 'react-native';
import AvatarPicker from 'core/components/AvatarPicker';
import DefaultAvatar from 'assets/imgs/default-avatar.png';

const DEFAULT_AVATAR_URI = Image.resolveAssetSource(DefaultAvatar).uri;

const ProfilePicture = () => (
  <AvatarPicker defaultUri={DEFAULT_AVATAR_URI} size={150} onChange={() => {}} />
);

export default ProfilePicture;
