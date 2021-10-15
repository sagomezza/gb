import { TextProps } from 'react-native';

export interface ITextProps extends TextProps {
  bold?: boolean;
  children?: Node | string | number | string[];
  extraLight?: boolean;
  italic?: boolean;
  light?: boolean;
  semiBold?: boolean;
  title?: string | number;
}
