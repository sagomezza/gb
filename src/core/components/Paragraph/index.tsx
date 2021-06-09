/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Paragraph as PaperElement } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "config/theme";
import { IWithChildren } from "utils/types";

const StyledParagraphPaper = styled(PaperElement)`
  color: #000000;
  color: ${(props: any) => props.color || theme.colors.text};
  font-family: ${theme.fonts.regular.fontFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: ${(props: any) => (props.center ? "center" : "left")};
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : "auto")};
  ${(props: any) => (props.center ? "margin: 0 auto;" : "")};
`;

export const Paragraph: React.FC<IWithChildren> = (props: IWithChildren) => {
  const { children } = props;
  return <StyledParagraphPaper {...props}>{children}</StyledParagraphPaper>;
};
