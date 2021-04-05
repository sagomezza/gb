import * as React from 'react';
import { TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Icon, Typography, Container, IconContainer, TextContainer } from './styles';
import { theme } from 'config/theme';
import { navigator } from 'navigation';

interface Props {
  text: string;
  style: ViewStyle;
  iconStyle: TextStyle;
  textSize: number;
  size: number;
  iconColor: keyof typeof theme.colors;
  onPress: () => void;
  textColor: keyof typeof theme.colors;
  testID?: string;
}

const BackButton = ({
  text,
  style,
  iconStyle,
  textSize,
  size,
  iconColor,
  onPress,
  textColor,
  testID,
}: Props) => {
  const { goBack } = navigator();
  return (
    <TouchableOpacity testID={testID} onPress={goBack} style={{ width: '100%' }}>
      <Container style={style}>
        <IconContainer>
          <Icon name="arrow-back" size={size} color={iconColor} style={iconStyle} />
        </IconContainer>
        {!!text && (
          <TextContainer>
            <Typography size={textSize} color={textColor}>
              {text}
            </Typography>
          </TextContainer>
        )}
      </Container>
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  text: '',
  style: {},
  iconStyle: {},
  textSize: 18,
  size: 20,
  iconColor: theme.colors.primary,
  textColor: 'primary',
  onPress: () => {},
  testID: null,
};

export default BackButton;
