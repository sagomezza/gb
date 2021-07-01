import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { navigator } from 'navigation';
import { Icon, Container, IconContainer, FullWidthTouchable } from './styles';

interface Props {
  iconColor: string;
  iconStyle?: TextStyle;
  size: number;
  style?: ViewStyle;
}

const BackButton = ({ iconColor, iconStyle, size, style }: Props) => {
  const { goBack } = navigator();
  return (
    <FullWidthTouchable onPress={goBack}>
      <Container style={style}>
        <IconContainer>
          <Icon color={iconColor} name="arrow-back-ios" size={size} style={iconStyle} />
        </IconContainer>
      </Container>
    </FullWidthTouchable>
  );
};

export default BackButton;
