import styled from 'styled-components/native';
import { nlz, rs } from 'utils/dimensions';

export const SearchesContainer = styled.View`
  justify-content: flex-start;
  margin-vertical: ${rs(14)}px;
`;

export const Separator = styled.View`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  height: ${rs(1)}px;
  width: 100%;
`;

export const TitleSearches = styled.Text`
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: ${({ theme: { fonts } }) => fonts.medium.fontWeight};
`;

export const RecentSearches = styled.Text`
  color: ${({ theme: { colors } }) => colors.greenPrimary};
  font-family: ${({ theme: { fonts } }) => fonts.medium.fontFamily};
  font-size: ${nlz(16)}px;
  font-weight: 600;
  padding-vertical: ${rs(10)}px;
`;
