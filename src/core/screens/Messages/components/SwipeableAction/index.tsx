import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ActionContainer, ActionText } from './styles';

type SwipeableActionProps = {
  backgroundColor: string;
  onPress: () => void;
  text: string;
};

const SwipeableAction: React.FC<SwipeableActionProps> = ({
  backgroundColor,
  onPress,
  text,
}: SwipeableActionProps) => (
  <TouchableOpacity onPress={onPress}>
    <ActionContainer backgroundColor={backgroundColor}>
      <ActionText>{text}</ActionText>
    </ActionContainer>
  </TouchableOpacity>
);

export default SwipeableAction;
