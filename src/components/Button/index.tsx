/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Button } from 'react-native-paper';
import { ViewStyle, TextStyle } from 'react-native';
import { theme } from 'config/theme';
import { rs } from 'utils/dimensions';
import { styles } from './styles';

type ButtonProps = {
  children: any;
  color?: string;
  contentStyle?: ViewStyle;
  disabled?: boolean;
  fontRegular?: boolean;
  height?: number | string;
  icon?: string;
  labelStyle?: TextStyle;
  mode?: 'contained' | 'text' | 'outlined' | undefined;
  onPress?: () => void;
  rippleColor?: string;
  style?: ViewStyle;
  uppercase?: boolean;
};

export const PrimaryButton: React.FC<ButtonProps> = (props: ButtonProps) => <Button {...props} />;

export const BorderButton: React.FC<ButtonProps> = (props: ButtonProps) => <Button {...props} />;

export const SecondaryButton: React.FC<ButtonProps> = (props: ButtonProps) => <Button {...props} />;

export const LinkButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { fontRegular } = props;

  return (
    <Button
      {...props}
      labelStyle={fontRegular ? styles.labelStyleWithRegular : styles.labelStyleWithMedium}
    />
  );
};

export const OutlinedButton: React.FC<ButtonProps> = (props: ButtonProps) => <Button {...props} />;

PrimaryButton.defaultProps = {
  mode: 'contained',
  height: rs(60),
  uppercase: false,
  rippleColor: theme.colors.primary,
  color: theme.colors.primary,
  labelStyle: styles.labelStylePrimary,
  disabled: false,
  contentStyle: styles.contentStylePrimary,
  style: styles.buttonContainer,
};

BorderButton.defaultProps = {
  mode: 'outlined',
  height: rs(60),
  uppercase: false,
  rippleColor: theme.colors.primary,
  color: theme.colors.primary,
  labelStyle: styles.labelStyleBorder,
  disabled: false,
  contentStyle: styles.contentStylePrimary,
  style: styles.buttonContainerBorder,
};

SecondaryButton.defaultProps = {
  mode: 'contained',
  uppercase: false,
  rippleColor: theme.colors.onSecondary,
  labelStyle: styles.labelStyleSecondary,
  contentStyle: styles.contentStyleSecondary,
  color: theme.colors.secondary,
};

LinkButton.defaultProps = {
  mode: 'text',
  rippleColor: 'transparent',
  uppercase: false,
  fontRegular: false,
  contentStyle: styles.contentStyleLink,
};

OutlinedButton.defaultProps = {
  mode: 'outlined',
  rippleColor: 'transparent',
  uppercase: false,
  labelStyle: styles.labelStyleOutlined,
  contentStyle: styles.contentStyleOutlined,
  style: {
    borderColor: theme.colors.primary,
  },
};
