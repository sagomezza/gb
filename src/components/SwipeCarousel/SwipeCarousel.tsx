import React, { ReactNode, useMemo, useRef, useState } from "react";
import { View } from "react-native";

// eslint-disable-next-line import/no-cycle
import { CarouselMainContainer, CarouselPager } from "./styles";

export interface ISwipeCarouselControlProps {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeSelectedPage: (newCurrentPageIndex: number) => void;
  currentPage: number;
  totalPages: number;
}

export interface ISwipeCarouselItemProps {
  component: ReactNode;
  id: number | string;
}

export const CONTROLS_POSITION_BOTTOM = "BOTTOM";
export const CONTROLS_POSITION_TOP = "TOP";

export interface ISwipeCarouselProps {
  controlsPosition?:
    | typeof CONTROLS_POSITION_BOTTOM
    | typeof CONTROLS_POSITION_TOP;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  controlsRenderer?: (controlProps: ISwipeCarouselControlProps) => ReactNode;
  keyPrefix?: string;
  pages: ISwipeCarouselItemProps[];
}

const SwipeCarousel: React.FC<ISwipeCarouselProps> = ({
  controlsPosition = "BOTTOM",
  controlsRenderer,
  keyPrefix = "swipeCarousel",
  pages,
}: ISwipeCarouselProps) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const pagerReference = useRef(null);

  const handlePageChange = (activePageIndex: number) => {
    pagerReference.current.setPage(activePageIndex);
    setCurrentPageIndex(activePageIndex);
  };

  const RenderizedControls = useMemo(() => {
    if (controlsRenderer) {
      return controlsRenderer({
        changeSelectedPage: handlePageChange,
        currentPage: currentPageIndex,
        totalPages: pages?.length || 0,
      });
    }

    return null;
  }, [controlsRenderer, currentPageIndex, pages]);

  return (
    <CarouselMainContainer controlsPosition={controlsPosition}>
      <CarouselPager
        ref={pagerReference}
        initialPage={0}
        onPageSelected={(e) => setCurrentPageIndex(e.nativeEvent.position)}
      >
        {pages &&
          pages.length > 0 &&
          pages.map((page) => (
            <View key={`${keyPrefix}.${page.id}`}>{page.component}</View>
          ))}
      </CarouselPager>

      {controlsRenderer && RenderizedControls}
    </CarouselMainContainer>
  );
};

export default SwipeCarousel;
