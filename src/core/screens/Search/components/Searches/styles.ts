import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const SearchesContainer = styled.View`
  justify-content: flex-start;
  padding: ${rs(20)}px;
`;

export const Separator = styled.View`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  height: ${rs(1)}px;
  width: 100%;
`;

export const TitleSearches = styled.Text`
  font-size: ${nlz(18)}px;
`;

export const RecentSearches = styled.Text`
  color: ${({ theme: { colors } }) => colors.error};
  font-size: ${nlz(16)}px;
  padding-vertical: ${rs(10)}px;
`;
