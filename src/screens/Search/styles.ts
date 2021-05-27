import SearchInput from "components/SearchInput";
import { theme } from "config/theme";
import styled from "styled-components/native";
import { rs } from "utils/dimensions";

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
