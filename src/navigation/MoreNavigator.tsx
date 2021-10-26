import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { BulletinScreen, MoreScreen, NearMeScreen } from '../screens';
import MessagesNavigator from './MessagesNavigator';
import SettingsNavigator from './SettingsNavigator';

const Stack = createStackNavigator();

const MoreNavigator: React.FC = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.MORE}>
    <Stack.Screen component={MoreScreen} name={routes.MORE} />
    <Stack.Screen component={MessagesNavigator} name={routes.MESSAGES} />
    <Stack.Screen component={NearMeScreen} name={routes.NEARME} />
    <Stack.Screen component={BulletinScreen} name={routes.BULLETIN} />
    <Stack.Screen component={SettingsNavigator} name={routes.SETTINGS} />
  </Stack.Navigator>
);

export default MoreNavigator;
