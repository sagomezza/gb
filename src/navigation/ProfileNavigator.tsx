import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { OnboardingSkillsScreen, ProfileScreen } from '../screens';

const Stack = createStackNavigator();

const ProfileNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.PROFILE}>
    <Stack.Screen component={ProfileScreen} name={routes.PROFILE} />
    <Stack.Screen component={OnboardingSkillsScreen} name={routes.ONBOARDINGSKILLS} />
  </Stack.Navigator>
);

export default ProfileNavigator;
