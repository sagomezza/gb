import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "config/routes";
import { LoginScreen, StyleguideScreen } from "../screens";

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.LOGIN}>
    <Stack.Screen component={StyleguideScreen} name={routes.STYLEGUIDE} />
    <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
  </Stack.Navigator>
);

export type AuthStackParamList = {
  LOGIN: undefined;
  STYLEGUIDE: undefined;
};

export default AuthStackNavigator;
