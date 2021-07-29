import { theme } from 'config/theme';
import { Bubble } from 'react-native-gifted-chat';
import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const ChatContainer = styled.View`
  flex: 1;
`;

export const ChatBubble = styled(Bubble).attrs(() => ({
  textStyle: {
    right: {
      color: theme.colors.white,
    },
  },
  wrapperStyle: {
    left: {
      backgroundColor: theme.colors.lightGrey,
    },
    right: {
      backgroundColor: theme.colors.greenPrimary,
    },
  },
}))``;

export const IconContainer = styled.View`
  margin-horizontal: ${rs(10)}px;
`;
