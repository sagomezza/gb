/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { View, TextStyle } from 'react-native';
import { TextInput as TextInputPaper } from 'react-native-paper';
import Typography from 'components/Typography';
import { Controller } from 'react-hook-form';
import { theme } from 'config/theme';
import type {
  KeyboardType,
  ReturnKeyType,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { styles, TextInputStyled } from './styles';
import { TypographyProps } from '../Typography/types';

export const TypographyVariant = {
  regular: 'Poppins-Regular',
  bold: 'Poppins-SemiBold',
  extraBold: 'Poppins-Bold',
  light: 'Poppins-Light',
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
  textAlign?: 'left' | 'right' | 'center';
  variant?: keyof typeof TypographyVariant;
}

interface Props {
  autoFocus?: boolean;
  containerStyle?: Object;
  control: any;
  defaultValue?: string;
  error?: string;
  errorText?: string;
  inputStyle?: TextStyleProp;
  keyboardType?: KeyboardType;
  label?: string;
  labelProps?: ILabelProps;
  mode?: string;
  multiline?: boolean;
  name: string;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  rules?: Object;
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
  errorText = '',
  label = '',
  labelProps = defaultLabelProps,
  name,
  placeholder = '',
  rules = {},
  autoFocus = false,
  keyboardType = 'default',
  returnKeyType = 'default',
  multiline = false,
}: Props): ReactElement => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field: { onBlur, onChange, value } }) => (
      <View style={[styles.inputContainer, multiline ? styles.multiline : {}, containerStyle]}>
        {!!label && <Typography {...labelProps}>{label}</Typography>}
        <TextInputPaper
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          mode="outlined"
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.grayPlaceholder}
          render={(props) => (
            <TextInputStyled
              {...props}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.grayPlaceholder}
              style={[multiline ? styles.multiline : {}]}
            />
          )}
          returnKeyType={returnKeyType}
          style={styles.inputPaper}
          textAlign="left"
          theme={{
            colors: {
              text: theme.colors.text,
              primary: theme.colors.greenPrimary,
            },
          }}
          value={value}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
        />
        {!!error && (
          <Typography color="error" size={11}>
            {errorText}
          </Typography>
        )}
      </View>
    )}
    rules={rules}
  />
);
