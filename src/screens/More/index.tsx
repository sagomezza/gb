import React from 'react';
import { GBScreenHeader } from 'components';
import routes from 'config/routes';
import { SafeAreaView } from '../styles';
import { MainContainer } from './styles';
import MenuItem from './MenuItem';

const MoreScreen: React.FC = () => (
  <SafeAreaView>
    <GBScreenHeader title={routes.MORE} />
    <MainContainer>
      <MenuItem
        iconFamily="MaterialCommunityIcons"
        iconName="email-outline"
        route={routes.MESSAGES}
      />
      <MenuItem
        iconFamily="MaterialCommunityIcons"
        iconName="map-marker-outline"
        route={routes.NEARME}
      />
      <MenuItem
        iconFamily="MaterialCommunityIcons"
        iconName="newspaper-variant-outline"
        route={routes.BULLETIN}
      />
      <MenuItem
        omitBottomBorder
        iconFamily="SimpleLineIcons"
        iconName="settings"
        route={routes.SETTINGS}
      />
    </MainContainer>
  </SafeAreaView>
);

export default MoreScreen;
