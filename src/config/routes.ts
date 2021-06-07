import { HomeScreen, MessagesScreen, Profile, StyleguideScreen } from "screens";

export enum RoutesAuth {
  FORGOTPASSWORD = "FORGOTPASSWORD",
  LOGIN = "LOGIN",
  ONBOARDING = "ONBOARDING",
  SIGNUP = "SIGNUP",
  STYLEGUIDE = "STYLEGUIDE",
}

export enum RotuesMain {
  CHANGEPASSWORD = "CHANGEPASSWORD",
  CHAT = "CHAT",
  HOME = "HOME",
  MESSAGES = "MESSAGES",
  PROFILE = "PROFILE",
  SEARCH = "SEARCH",
}

export const RoutesDrawer = {
  initialRouteName: "Home",
  routes: [
    { name: "Home", icon: "home", screen: HomeScreen },
    { name: "Profile", icon: "person", screen: Profile },
    { name: "Messages", icon: "chatbubble", screen: MessagesScreen },
    { name: "Styleguide", icon: "list", screen: StyleguideScreen },
  ],
};

const routes = {
  ...RoutesAuth,
  ...RotuesMain,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
