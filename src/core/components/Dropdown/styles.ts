import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components/native";
import { theme } from "../../../config/theme";
import { nlz, rs } from "../../../utils/dimensions";

export const DropDown = styled(DropDownPicker)({
  backgroundColor: theme.colors.white,
  width: "100%",
});

export const RightDropDownContent = styled(View)({
  flexDirection: "row",
  height: "100%",
});

export const VerticalLine = styled(View)({
  borderLeftWidth: 1,
  borderLeftColor: theme.colors.borderColor,
  marginRight: rs(12),
  marginVertical: rs(-13),
});

export const styles = StyleSheet.create({
  containerStyle: { height: rs(48) },
  itemStyle: {
    justifyContent: "flex-start",
    paddingHorizontal: rs(10),
    height: rs(38),
  },
  activeItemStyle: {
    backgroundColor: theme.colors.primary,
  },
  activeLabelStyle: {
    color: theme.colors.white,
  },
  dropDownStyle: {
    paddingHorizontal: 0,
  },
  globalTextStyle: {
    fontSize: nlz(15),
  },
  labelStyle: {
    color: theme.colors.black,
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: theme.fonts.regular.fontWeight,
    fontSize: nlz(17),
  },
  placeholderStyle: {
    color: theme.colors.placeholderTextColor,
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: theme.fonts.regular.fontWeight,
    fontSize: nlz(17),
  },
});
