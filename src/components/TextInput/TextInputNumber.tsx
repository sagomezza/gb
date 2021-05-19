/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { TextInput as TextPaperInput } from "react-native-paper";
import { theme } from "config/theme";
// eslint-disable-next-line import/no-cycle
import { styles } from "./styles";

export const TextInputNumber = ({ children, style, ...otherProps }: any) => (
  <TextPaperInput
    {...otherProps}
    mode="outlined"
    placeholderTextColor={theme.colors.grayPlaceHolder}
    style={[styles.generalStyles, style]}
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
