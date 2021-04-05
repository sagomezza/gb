import * as React from 'react';
import { TextInput as TextPaperInput } from 'react-native-paper';
import { theme } from 'config/theme';
import { styles } from './index';

export const TextInputNumber = (props) => (
  <TextPaperInput
    mode="outlined"
    underlineColor="#C4C4C4"
    placeholderTextColor="#C1BFBF"
    theme={{ colors: { primary: theme.colors.onPrimary, placeholder: '#C4C4C4' } }}
    {...props}
    style={[styles, props.style]}
  >
    {props.children}
  </TextPaperInput>
);
