/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { TextStyle } from "react-native";
import Typography from "../Typography";

export const TypographyVariant = {
  regular: "Roboto-Regular",
  bold: "Roboto-Bold",
  extraBold: "Roboto-Black",
  light: "Roboto-Light",
};

export interface IDefaultLabelProps {
  children?: React.ReactNode;
  lineSpacing?: string;
  margin?: number;
  marginEnd?: number;
  marginStart?: number;
  size?: number;
  style?: TextStyle;
  textAlign?: "left" | "right" | "center";
  variant?: keyof typeof TypographyVariant;
}

export const Label = (props) => {
  const { textLabel } = props;
  return <Typography {...props}>{textLabel}</Typography>;
};
