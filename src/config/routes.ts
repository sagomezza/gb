export enum RoutesAuth {
  ONBOARDING = 'ONBOARDING',
}

const routes = {
  ...RoutesAuth,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
