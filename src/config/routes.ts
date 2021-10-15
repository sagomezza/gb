export enum RoutesAuth {
  AUTH = 'AUTH',
  FORGOTPASSWORD = 'FORGOTPASSWORD',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  VERIFICATION = 'VERIFICATION',
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
  GOPREMIUM = 'GOPREMIUM',
  HOME = 'HOME',
  MAIN = 'MAIN',
  MESSAGES = 'MESSAGES',
  MORE = 'MORE',
  NEARME = 'NEARME',
  NEWMESSAGE = 'NEWMESSAGE',
  ONBOARDING = 'ONBOARDING',
  ONBOARDINGSKILLS = 'ONBOARDINGSKILLS',
  PAYMENT = 'PAYMENT',
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
  AUTH = 'Auth',
  BUDDIES = 'Buddies',
  BULLETIN = 'Bulletin',
  CALENDAR = 'Calendar',
  GOPREMIUM = 'Go Premium',
  HOME = 'Home',
  LOGIN = 'Login',
  MAIN = 'Main',
  MESSAGES = 'Messages',
  MORE = 'More',
  MYBULLETINS = 'My Bulletins',
  NEARME = 'Near me',
  NEWBULLETIN = 'New Bulletin',
  ONBOARDING = 'Onboarding',
  PAYMENT = 'Payment',
  PROFILE = 'Profile',
  SEARCH = 'Buddies',
  SETTINGS = 'Settings',
  SIGNUP = 'Sign up',
}

export default routes;
export type RoutesTypes = keyof typeof routes;
