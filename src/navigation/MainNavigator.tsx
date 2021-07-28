import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes, { RoutesLabels } from 'config/routes';
import { HomeScreen, CalendarScreen, ProfileScreen, SearchScreen } from 'screens';
import { BottomTabButton } from 'components';
import { bottomNavigatorStyles } from './styles';
import MoreNavigator from './MoreNavigator';

interface ITabBarIconProps {
  focused: boolean;
}

const BottomTab = createBottomTabNavigator();

const MainNavigator: React.FC = () => (
  <BottomTab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        ...bottomNavigatorStyles.base,
        ...bottomNavigatorStyles.shadow,
      },
      safeAreaInsets: {
        bottom: 0,
      },
    }}
  >
    <BottomTab.Screen
      component={HomeScreen}
      name={routes.HOME}
      options={{
        tabBarIcon: ({ focused }: ITabBarIconProps) => (
          <BottomTabButton
            focused={focused}
            iconFamily="Feather"
            iconName="home"
            label={RoutesLabels[routes.HOME]}
          />
        ),
      }}
    />
    <BottomTab.Screen
      component={SearchScreen}
      name={routes.SEARCH}
      options={{
        tabBarIcon: ({ focused }: ITabBarIconProps) => (
          <BottomTabButton
            focused={focused}
            iconFamily="Feather"
            iconName="search"
            label={RoutesLabels[routes.SEARCH]}
          />
        ),
      }}
    />
    <BottomTab.Screen
      component={ProfileScreen}
      name={routes.PROFILE}
      options={{
        tabBarIcon: ({ focused }: ITabBarIconProps) => (
          <BottomTabButton
            focused={focused}
            iconFamily="Feather"
            iconName="user"
            label={RoutesLabels[routes.PROFILE]}
          />
        ),
      }}
    />
    <BottomTab.Screen
      component={CalendarScreen}
      name={routes.CALENDAR}
      options={{
        tabBarIcon: ({ focused }: ITabBarIconProps) => (
          <BottomTabButton
            focused={focused}
            iconFamily="Feather"
            iconName="calendar"
            label={RoutesLabels[routes.CALENDAR]}
          />
        ),
      }}
    />
    <BottomTab.Screen
      component={MoreNavigator}
      name={routes.MORE}
      options={{
        tabBarIcon: ({ focused }: ITabBarIconProps) => (
          <BottomTabButton
            focused={focused}
            iconFamily="Feather"
            iconName="menu"
            label={RoutesLabels[routes.MORE]}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default MainNavigator;
