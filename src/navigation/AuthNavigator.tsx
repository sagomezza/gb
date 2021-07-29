import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { AuthScreen, LoginScreen, SignupScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.AUTH}>
    <Stack.Screen component={AuthScreen} name={routes.AUTH} />
    <Stack.Screen component={SignupScreen} name={routes.SIGNUP} />
    <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
  </Stack.Navigator>
);

export type AuthStackParamList = {
  SIGNUP: undefined;
};

export default AuthStackNavigator;
