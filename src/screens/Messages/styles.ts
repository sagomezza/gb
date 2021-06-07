import styled from "styled-components/native";
import { rs } from "utils/dimensions";

export const Separator = styled.View`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  height: ${rs(1)}px;
  width: 100%;
`;
