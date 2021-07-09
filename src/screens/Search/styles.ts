import SearchInput from 'components/SearchInput';
import { theme } from 'config/theme';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const Separator = styled.View`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  height: ${rs(1)}px;
  width: 100%;
`;

export const InputSearch = styled(SearchInput).attrs(() => ({
  containerStyle: {
    backgroundColor: theme.colors.lighterGrey,
  },
}))``;

export const HeaderContainer = styled.View`
  margin-top: ${Platform.OS === 'ios' ? rs(40) : rs(10)}px;
`;

export const SearchContainer = styled.View`
  flex: 1;
  margin-horizontal: ${rs(24)}px;
  padding-bottom: ${rs(10)}px;
`;
