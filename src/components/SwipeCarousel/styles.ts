import styled from "styled-components";
import PagerView from "react-native-pager-view";

// eslint-disable-next-line import/no-cycle
import { CONTROLS_POSITION_BOTTOM } from "./SwipeCarousel";

export const CarouselMainContainer = styled.View`
  align-items: center;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  flex-direction: ${({ controlsPosition }) =>
    controlsPosition === CONTROLS_POSITION_BOTTOM ? "column" : "column-reverse"}
  position: relative;
  width: 100%;
`;

export const CarouselPager = styled(PagerView)`
  flex: 1;
  width: 100%;
`;
