import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { theme } from 'config/theme';
import { navigator } from 'core/navigation';
import {
  Icon,
  Typography,
  Container,
  IconContainer,
  TextContainer,
  FullWidthTouchable,
} from './styles';

interface Props {
  iconColor: keyof typeof theme.colors;
  iconStyle: TextStyle;
  size: number;
  style: ViewStyle;
  testID?: string;
  text: string;
  textColor: keyof typeof theme.colors;
  textSize: number;
}

const BackButton = ({
  iconColor,
  iconStyle,
  size,
  style,
  testID,
  text,
  textColor,
  textSize,
}: Props) => {
  const { goBack } = navigator();
  return (
    <FullWidthTouchable testID={testID} onPress={goBack}>
      <Container style={style}>
        <IconContainer>
          <Icon color={iconColor} name="arrow-back" size={size} style={iconStyle} />
        </IconContainer>
        {!!text && (
          <TextContainer>
            <Typography color={textColor} size={textSize}>
              {text}
            </Typography>
          </TextContainer>
        )}
      </Container>
    </FullWidthTouchable>
  );
};

export default BackButton;
