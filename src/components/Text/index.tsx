/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FONT_BOLD,
  FONT_SEMI_BOLD,
  FONT_ITALIC,
  FONT_EXTRA_LIGHT,
  FONT_LIGHT,
} from 'utils/typography';
import { CustomText } from './styles';
import { ITextProps } from './types';

const Text: React.FC<ITextProps> = ({
  bold,
  children,
  extraLight,
  italic,
  light,
  semiBold,
  style,
  title,
  ...props
}: ITextProps) => (
  <CustomText
    style={[
      bold && FONT_BOLD,
      semiBold && FONT_SEMI_BOLD,
      italic && FONT_ITALIC,
      light && FONT_LIGHT,
      extraLight && FONT_EXTRA_LIGHT,
      style,
    ]}
    {...props}
  >
    {title}
    {children}
  </CustomText>
);

export default Text;
