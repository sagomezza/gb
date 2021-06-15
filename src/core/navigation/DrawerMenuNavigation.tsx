import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { RoutesDrawer } from 'config/routes';

const Drawer = createDrawerNavigator();

export const MenuDrawerNavigation = () => (
  <Drawer.Navigator initialRouteName={RoutesDrawer.initialRouteName}>
    {RoutesDrawer.routes.map((route) => (
      <Drawer.Screen
        key={route.name}
        component={route.screen}
        name={route.name}
        options={{
          drawerIcon: () => <Icon name={route.icon} size={23} />,
        }}
      />
    ))}
  </Drawer.Navigator>
);
