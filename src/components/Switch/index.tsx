/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import styled from "styled-components/native";
import { Switch as SwitchPaper } from "react-native-paper";
import { theme } from "config/theme";
import { Paragraph } from "../Paragraph";

const SwitchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const SwitchGroup = ({ text, ...otherProps }) => (
  <SwitchContainer>
    <Paragraph>{text}</Paragraph>
    <SwitchPaper color={theme.colors.primary} {...otherProps} />
  </SwitchContainer>
);

const Switch = (props) => (
  <SwitchPaper color={theme.colors.primary} {...props} />
);

export default Switch;
