/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from "react";
import { TextStyle } from "react-native";
import { Spacing } from "core/components";
import { Controller } from "react-hook-form";
import { theme } from "config/theme";
import type {
  KeyboardType,
  ReturnKeyType,
} from "react-native/Libraries/Components/TextInput/TextInput";
import type { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ContainerFormInput, Input, Label, styles } from "./styles";
import { TypographyProps } from "../../Typography/types";

export const TypographyVariant = {
  regular: "Roboto-Regular",
  bold: "Roboto-Bold",
  extraBold: "Roboto-Black",
  light: "Roboto-Light",
};

export interface ILabelProps {
  children?: React.ReactNode;
  color?: keyof typeof theme.colors;
  lineSpacing?: string;
  margin?: number;
  marginEnd?: number;
  marginStart?: number;
  size?: number;
  style?: TextStyle;
  textAlign?: "left" | "right" | "center";
  variant?: keyof typeof TypographyVariant;
}

interface IInputProps {
  autoFocus?: boolean;
  containerStyle?: Object;
  control: any;
  defaultValue?: string;
  errors?: object;
  input?: Object;
  inputStyle?: TextStyleProp;
  keyboardType?: KeyboardType;
  label?: string;
  labelProps?: ILabelProps;
  mode?: string;
  name: string;
  pattern?: Object;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  rules?: Object;
}

interface IRenderInputProps {
  field: {
    isFocused?: boolean;
    onChange?: () => void;
  };
}

const defaultLabelProps: TypographyProps = {
  children: null,
  color: "gray2",
  margin: 0,
  marginEnd: 0,
  marginStart: 0,
  lineSpacing: "0",
  size: 12,
  style: styles.label,
  textAlign: "left",
  variant: "regular",
};

export default ({
  containerStyle = {},
  control,
  defaultValue = "",
  errors = {},
  input = {},
  keyboardType = "default",
  label = "",
  labelProps = defaultLabelProps,
  name,
  pattern = {},
  placeholder = "",
  returnKeyType = "default",
  rules,
}: IInputProps): ReactElement => {
  const [focused, setFocused] = React.useState(false);
  return (
    <ContainerFormInput style={[containerStyle]}>
      {!!label && <Label {...labelProps}>{label}</Label>}
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={(props: IRenderInputProps) => (
          <Input
            {...props}
            isFocused={focused}
            keyboardType={keyboardType}
            mode="outlined"
            placeholder={placeholder || name}
            placeholderTextColor={theme.colors.gray3}
            returnKeyType={returnKeyType}
            style={[styles.textPaperInput]}
            textAlign="left"
            underlineColor={theme.colors.gray4}
            onBlur={() => setFocused(false)}
            onChangeText={(value) => props?.field?.onChange(value)}
            onFocus={() => setFocused(true)}
            {...input}
          />
        )}
        rules={{
          required: `${name} is required.`,
          pattern: {
            value: /$/i,
            message: `Enter a valid ${name}`,
            ...pattern,
          },
          ...rules,
        }}
      />
      <Spacing size={8} />
      {!!errors[name] && <Label color="error">{errors[name]?.message}</Label>}
    </ContainerFormInput>
  );
};
