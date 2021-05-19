import { View } from "react-native";
import styled from "styled-components/native";

type StyledSpaceProps = {
  isHorizontal: boolean;
  size: number;
};

export const SpacingStyled = styled(View)(
  ({ isHorizontal, size }: StyledSpaceProps) => ({
    height: !isHorizontal ? size : "auto",
    width: isHorizontal ? size : "auto",
  })
);
