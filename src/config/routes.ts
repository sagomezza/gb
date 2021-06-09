import MessagesStackNavigator from "core/navigation/MessagesNavigator";
import {
  ChangePasswordScreen,
  HomeScreen,
  Profile,
  SearchScreen,
  StyleguideScreen,
} from "core/screens";

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
    { name: "SEARCH", icon: "person", screen: SearchScreen },
    { name: "MESSAGES", icon: "chatbubble", screen: MessagesStackNavigator },
    {
      name: "CHANGEPASSWORD",
      icon: "password",
      screen: ChangePasswordScreen,
    },
    { name: "Styleguide", icon: "list", screen: StyleguideScreen },
  ],
};

const routes = {
  ...RoutesAuth,
  ...RotuesMain,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
