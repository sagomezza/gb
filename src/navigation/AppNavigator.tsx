// Libs
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import OnboardingSkillsScreen from '../screens/OnboardingSkills';

import AuthStackNavigator from './AuthNavigator';
import MainStackNavigator from './MainNavigator';

const Stack = createStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName={routes.ONBOARDING}>
      <Stack.Screen component={AuthStackNavigator} name={routes.ONBOARDING} />
      <Stack.Screen component={OnboardingSkillsScreen} name={routes.ONBOARDINGSKILLS} />
      <Stack.Screen component={MainStackNavigator} name={routes.MAIN} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
