import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { MessagesScreen } from '../screens';

const Stack = createStackNavigator();

const MessagesStackNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.MESSAGES}>
    <Stack.Screen component={MessagesScreen} name={routes.MESSAGES} />
  </Stack.Navigator>
);

export default MessagesStackNavigator;
