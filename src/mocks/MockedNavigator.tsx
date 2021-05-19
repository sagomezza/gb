import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MockedNavigator = ({
  component,
  params = {},
}: {
  component: () => JSX.Element;
  params?: Object;
}) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        component={component}
        initialParams={params}
        name="MockedScreen"
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MockedNavigator;
