import { theme } from 'config/theme';
import { TextStyle, TextProps } from 'react-native';

export const TypographyVariant = {
  regular: 'Poppins-Regular',
  bold: 'Poppins-SemiBold',
  extraBold: 'Poppins-Bold',
  light: 'Poppins-Light',
};

export type StyledTextProps = {
  color: keyof typeof theme.colors;
  lineSpacing: string;
  margin: number;
  marginEnd: number;
  marginStart: number;
  size: number;
  textAlign: 'left' | 'right' | 'center';
  variant: keyof typeof TypographyVariant;
} & TextProps;

export interface TypographyProps {
  children: React.ReactNode;
  color: keyof typeof theme.colors;
  lineSpacing: string;
  margin: number;
  marginEnd: number;
  marginStart: number;
  size: number;
  style: TextStyle;
  textAlign: 'left' | 'right' | 'center';
  variant: keyof typeof TypographyVariant;
}
