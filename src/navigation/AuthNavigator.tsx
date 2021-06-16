import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { LoginScreen, SignupScreen } from '../screens';
import OnboardingScreen from '../screens/Onboarding';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.ONBOARDING}>
    <Stack.Screen component={OnboardingScreen} name={routes.ONBOARDING} />
    <Stack.Screen component={SignupScreen} name={routes.SIGNUP} />
    <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
  </Stack.Navigator>
);

export type AuthStackParamList = {
  SIGNUP: undefined;
};

export default AuthStackNavigator;
