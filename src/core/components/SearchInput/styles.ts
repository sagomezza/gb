import styled from "styled-components";
import { nlz, rs } from "utils/dimensions";

export const SearchInputMainContainer = styled.View`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 12px;
  flex-direction: row;
  height: ${() => rs(52)}px;
  width: 100%;
`;

export const Input = styled.TextInput`
  color: ${({ theme: { colors } }) => colors.black};
  flex: 1;
  font-size: ${() => nlz(12)}px;
  font-weight: normal;
  height: 100%;
  padding-left: ${() => rs(10)}px;
`;

export const CornerContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: ${() => rs(12)}px;
  padding-right: ${() => rs(12)}px;
`;
