import React from 'react';
import { Header } from 'components';
import { SafeAreaView } from 'react-native-safe-area-context';
import routes from 'config/routes';
import { MainContainer } from './styled';
import MenuItem from './MenuItem';

const MoreScreen: React.FC = () => (
  <SafeAreaView>
    <Header title="More" />
    <MainContainer>
      <MenuItem
        iconFamily="MaterialCommunityIcons"
        iconName="email-outline"
        navigateTo={routes.MESSAGES}
        title="Messages"
      />
      <MenuItem
        iconFamily="MaterialCommunityIcons"
        iconName="map-marker-outline"
        navigateTo={routes.ONBOARDINGSKILLS}
        title="Near me"
      />
      <MenuItem
        isPremium
        iconFamily="MaterialCommunityIcons"
        iconName="newspaper-variant-outline"
        navigateTo={routes.ONBOARDINGSKILLS}
        title="Bulletin"
      />
      <MenuItem
        omitBottomBorder
        iconFamily="SimpleLineIcons"
        iconName="settings"
        navigateTo={routes.ONBOARDINGSKILLS}
        title="Settings"
      />
    </MainContainer>
  </SafeAreaView>
);

export default MoreScreen;
