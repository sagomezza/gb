import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from 'config/routes';
import { AddActivityScreen, AgendaScreen, CalendarScreen } from '../screens';

const Stack = createStackNavigator();

const CalendarNavigator: React.FC = () => (
  <Stack.Navigator headerMode="none" initialRouteName={routes.CALENDAR}>
    <Stack.Screen component={CalendarScreen} name={routes.CALENDAR} />
    <Stack.Screen component={AddActivityScreen} name={routes.ADD_ACTIVITY} />
    <Stack.Screen component={AgendaScreen} name={routes.AGENDA} />
  </Stack.Navigator>
);

export default CalendarNavigator;
