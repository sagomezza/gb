import React from 'react';
import { Image } from 'react-native';
import OnboardingImage1 from 'assets/imgs/onboarding/onboarding-1.png';
import OnboardingImage2 from 'assets/imgs/onboarding/onboarding-2.png';
import OnboardingImage3 from 'assets/imgs/onboarding/onboarding-3.png';
import { IOnboardingPageProps } from './OnboardingPage';
import FinishButton from './FinishButton';
import SkipButton from './SkipButton';

const OnboardingImage1Uri = Image.resolveAssetSource(OnboardingImage1).uri;
const OnboardingImage2Uri = Image.resolveAssetSource(OnboardingImage2).uri;
const OnboardingImage3Uri = Image.resolveAssetSource(OnboardingImage3).uri;

const onboardingPages: IOnboardingPageProps[] = [
  {
    title: 'Title 1',
    description:
      'description 1 Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum',
    imageUri: OnboardingImage1Uri,
    extraContent: <SkipButton />,
  },
  {
    title: 'Title 2',
    description:
      'description 2 Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum',
    imageUri: OnboardingImage2Uri,
  },
  {
    title: 'Title 3',
    description:
      'description 3 Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum',
    imageUri: OnboardingImage3Uri,
  },
  {
    title: 'Title 4',
    description:
      'description 4 Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum',
    extraContent: <FinishButton />,
  },
];

export default onboardingPages;
