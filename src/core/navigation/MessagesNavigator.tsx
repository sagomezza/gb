import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { MessagesScreen, ChatScreen } from '../screens';

const Stack = createStackNavigator();

const MessagesStackNavigator: React.FC = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.MESSAGES}>
    <Stack.Screen component={MessagesScreen} name={routes.MESSAGES} />
    <Stack.Screen component={ChatScreen} name={routes.CHAT} />
  </Stack.Navigator>
);

export type MessagesStackParamList = {
  CHAT: undefined;
  MESSAGES: undefined;
};

export default MessagesStackNavigator;
