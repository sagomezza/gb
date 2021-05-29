// Libs
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "config/routes";
import AuthNavigator from "./AuthNavigator";
import { MainStackNavigation } from "./MainStackNavigation";

const Stack = createStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={AuthNavigator} name={routes.LOGIN} />
      <Stack.Screen component={MainStackNavigation} name={routes.HOME} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
