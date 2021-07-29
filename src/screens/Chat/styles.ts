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
      backgroundColor: theme.colors.lighterGrey,
      marginTop: rs(5),
      marginBottom: rs(5),
    },
    right: {
      backgroundColor: theme.colors.greenPrimary,
      marginTop: rs(5),
      marginBottom: rs(5),
    },
  },
}))``;

export const IconContainer = styled.View`
  align-items: center;
  flex-direction: row;
  height: 100%;
  margin-horizontal: ${rs(10)}px;
`;
