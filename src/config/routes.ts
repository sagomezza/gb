export enum RoutesAuth {
  LOGIN = 'LOGIN',
  ONBOARDING = 'ONBOARDING',
  SIGNUP = 'SIGNUP',
}

const routes = {
  ...RoutesAuth,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
