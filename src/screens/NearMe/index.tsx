import React from 'react';
import { Header } from 'components';
import routes from 'config/routes';
import { SafeAreaView } from '../styles';

const NearMeScreen = () => (
  <SafeAreaView>
    <Header route={routes.NEARME} />
  </SafeAreaView>
);

export default NearMeScreen;
