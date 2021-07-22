export enum RoutesAuth {
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
}

export enum PremiumRoutes {
  BULLETIN = 'BULLETIN',
  MYBULLETINS = 'BULLETIN/MYBULLETINS',
  NEWBULLETIN = 'BULLETIN/NEWBULLETIN',
}

export enum RoutesMain {
  BUDDIES = 'BUDDIES',
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
  ...PremiumRoutes,
};

export enum RoutesLabels {
  BUDDIES = 'Buddies',
  BULLETIN = 'Bulletin',
  CALENDAR = 'Calendar',
  HOME = 'Home',
  LOGIN = 'Login',
  MAIN = 'Main',
  MESSAGES = 'Messages',
  MORE = 'More',
  MYBULLETINS = 'My Bulletins',
  NEARME = 'Near me',
  NEWBULLETIN = 'New Bulletin',
  ONBOARDING = 'Onboarding',
  ONBOARDINGSKILLS = 'Onboarding skills',
  PROFILE = 'Profile',
  SEARCH = 'Buddies',
  SETTINGS = 'Settings',
  SIGNUP = 'Sign up',
}

export default routes;
export type RoutesTypes = keyof typeof routes;
