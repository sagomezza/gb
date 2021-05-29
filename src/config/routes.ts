import { HomeScreen, Profile, StyleguideScreen } from "screens";

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
  SEARCH = "SEARCH",
}

export const RoutesDrawer = {
  initialRouteName: "Home",
  routes: [
    { name: "Home", icon: "home", screen: HomeScreen },
    { name: "Profile", icon: "person", screen: Profile },
    { name: "Styleguide", icon: "list", screen: StyleguideScreen },
  ],
};

const routes = {
  ...RoutesAuth,
  ...RotuesMain,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
