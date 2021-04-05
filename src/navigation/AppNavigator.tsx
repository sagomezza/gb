//Libs
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import { MainStackNavigation } from './MainStackNavigation';
import routes from 'config/routes';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={routes.LOGIN} component={AuthNavigator} />
      <Stack.Screen name={routes.HOME} component={MainStackNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
