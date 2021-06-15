import React, { ReactNode } from 'react';
import {
  OnboardingDescription,
  OnboardingExtraItemsContainer,
  OnboardingImage,
  OnboardingImageContainer,
  OnboardingPageMainContainer,
  OnboardingTextContainer,
  OnboardingTitle,
} from './style';

export interface IOnboardingPageProps {
  description?: string;
  extraContent?: ReactNode;
  imageUri?: string;
  title: string;
}

const OnboardingPage: React.FC<IOnboardingPageProps> = ({
  description,
  extraContent,
  imageUri,
  title,
}: IOnboardingPageProps) => (
  <OnboardingPageMainContainer>
    {imageUri && (
      <OnboardingImageContainer>
        <OnboardingImage source={{ uri: imageUri }} />
      </OnboardingImageContainer>
    )}
    <OnboardingTextContainer>
      <OnboardingTitle>{title}</OnboardingTitle>
      <OnboardingDescription>{description}</OnboardingDescription>
    </OnboardingTextContainer>
    {extraContent && <OnboardingExtraItemsContainer>{extraContent}</OnboardingExtraItemsContainer>}
  </OnboardingPageMainContainer>
);

export default OnboardingPage;
