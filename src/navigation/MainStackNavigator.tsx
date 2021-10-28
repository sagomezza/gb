// Libs
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import MessagesNavigator from './MessagesNavigator';
import MainNavigator from './MainNavigator';
import { GoPremiumScreen, OnboardingScreen, PaymentScreen, SearchScreen } from '../screens';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.MAIN}>
    <Stack.Screen component={MainNavigator} name={routes.MAIN} />
    <Stack.Screen component={GoPremiumScreen} name={routes.GOPREMIUM} />
    <Stack.Screen component={MessagesNavigator} name={routes.MESSAGES} />
    <Stack.Screen component={OnboardingScreen} name={routes.ONBOARDING} />
    <Stack.Screen component={PaymentScreen} name={routes.PAYMENT} />
    <Stack.Screen component={SearchScreen} name={routes.SEARCH} />
  </Stack.Navigator>
);

export default MainStackNavigator;
