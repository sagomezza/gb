export enum RoutesAuth {
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
}

export enum RoutesMain {
  BUDDIES = 'BUDDIES',
  BULLETIN = 'BULLETIN',
  CALENDAR = 'CALENDAR',
  CHAT = 'CHAT',
  HOME = 'HOME',
  MAIN = 'MAIN',
  MESSAGES = 'MESSAGES',
  MORE = 'MORE',
  NEARME = 'NEARME',
  NEWMESSAGE = 'NEWMESSAGE',
  ONBOARDINGSKILLS = 'ONBOARDINGSKILLS',
  PROFILE = 'PROFILE',
  SEARCH = 'SEARCH',
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
  SEARCH = 'Buddies',
}

export default routes;
export type RoutesTypes = keyof typeof routes;
