import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar } from "react-native-paper";
import { themePaperBar } from "config/theme";
import routes from "config/routes";
import ProfileScreen from "screens/Profile";
import { StackHeaderProps } from "@react-navigation/stack/lib/typescript/src/types";
import { HomeScreen } from "../screens";

const Stack = createStackNavigator();

export const MainStackNavigation = () => (
  <Stack.Navigator
    headerMode="screen"
    initialRouteName={routes.HOME}
    screenOptions={{
      header: ({ navigation, previous }: StackHeaderProps) => (
        <Appbar.Header statusBarHeight={0} theme={themePaperBar}>
          {previous && (
            <Appbar.BackAction onPress={() => navigation.goBack()} />
          )}
        </Appbar.Header>
      ),
    }}
  >
    <Stack.Screen component={HomeScreen} name={routes.HOME} />
    <Stack.Screen component={ProfileScreen} name={routes.PROFILE} />
  </Stack.Navigator>
);

export type MainStackParamList = {
  HOME: undefined;
};
