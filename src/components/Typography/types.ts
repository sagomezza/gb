import { theme } from 'config/theme';
import { TextStyle, TextProps } from 'react-native';

export const TypographyVariant = {
  regular: 'Roboto',
  bold: 'Roboto',
  extraBold: 'Roboto',
  light: 'Roboto',
};

export type StyledTextProps = {
  color: keyof typeof theme.colors;
  textAlign: 'left' | 'right' | 'center';
  size: number;
  variant: keyof typeof TypographyVariant;
  margin: number;
  marginStart: number;
  marginEnd: number;
  lineSpacing: string;
} & TextProps;

export interface TypographyProps {
  color: keyof typeof theme.colors;
  variant: keyof typeof TypographyVariant;
  children: React.ReactNode;
  textAlign: 'left' | 'right' | 'center';
  size: number;
  style: TextStyle;
  margin: number;
  marginStart: number;
  marginEnd: number;
  lineSpacing: string;
}
