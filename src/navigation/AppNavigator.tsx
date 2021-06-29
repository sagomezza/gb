// Libs
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import OnboardingSkillsScreen from '../screens/OnboardingSkills';

import AuthStackNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName={routes.ONBOARDING}>
      <Stack.Screen component={AuthStackNavigator} name={routes.ONBOARDING} />
      <Stack.Screen component={OnboardingSkillsScreen} name={routes.ONBOARDINGSKILLS} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
