/* eslint-disable react/display-name */
// REACT
import React from 'react';

// LIBS
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';

// CONFIG
import { themePaperBar } from 'config/theme';

// SCREENS
import { HomeScreen } from '../screens';

// ROUTES
import routes from 'config/routes';

const Stack = createStackNavigator();

export const MainStackNavigation = () => (
  <Stack.Navigator
    headerMode="screen"
    screenOptions={{
      header: ({ navigation, previous }) => (
        <Appbar.Header theme={themePaperBar} statusBarHeight={0}>
          {previous && <Appbar.BackAction onPress={() => navigation.goBack()} />}
        </Appbar.Header>
      ),
    }}
  >
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export type MainStackParamList = {
  HOME: undefined;
};
