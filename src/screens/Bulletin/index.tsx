import React from 'react';
import { Header } from 'components';
import routes, { RoutesLabels } from 'config/routes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from '../styles';
import { MainContainer, TopNavigatorBaseColors, TopNavigatorStyles } from './styles';
import MyBulletins from './MyBulletins';
import NewBulletin from './NewBulletin';

const MaterialTop = createMaterialTopTabNavigator();

const BulletinScreen = () => (
  <SafeAreaView>
    <Header route={routes.BULLETIN} />
    <MainContainer>
      <MaterialTop.Navigator
        sceneContainerStyle={TopNavigatorStyles.screensWrapper}
        tabBarOptions={{
          activeTintColor: TopNavigatorBaseColors.active,
          inactiveTintColor: TopNavigatorBaseColors.inactive,
          indicatorContainerStyle: TopNavigatorStyles.indicatorContainerStyle,
          indicatorStyle: TopNavigatorStyles.indicatorStyle,
          labelStyle: TopNavigatorStyles.labelStyle,
          style: TopNavigatorStyles.containerStyle,
        }}
      >
        <MaterialTop.Screen
          component={MyBulletins}
          name={routes.MYBULLETINS}
          options={{
            title: RoutesLabels.MYBULLETINS,
          }}
        />
        <MaterialTop.Screen
          component={NewBulletin}
          name={routes.NEWBULLETIN}
          options={{
            title: RoutesLabels.NEWBULLETIN,
          }}
        />
      </MaterialTop.Navigator>
    </MainContainer>
  </SafeAreaView>
);

export default BulletinScreen;
