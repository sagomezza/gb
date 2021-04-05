import React from 'react';
// COMPONENTS
import Typography from '../Typography';
// TYPES
import { TypographyProps } from '../Typography/types';
import { styles } from './index';
import { TextStyle } from 'react-native';

export const TypographyVariant = {
  regular: 'nunito-regular',
  bold: 'nunito-bold',
  extraBold: 'nunito-extraBold',
  light: 'nunito-light',
};

export interface defaultLabelProps {
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

const defaultLabelProps: TypographyProps = {
  children: null,
  color: 'gray2',
  margin: 0,
  marginEnd: 0,
  marginStart: 0,
  lineSpacing: '0',
  size: 12,
  style: {},
  textAlign: 'left',
  variant: 'regular',
};

export const Label = (props) => (
  <Typography {...defaultLabelProps} {...props}>
    {props?.textLabel}
  </Typography>
);
