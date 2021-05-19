import { StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { Caption } from "components/Caption";
import { rs } from "../../utils/dimensions";

export const AlertIconImage = styled(Image)({
  width: rs(67),
  height: rs(67),
});

export const CaptionAlert = styled(Caption)({
  textAlign: "center",
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: rs(20),
    margin: rs(60),
    justifyContent: "center",
    alignItems: "center",
  },
  contentStyleButton: { width: rs(200) },
});
