import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { navigator } from 'navigation';
import Spacing from 'components/Spacing';
import routes from 'config/routes';
import { Background, ButtonLogin, ButtonSignup, OnboardingTitle } from './styled';

const BackgroundImage = require('../../../assets/imgs/BgOnboarding.png');

const OnboardingScreen: React.FC = () => {
  const background = BackgroundImage;
  const { goToPage } = navigator();

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Background source={background}>
        <View>
          <OnboardingTitle>Find New Gym Buddies Nearby</OnboardingTitle>
        </View>
        <View>
          <ButtonLogin onPress={() => {}}>Log In</ButtonLogin>
          <Spacing size={32} />
          <ButtonSignup onPress={() => goToPage(routes.SIGNUP)}>Sign Up</ButtonSignup>
        </View>
      </Background>
    </>
  );
};

export default OnboardingScreen;
