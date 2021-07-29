import React from 'react';
import { StatusBar, View, TouchableOpacity } from 'react-native';
import ScreensHeader from 'components/ScreensHeader';
import Spacing from 'components/Spacing';
import { useNavigation } from '@react-navigation/native';
import routes from 'config/routes';
import CardSubcribePrices from './components/Card';
import {
  CancelSubcriptionText,
  HeaderContainer,
  LinkContainer,
  LinkText,
  SubscribePricesContainer,
  SubscribePricesFooter,
  SubscribePricesSubtitle,
  SubscribePricesTitle,
} from './styles';

const SubscribePricesScreen: React.FC = () => {
  const navigation = useNavigation();
  const onPressSubscribe = () => navigation.navigate(routes.PAYMENT);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <HeaderContainer>
        <ScreensHeader isGoBack />
      </HeaderContainer>

      <SubscribePricesContainer>
        <View>
          <SubscribePricesTitle>Become a Premium</SubscribePricesTitle>
          <SubscribePricesSubtitle>
            Get access to financial estimates with Premium Subscription.
          </SubscribePricesSubtitle>
        </View>
        <View>
          <CardSubcribePrices onPress={onPressSubscribe} />
          <Spacing />
          <CancelSubcriptionText>Cancel anytime.</CancelSubcriptionText>
          <Spacing />
          <LinkContainer>
            <TouchableOpacity>
              <LinkText>Terms of Use</LinkText>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinkText>Privacy Policy</LinkText>
            </TouchableOpacity>
          </LinkContainer>
        </View>
        <View>
          <SubscribePricesFooter>
            Payment will be charged to your Apple ID account at the confirmation of pruchase. The
            subscription automatically renews unless it is canceled at least 24 hours before the end
            of the current period. Your account will be charged for renewal within 24 hours prior to
            the end of the current period. You can manage and cancel your subscriptions by going to
            your App Store account setting after purchase.
          </SubscribePricesFooter>
        </View>
      </SubscribePricesContainer>
    </>
  );
};

export default SubscribePricesScreen;
