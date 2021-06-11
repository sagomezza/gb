// Libs
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from 'config/routes';
import Onboarding from '../screens/Onboarding';

const Stack = createStackNavigator();

const AppNavigator: React.FC = (): React.ReactElement => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none" initialRouteName={routes.ONBOARDING}>
      <Stack.Screen component={Onboarding} name={routes.ONBOARDING} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
