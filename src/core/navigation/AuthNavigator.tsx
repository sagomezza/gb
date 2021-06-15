import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { ForgotPasswordScreen, LoginScreen, SignupScreen, StyleguideScreen } from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator: React.FC = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.LOGIN}>
    <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
    <Stack.Screen component={SignupScreen} name={routes.SIGNUP} />
    <Stack.Screen component={ForgotPasswordScreen} name={routes.FORGOTPASSWORD} />
    <Stack.Screen component={StyleguideScreen} name={routes.STYLEGUIDE} />
  </Stack.Navigator>
);

export type AuthStackParamList = {
  FORGOTPASSWORD: undefined;
  LOGIN: undefined;
  SIGNUP: undefined;
  STYLEGUIDE: undefined;
};

export default AuthStackNavigator;
