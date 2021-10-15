/* eslint-disable no-console */
import React from 'react';
import Spacing from 'components/Spacing';
import { useSelector } from 'react-redux';
import { getProfileState } from 'store/app/appSelectors';
import { GBScreenHeader } from 'components';
import {
  SubscribePaymentsContainer,
  SubscribePaymentsSubTitle,
  SubscribePaymentsTitle,
} from './styles';
import Form from './Form';
import { ICardDetails, IFormValuesSubscribePayments } from './types';

const SubscribePaymentsScreen: React.FC = () => {
  const profileInfo = useSelector(getProfileState);
  const onPressSubscribe = (data: IFormValuesSubscribePayments, card: ICardDetails) => {
    // TODO: CONSUME SERVICE BACKEND
    console.log(data, card);
    // ON PAYMENT SUCCESSFUL
    profileInfo.isTrainer = true;
    console.log('updateProfile', profileInfo);
  };
  return (
    <>
      <GBScreenHeader title="Suscribe Payment" />
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
