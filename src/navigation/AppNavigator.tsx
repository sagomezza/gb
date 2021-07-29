// Libs
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { GoPremiumScreen, OnboardingScreen, PaymentScreen, SearchScreen } from '../screens';

import AuthStackNavigator from './AuthNavigator';
import MainStackNavigator from './MainNavigator';
import MessagesNavigator from './MessagesNavigator';

const Stack = createStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName={routes.AUTH}>
      <Stack.Screen component={AuthStackNavigator} name={routes.AUTH} />
      <Stack.Screen component={GoPremiumScreen} name={routes.GOPREMIUM} />
      <Stack.Screen component={MainStackNavigator} name={routes.MAIN} />
      <Stack.Screen component={MessagesNavigator} name={routes.MESSAGES} />
      <Stack.Screen component={OnboardingScreen} name={routes.ONBOARDING} />
      <Stack.Screen component={PaymentScreen} name={routes.PAYMENT} />
      <Stack.Screen component={SearchScreen} name={routes.SEARCH} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
