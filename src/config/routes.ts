export enum ROUTES_AUTH {
  LOGIN = 'LOGIN',
  STYLEGUIDE = 'STYLEGUIDE',
}

export enum ROUTES_MAIN {
  HOME = 'HOME',
}

const routes = {
  ...ROUTES_AUTH,
  ...ROUTES_MAIN,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
