import React from "react";
import SwipeCarousel from "components/SwipeCarousel";
import { SafeArea } from "components/SafeArea/styles";
import { ISwipeCarouselItemProps } from "components/SwipeCarousel/SwipeCarousel";
import { OnboardingMainContainer } from "./style";
import OnboardingPage from "./OnboardingPage";
import onboardingPagesConfig from "./pagesConfig";
import Controls from "./Controls";

const OnboardingPages: ISwipeCarouselItemProps[] = onboardingPagesConfig.map(
  (pageConfig, i) => ({
    id: i,
    component: (
      <OnboardingPage
        description={pageConfig.description}
        extraContent={pageConfig.extraContent}
        imageUri={pageConfig.imageUri}
        title={pageConfig.title}
      />
    ),
  })
);

const OnboardingScreen = () => (
  <OnboardingMainContainer>
    <SafeArea>
      <SwipeCarousel
        controlsRenderer={(controlsState) => (
          <Controls
            changeSelectedPage={controlsState.changeSelectedPage}
            currentPage={controlsState.currentPage}
            totalPages={controlsState.totalPages}
          />
        )}
        pages={OnboardingPages}
      />
    </SafeArea>
  </OnboardingMainContainer>
);

export default OnboardingScreen;
