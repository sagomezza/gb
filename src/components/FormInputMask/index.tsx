/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { View, TextStyle } from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import { Spacing } from 'components';
import { Controller } from 'react-hook-form';
import { theme } from 'config/theme';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import type {
  KeyboardType,
  ReturnKeyType,
} from 'react-native/Libraries/Components/TextInput/TextInput';

import { styles, Label } from './styles';

import { TypographyProps } from '../Typography/types';

export const TypographyVariant = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  extraBold: 'Roboto-Black',
  light: 'Roboto-Light',
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
  errors?: any;
  formState?: any;
  inputStyle?: TextStyleProp;
  keyboardType?: KeyboardType;
  label?: string;
  labelProps?: ILabelProps;
  mask?: string;
  mode?: string;
  name: string;
  pattern?: Object;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  rules?: Object;
  textAlign?: 'left' | 'right' | 'center';
  type?: TextInputMaskTypeProp;
}

interface IRenderInputProps {
  field?: any;
  onChange?: () => void;
  style?: any;
  value?: any;
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
  autoFocus = false,
  type = 'custom',
  mask,
  containerStyle = {},
  control,
  defaultValue = '',
  errors = {},
  formState = {},
  label = '',
  labelProps = defaultLabelProps,
  inputStyle = {},
  name,
  pattern = {},
  placeholder = '',
  rules = {},
  keyboardType = 'default',
  returnKeyType = 'default',
  textAlign = 'left',
}: Props): ReactElement => (
  <View style={[styles.container, containerStyle]}>
    {!!label && <Label {...labelProps}>{label}</Label>}
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={(props: IRenderInputProps) => (
        <TextInputMask
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          options={{
            mask,
          }}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray3}
          returnKeyType={returnKeyType}
          style={[
            styles.inputStyles,
            inputStyle,
            formState.isDirty && formState.isValid ? styles.isTouched : '',
          ]}
          textAlign={textAlign}
          type={type}
          value={props?.field?.value}
          onChangeText={(value) => props?.field?.onChange(value)}
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
  </View>
);
