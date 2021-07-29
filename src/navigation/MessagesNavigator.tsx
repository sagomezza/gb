import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { ChatScreen, MessagesScreen, NewMessageScreen } from '../screens';

const Stack = createStackNavigator();

const MessagesNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.MESSAGES}>
    <Stack.Screen component={MessagesScreen} name={routes.MESSAGES} />
    <Stack.Screen component={NewMessageScreen} name={routes.NEWMESSAGE} />
    <Stack.Screen component={ChatScreen} name={routes.CHAT} />
  </Stack.Navigator>
);

export default MessagesNavigator;
