import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
export const KeyboardAwareScrollViewContainer = styled(
  KeyboardAwareScrollView
).attrs({
  flex: 1,
  width: "100%",
  height: SCREEN_HEIGHT,
})``;

const height = SCREEN_HEIGHT * 0.095;
export const ContentStyles = {
  height: SCREEN_HEIGHT - height,
};
