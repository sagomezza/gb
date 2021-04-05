/* eslint-disable react/display-name */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { LoginScreen, StyleguideScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator initialRouteName={routes.LOGIN} headerMode="none">
    <Stack.Screen name={routes.STYLEGUIDE} component={StyleguideScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);

export type AuthStackParamList = {
  LOGIN: undefined;
  STYLEGUIDE: undefined;
};

export default AuthStackNavigator;
