import Dots from "components/Dots";
import { ISwipeCarouselControlProps } from "components/SwipeCarousel/SwipeCarousel";
import { theme } from "config/theme";
import React from "react";
import { OnboardingControlsContainer } from "./style";

const Controls: React.FC<ISwipeCarouselControlProps> = ({
  currentPage,
  totalPages,
}: ISwipeCarouselControlProps) => (
  <OnboardingControlsContainer>
    <Dots
      dotSize={theme.onboardingScreen.controlsDotSize}
      nonSelectedColor={theme.colors.lightBlue}
      selectedColor={theme.colors.primary}
      selectedIndex={currentPage}
      total={totalPages}
    />
  </OnboardingControlsContainer>
);

export default Controls;
