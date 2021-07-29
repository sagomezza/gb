import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const ContactsContainer = styled.View`
  flex: 1;
  padding-bottom: ${rs(20)}px;
`;

export const HeaderContainer = styled.View`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const NewMessageContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;

export const SearchInputContainer = styled.View`
  height: ${rs(40)}px;
  margin-bottom: ${rs(8)}px;
  margin-top: ${rs(24)}px;
  padding-horizontal: ${rs(16)}px;
  width: 100%;
`;
