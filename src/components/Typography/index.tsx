/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { StyledText } from "./styles";
import { TypographyProps } from "./types";

const Typography = ({ children, ...props }: TypographyProps) =>
  !children ? null : <StyledText {...props}>{children}</StyledText>;

Typography.defaultProps = {
  children: null,
  color: "black",
  margin: 0,
  marginEnd: 0,
  marginStart: 0,
  lineSpacing: undefined,
  size: 12,
  style: {},
  textAlign: "left",
  variant: "regular",
};

export default Typography;
