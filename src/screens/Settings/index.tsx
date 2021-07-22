import React from 'react';
import { Header } from 'components';
import routes from 'config/routes';
import { SafeAreaView } from '../styles';

const SettingsScreen = () => (
  <SafeAreaView>
    <Header route={routes.SETTINGS} />
  </SafeAreaView>
);

export default SettingsScreen;
