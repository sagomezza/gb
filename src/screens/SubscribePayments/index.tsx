/* eslint-disable no-console */
import React from 'react';
import Spacing from 'components/Spacing';
import { useDispatch, useSelector } from 'react-redux';
import { getModalAlertState, getProfileState } from 'store/app/appSelectors';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import NetInfo from '@react-native-community/netinfo';
import { ModalAlert } from 'components/ModalAlert';
import { GBScreenHeader } from 'components';
import { SafeAreaView } from 'screens/styles';
import {
  SubscribePaymentsContainer,
  SubscribePaymentsSubTitle,
  SubscribePaymentsTitle,
} from './styles';
import Form from './Form';
import { ICardDetails, IFormValuesSubscribePayments } from './types';

const SubscribePaymentsScreen: React.FC = () => {
  const alertModal = useSelector(getModalAlertState);
  const dispatch = useDispatch();
  const profileInfo = useSelector(getProfileState);
  const onPressSubscribe = (data: IFormValuesSubscribePayments, card: ICardDetails) => {
    // TODO: CONSUME SERVICE BACKEND
    console.log(data, card);
    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        onConnectionErrorHandler();
      } else {
        try {
          // mutation
          // ON PAYMENT SUCCESSFUL
          profileInfo.isTrainer = true;
          console.log('updateProfile', profileInfo);
          dispatch(
            showModalAlert({
              title: 'Success',
              text: 'Suscription bougth!',
              textButton: 'Ok',
              type: 'confirm',
              visible: true,
            }),
          );
        } catch (error) {
          onCreateErrorHandler();
        }
      }
    });
  };

  const onCreateErrorHandler = () => {
    dispatch(
      showModalAlert({
        title: 'Oops',
        text: 'Something has happened, please try again later',
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );
  };

  const onConnectionErrorHandler = () => {
    dispatch(
      showModalAlert({
        title: 'Error',
        text: "It seems that you're not connected to Internet",
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );
  };

  return (
    <>
      <SafeAreaView>
        <GBScreenHeader title="Suscribe Payment" />
        <SubscribePaymentsContainer>
          <Spacing size={40} />
          <SubscribePaymentsTitle>Payment</SubscribePaymentsTitle>
          <Spacing />
          <SubscribePaymentsSubTitle>Card Details</SubscribePaymentsSubTitle>
          <Spacing size={80} />
          <Form onPressSubcribe={onPressSubscribe} />
        </SubscribePaymentsContainer>
        <ModalAlert
          hideModal={() => dispatch(hideModalAlert())}
          text={alertModal.text}
          textButton={alertModal.textButton}
          title={alertModal.title}
          type={alertModal.type}
          visible={alertModal.visible}
          onDismiss={() => dispatch(hideModalAlert())}
        />
      </SafeAreaView>
    </>
  );
};

export default SubscribePaymentsScreen;
