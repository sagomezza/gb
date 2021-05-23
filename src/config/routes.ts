export enum RoutesAuth {
  FORGOTPASSWORD = "FORGOTPASSWORD",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  STYLEGUIDE = "STYLEGUIDE",
}

export enum RotuesMain {
  HOME = "HOME",
  PROFILE = "PROFILE",
}

const routes = {
  ...RoutesAuth,
  ...RotuesMain,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
