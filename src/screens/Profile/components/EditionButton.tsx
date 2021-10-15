import React from 'react';
import { EditionButton as BaseEditionButton, EditionButtonLabel } from '../styles';

interface IEditionButtonProps {
  onPress: () => void;
}

const EditionButton: React.FC<IEditionButtonProps> = ({ onPress }: IEditionButtonProps) => (
  <BaseEditionButton onPress={onPress}>
    <EditionButtonLabel>Edit Profile</EditionButtonLabel>
  </BaseEditionButton>
);

export default EditionButton;
