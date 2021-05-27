export enum RoutesAuth {
  FORGOTPASSWORD = "FORGOTPASSWORD",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  STYLEGUIDE = "STYLEGUIDE",
}

export enum RotuesMain {
  CHANGEPASSWORD = "CHANGEPASSWORD",
  HOME = "HOME",
  PROFILE = "PROFILE",
}

const routes = {
  ...RoutesAuth,
  ...RotuesMain,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
