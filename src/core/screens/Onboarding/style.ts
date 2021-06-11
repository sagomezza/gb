import { Typography } from 'core/components';
import styled from 'styled-components';
import { nlz, rs } from 'utils/dimensions';

export const OnboardingMainContainer = styled.View`
  background-color: ${({ theme: { onboardingScreen } }) => onboardingScreen.backgroundColor};
  flex: 1;
`;

export const OnboardingPageMainContainer = styled.View`
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 5%;
  width: 100%;
`;

export const OnboardingImageContainer = styled.View`
  height: 55%;
  padding: 10%;
  width: 100%;
`;

export const OnboardingImage = styled.Image`
  height: 100%;
  resize-mode: contain;
  width: 100%;
`;

export const OnboardingTextContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${() => rs(60)}px;
`;

export const OnboardingTitle = styled(Typography)`
  color: ${({ theme: { onboardingScreen } }) => onboardingScreen.titleColor};
  font-size: ${({ theme: { onboardingScreen } }) => nlz(onboardingScreen.titleSize)}px;
  margin-bottom: ${() => rs(15)}px;
  margin-top: ${() => rs(5)}px;
`;

export const OnboardingDescription = styled(Typography)`
  color: ${({ theme: { onboardingScreen } }) => onboardingScreen.descriptionColor};
  font-size: ${({ theme: { onboardingScreen } }) => nlz(onboardingScreen.descriptionSize)}px;
  text-align: center;
`;

export const OnboardingControlsContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  min-height: 50px;
  width: 100%;
`;

export const OnboardingExtraItemsContainer = styled.View`
  margin-top: ${() => rs(50)}px;
`;
