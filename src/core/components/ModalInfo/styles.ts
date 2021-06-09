import styled from "styled-components/native";
import { View } from "react-native";
import { theme } from "config/theme";
import { rs } from "utils/dimensions";

export const ModalInfo = styled(View)({
  alingItems: "center",
  backgroundColor: theme.colors.error,
  bottom: 0,
  height: rs(90),
  justifyContent: "center",
  position: "absolute",
  width: "100%",
  zIndex: 5000,
});
