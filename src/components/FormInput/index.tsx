/* eslint-disable react/display-name */
// REACT
import React, { ReactElement } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { TextInput as TextPaperInput } from 'react-native-paper';

import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import type {
  KeyboardType,
  ReturnKeyType,
} from 'react-native/Libraries/Components/TextInput/TextInput';

// COMPONENTS
import Typography from 'components/Typography';

// FORM
import { Controller } from 'react-hook-form';

// STYLES
import { styles } from './styles';

// TYPES
import { TypographyProps } from '../Typography/types';

import { theme } from 'config/theme';
import { TextStyle } from 'react-native';

export const TypographyVariant = {
  regular: 'Roboto',
  bold: 'Roboto',
  extraBold: 'Roboto',
  light: 'Roboto',
};

const inputStyles = {
  fontFamily: theme.fonts.regular.fontFamily,
  fontWeight: theme.fonts.regular.fontWeight,
  color: theme.colors.text,
  backgroundColor: theme.colors.white,
  fontSize: 21,
};

export interface labelProps {
  color?: keyof typeof theme.colors;
  variant?: keyof typeof TypographyVariant;
  children?: React.ReactNode;
  textAlign?: 'left' | 'right' | 'center';
  size?: number;
  style?: TextStyle;
  margin?: number;
  marginStart?: number;
  marginEnd?: number;
  lineSpacing?: string;
}

interface Props {
  containerStyle?: Object;
  control: any;
  defaultValue?: string;
  error?: string;
  inputStyle?: TextStyleProp;
  label?: string;
  labelProps?: labelProps;
  mode?: string;
  name: string;
  placeholder?: string;
  rules?: Object;
  autoFocus?: boolean;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
}

const defaultLabelProps: TypographyProps = {
  children: null,
  color: 'gray2',
  margin: 0,
  marginEnd: 0,
  marginStart: 0,
  lineSpacing: '0',
  size: 12,
  style: styles.label,
  textAlign: 'left',
  variant: 'regular',
};

export default ({
  containerStyle = {},
  control,
  defaultValue = '',
  error = '',
  inputStyle = {},
  label = '',
  labelProps = defaultLabelProps,
  name,
  placeholder = '',
  rules = {},
  mode = 'outlined',
  autoFocus = false,
  keyboardType = 'default',
  returnKeyType = 'default',
}: Props): ReactElement => {
  const errorMessage = (): string => {
    if (error === 'required') return 'Field required';
    return 'Invalid data';
  };

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ onChange, onBlur, value }) => (
        <View style={[styles.container, containerStyle]}>
          {!!label && <Typography {...labelProps}>{label}</Typography>}
          <TextPaperInput
            onBlur={onBlur}
            textAlign="left"
            onChangeText={(value) => onChange(value)}
            placeholder={placeholder}
            mode="outlined"
            underlineColor={theme.colors.gray4}
            placeholderTextColor={theme.colors.gray3}
            theme={{ colors: { primary: theme.colors.onPrimary, placeholder: theme.colors.gray4 } }}
            style={[inputStyles, { fontSize: 14, height: 50 }]}
            value={value}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
          />
          {!!error && (
            <Typography color="error" size={11}>
              {errorMessage()}
            </Typography>
          )}
        </View>
      )}
      rules={rules}
    />
  );
};
