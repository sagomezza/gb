export enum RoutesAuth {
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
}
export enum RoutesMain {
  ONBOARDINGSKILLS = 'ONBOARDINGSKILLS',
}

const routes = {
  ...RoutesAuth,
  ...RoutesMain,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
