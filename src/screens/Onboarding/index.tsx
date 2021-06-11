import * as React from 'react';
import { StatusBar, View } from 'react-native';
import Spacing from 'components/Spacing';
import { Background, ButtonLogin, ButtonSignup, OnboardingTitle } from './styled';

const BackgroundImage = require('../../../assets/imgs/BgOnboarding.png');

const OnboardingScreen: React.FC = () => {
  const background = BackgroundImage;

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
          <ButtonSignup onPress={() => {}}>Sign Up</ButtonSignup>
        </View>
      </Background>
    </>
  );
};

export default OnboardingScreen;
