/* eslint-disable no-console */
import React from 'react';
import ScreensHeader from 'components/ScreensHeader';
import { StatusBar } from 'react-native';
import Spacing from 'components/Spacing';
import {
  HeaderContainer,
  SubscribePaymentsContainer,
  SubscribePaymentsSubTitle,
  SubscribePaymentsTitle,
} from './styles';
import Form from './Form';
import { ICardDetails, IFormValuesSubscribePayments } from './types';

const SubscribePaymentsScreen: React.FC = () => {
  const onPressSubscribe = (data: IFormValuesSubscribePayments, card: ICardDetails) => {
    // TODO: CONSUME SERVICE BACKEND
    console.log(data, card);
  };
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <HeaderContainer>
        <ScreensHeader isGoBack />
      </HeaderContainer>
      <SubscribePaymentsContainer>
        <Spacing size={40} />
        <SubscribePaymentsTitle>Payment</SubscribePaymentsTitle>
        <Spacing />
        <SubscribePaymentsSubTitle>Card Details</SubscribePaymentsSubTitle>
        <Spacing size={80} />
        <Form onPressSubcribe={onPressSubscribe} />
      </SubscribePaymentsContainer>
    </>
  );
};

export default SubscribePaymentsScreen;
