import { theme } from "config/theme";
import { Bubble } from "react-native-gifted-chat";
import styled from "styled-components/native";

export const ChatBubble = styled(Bubble).attrs(() => ({
  textStyle: {
    right: {
      color: theme.colors.white,
    },
  },
  wrapperStyle: {
    right: {
      backgroundColor: theme.colors.primary,
    },
  },
}))``;
