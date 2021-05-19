/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Title as TitlePaper } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "config/theme";

const StyledTitlePaper = styled(TitlePaper)`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: 28px;
  font-weight: 700;
  text-align: ${(props: any) => (props.center ? "center" : "left")};
  width: ${(props: any) => (props.maxWidth ? `${props.maxWidth}px` : "auto")};
  ${(props: any) => (props.center ? "margin: 0 auto;" : "")};
`;

export const Title = ({ children, ...otherProps }) => (
  <StyledTitlePaper {...otherProps}>{children}</StyledTitlePaper>
);
