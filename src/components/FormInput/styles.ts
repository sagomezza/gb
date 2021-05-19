import { StyleSheet, View } from "react-native";
import { theme } from "config/theme";

import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { nlz, rs } from "../../utils/dimensions";

export const FormInput = styled(TextInput)`
  background-color: transparent;
  font-family: ${theme.fonts.light.fontFamily};
  font-size: ${nlz(18)}px;
  font-weight: ${theme.fonts.light.fontWeight};
  height: ${rs(60)}px;
  margin-vertical: ${rs(1)}px;
  padding-horizontal: 0;
  width: 100%;
`;

export const ContainerFormInput = styled(View)`
  width: 100%;
`;

export const styles = StyleSheet.create({
  label: {
    alignSelf: "flex-start",
  },
  textPaperInput: {
    fontSize: 14,
    height: 50,
  },
});
