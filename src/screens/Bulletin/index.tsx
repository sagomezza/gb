import React from 'react';
import { GBScreenHeader } from 'components';
import routes, { RoutesLabels } from 'config/routes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ModalAlert } from 'components/ModalAlert';
import { hideModalAlert } from 'store/app/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { getModalAlertState } from 'store/app/appSelectors';
import { SafeAreaView } from '../styles';
import { MainContainer, TopNavigatorBaseColors, TopNavigatorStyles } from './styles';
import MyBulletins from './MyBulletins';
import NewBulletin from './NewBulletin';

const MaterialTop = createMaterialTopTabNavigator();

const BulletinScreen = () => {
  const dispatch = useDispatch();
  const modalAlertState = useSelector(getModalAlertState);
  return (
    <>
      <SafeAreaView>
        <GBScreenHeader title={routes.BULLETIN} />
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
      <ModalAlert
        data={modalAlertState.data}
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </>
  );
};

export default BulletinScreen;
