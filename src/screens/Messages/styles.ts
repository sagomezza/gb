import SearchInput from 'components/SearchInput';
import { theme } from 'config/theme';
import styled from 'styled-components/native';
import { nlz, rs, W } from 'utils/dimensions';

export const InputSearch = styled(SearchInput).attrs(() => ({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 0,
    borderWidth: 0.5,
    height: rs(40),
    width: rs(W * 0.72),
  },
}))``;

export const SearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: ${rs(30)}px;
  padding-right: ${rs(15)}px;
`;

export const ContactsContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding-left: ${rs(20)}px;
`;

export const MessagesTitleContainer = styled.View`
  border-bottom-width: 0.3px;
  margin-top: ${rs(40)}px;
`;

export const MessagesTitle = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(15)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
  margin-bottom: ${rs(5)}px;
  text-align: center;
`;

export const MessagesContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;
