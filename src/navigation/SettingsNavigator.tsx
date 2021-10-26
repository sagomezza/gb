import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { LegalTermsScreen, SettingsScreen } from '../screens';

const Stack = createStackNavigator();

const SettingsNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.SETTINGS}>
    <Stack.Screen component={SettingsScreen} name={routes.SETTINGS} />
    <Stack.Screen component={LegalTermsScreen} name={routes.TERMS} />
  </Stack.Navigator>
);

export default SettingsNavigator;
