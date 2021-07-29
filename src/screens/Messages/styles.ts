import { rs } from 'utils/dimensions';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding-left: ${rs(20)}px;
`;

export const SearchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${rs(36)}px;
  padding-top: ${rs(24)}px;
  width: 100%;
`;

export const SearchInputContainer = styled.View`
  flex: 1;
  height: ${rs(42)}px;
`;

export const NewMessageIconContainer = styled.View`
  margin-left: ${rs(25)}px;
  margin-right: ${rs(21)}px;
`;
