/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import Spacing from 'components/Spacing';
import Typography from 'components/Typography';
import { Controller } from 'react-hook-form';
import { theme } from 'config/theme';
import { TextStyle } from 'react-native';
import type {
  KeyboardType,
  ReturnKeyType,
} from 'react-native/Libraries/Components/TextInput/TextInput';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { styles, InputLogin, ContainerInputLogin } from './styles';
import { TypographyProps } from '../Typography/types';

export const TypographyVariant = {
  regular: 'Gibson-Regular',
  bold: 'Gibson-bold',
  extraBold: 'Gibson-Black',
  light: 'Gibson-Light',
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
  autoCapitalize?: string;
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
  name: string;
  placeholder?: string;
  returnKeyType?: ReturnKeyType;
  rules?: Object;
  secureTextEntry?: boolean;
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
  control,
  defaultValue = '',
  errorText = '',
  label = '',
  labelProps = defaultLabelProps,
  name,
  placeholder = '',
  rules = {},
  autoFocus = false,
  keyboardType = 'default',
  returnKeyType = 'default',
  secureTextEntry = false,
}: Props): ReactElement => (
  <Controller
    control={control}
    defaultValue={defaultValue}
    name={name}
    render={({ field: { onBlur, onChange, value } }) => (
      <ContainerInputLogin>
        {!!label && <Typography {...labelProps}>{label}</Typography>}
        <InputLogin
          autoCapitalize="none"
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          mode="flat"
          placeholder={placeholder}
          placeholderTextColor={theme.colors.white}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          textAlign="left"
          theme={{
            colors: {
              text: theme.colors.white,
              placeholder: theme.colors.white,
              primary: theme.colors.greenPrimary,
            },
          }}
          underlineColor={theme.colors.greenPrimary}
          value={value}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
        />
        <Spacing size={8} />
        {!!errorText && (
          <Typography color="error" size={11}>
            {errorText}
          </Typography>
        )}
      </ContainerInputLogin>
    )}
    rules={rules}
  />
);
