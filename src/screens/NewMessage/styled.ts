import SearchInput from 'components/SearchInput';
import { theme } from 'config/theme';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { rs, W } from 'utils/dimensions';

export const ContactsContainer = styled.View`
  flex: 1;
  padding-bottom: ${rs(20)}px;
`;

export const InputSearch = styled(SearchInput).attrs(() => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    borderWidth: 0.3,
    height: rs(40),
    marginHorizontal: rs(20),
    marginTop: rs(20),
    width: W * 0.9,
  },
}))``;

export const HeaderContainer = styled.View`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const NewMessageContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;
