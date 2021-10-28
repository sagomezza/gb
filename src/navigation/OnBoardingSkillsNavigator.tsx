import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { OnboardingSkillsScreen } from '../screens';
import MainStackNavigator from './MainStackNavigator';

const Stack = createStackNavigator();

const OnBoardingSkillsNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.ONBOARDINGSKILLS}>
    <Stack.Screen component={OnboardingSkillsScreen} name={routes.ONBOARDINGSKILLS} />
    <Stack.Screen component={MainStackNavigator} name={routes.MAIN} />
  </Stack.Navigator>
);

export default OnBoardingSkillsNavigator;
