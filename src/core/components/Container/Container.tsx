/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { ViewStyle } from "react-native";
import { Container as StyledContainer } from "./styles";

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  style: ViewStyle;
}

const Container = ({ children, ...props }: Props) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export default Container;
