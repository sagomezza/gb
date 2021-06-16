import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { SignupScreen } from '../screens';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.ONBOARDING}>
    <Stack.Screen component={Onboarding} name={routes.ONBOARDING} />
    <Stack.Screen component={SignupScreen} name={routes.SIGNUP} />
  </Stack.Navigator>
);

export type AuthStackParamList = {
  SIGNUP: undefined;
};

export default AuthStackNavigator;
