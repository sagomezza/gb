import * as React from 'react';
import { TextInput as TextPaperInput } from 'react-native-paper';
import { theme } from 'config/theme';

export const styles = {
  fontFamily: theme.fonts.regular.fontFamily,
  fontWeight: theme.fonts.regular.fontWeight,
  color: theme.colors.text,
  backgroundColor: theme.colors.white,
  fontSize: 21,
};

const TextInput = (props) => (
  <TextPaperInput
    mode="outlined"
    underlineColor="#C4C4C4"
    placeholderTextColor="#C1BFBF"
    theme={{ colors: { primary: theme.colors.onPrimary, placeholder: '#C4C4C4' } }}
    {...props}
    style={[styles, { fontSize: 14, height: 50 }, props.style]}
  >
    {props.children}
  </TextPaperInput>
);

export { TextInputNumber } from './TextInputNumber';
export { TextInputPasscode, TextInput6Digit, TextInputHidden } from './TextInputPasscode';
export { TextInputDate } from './TextInputDate';
export default TextInput;
