import styled from 'styled-components/native';
import { rs } from 'utils/dimensions';

export const MainContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex: 1;
`;

export const ResultsContainer = styled.View`
  flex: 1;
  padding-bottom: ${rs(10)}px;
`;

export const SearchInputContainer = styled.View`
  height: ${rs(40)}px;
  margin-bottom: ${rs(8)}px;
  margin-top: ${rs(24)}px;
  padding-horizontal: ${rs(16)}px;
  width: 100%;
`;
