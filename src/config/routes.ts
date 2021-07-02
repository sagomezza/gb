export enum RoutesAuth {
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
}

export enum RoutesMain {
  BUDDIES = 'BUDDIES',
  BULLETIN = 'BULLETIN',
  CALENDAR = 'CALENDAR',
  HOME = 'HOME',
  MAIN = 'MAIN',
  MESSAGES = 'MESSAGES',
  MORE = 'MORE',
  NEARME = 'NEARME',
  ONBOARDINGSKILLS = 'ONBOARDINGSKILLS',
  PROFILE = 'PROFILE',
  SETTINGS = 'SETTINGS',
}

const routes = {
  ...RoutesAuth,
  ...RoutesMain,
};

export enum RoutesLabels {
  BUDDIES = 'Buddies',
  CALENDAR = 'Calendar',
  HOME = 'Home',
  MORE = 'More',
  PROFILE = 'Profile',
}

export default routes;
export type RoutesTypes = keyof typeof routes;
