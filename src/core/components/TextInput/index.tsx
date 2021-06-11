import * as React from 'react';
import { TextInput as TextPaperInput } from 'react-native-paper';
import { theme } from 'config/theme';
import { styles } from './styles';

const TextInput: React.FC = ({ children, placeholder, style }: any) => (
  <TextPaperInput
    mode="outlined"
    placeholder={placeholder}
    placeholderTextColor={theme.colors.beige}
    style={[styles.generalStyles, styles.textInput, style]}
    theme={{
      colors: {
        primary: theme.colors.onPrimary,
        placeholder: theme.colors.gray4,
      },
    }}
    underlineColor={theme.colors.gray4}
  >
    {children}
  </TextPaperInput>
);

export { TextInputNumber } from './TextInputNumber';
export { TextInputPasscode, TextInput6Digit, TextInputHidden } from './TextInputPasscode';
export { TextInputDate } from './TextInputDate';
export default TextInput;
