import styled from "styled-components/native";
import { StyleSheet, View } from "react-native";
import Typography from "core/components/Typography";
import { rs } from "../../../utils/dimensions";
import { theme } from "../../../config/theme";
// eslint-disable-next-line import/no-cycle
import { TextInputNumber } from "./TextInputNumber";

export const IconContainer = styled(View)({
  position: "absolute",
  top: rs(20),
  right: rs(8),
  zIndex: 10,
});

export const CalendarContainer = styled(View)({
  position: "absolute",
  top: rs(80),
  right: 0,
  zIndex: 10,
  shadowOffset: { width: 3, height: 4 },
  shadowColor: theme.colors.black,
  shadowOpacity: 1.0,
});

export const Container = styled(View)({
  position: "relative",
  zIndex: 2,
});

export const TextInputNumberDate = styled(TextInputNumber)({
  flexGrow: 1,
  width: "100%",
  maxHeight: rs(50),
});

export const TextInputDateError = styled(Typography)({
  marginTop: rs(16),
});

export const PassCodeContainer = styled(Typography)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
});

export const styles = StyleSheet.create({
  generalStyles: {
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular.fontFamily,
    fontSize: rs(21),
    fontWeight: theme.fonts.regular.fontWeight,
  },
  textInput: {
    fontSize: rs(14),
    height: rs(50),
  },
  passInput: {
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular.fontFamily,
    fontSize: rs(28),
    fontWeight: theme.fonts.regular.fontWeight,
    height: rs(90),
    textAlign: "center",
    width: rs(55),
  },
  zeroSizes: {
    height: 0,
    width: 0,
  },
});
