/* eslint-disable no-console */
import React from 'react';
import Spacing from 'components/Spacing';
import { useDispatch, useSelector } from 'react-redux';
import { getModalAlertState, getProfileState } from 'store/app/appSelectors';
import { GBScreenHeader } from 'components';
import { hideModalAlert, showModalAlert, toggleEditProfile } from 'store/app/appActions';
import { useQueryClient } from 'react-query';
import { updateUserMutation } from 'service/mutations';
import { getUserId } from 'store/auth/authSelectors';
import { GetUserQuery, UpdateUserInput } from 'lib/api';
import { ModalAlert } from 'components/ModalAlert';
import { navigator } from 'navigation';
import NetInfo from '@react-native-community/netinfo';
import { SafeAreaView } from 'screens/styles';
import {
  SubscribePaymentsContainer,
  SubscribePaymentsSubTitle,
  SubscribePaymentsTitle,
} from './styles';
import Form from './Form';
import { ICardDetails, IFormValuesSubscribePayments } from './types';

const SubscribePaymentsScreen: React.FC = () => {
  const { goToPage } = navigator();
  const profileInfo = useSelector(getProfileState);
  const userID = useSelector(getUserId);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const modalAlertState = useSelector(getModalAlertState);

  const { mutateAsync } = updateUserMutation();

  const onPressSubscribe = (data: IFormValuesSubscribePayments, card: ICardDetails) => {
    // TODO: CONSUME SERVICE BACKEND
    console.log(data, card);
    // ON PAYMENT SUCCESSFUL
    profileInfo.trainer = true;
    profileInfo.premium = true;

    const input = {
      id: userID,
      name: profileInfo.name,
      description: profileInfo.description,
      photo: profileInfo.photo,
      premium: profileInfo.premium,
      trainer: profileInfo.trainer,
    };
    dispatch(toggleEditProfile(false));
    updateProfile(input);
  };

  const updateProfile = (input: UpdateUserInput) => {
    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        onConnectionErrorHandler();
      } else {
        try {
          await mutateAsync(
            { input },
            {
              onSuccess: (data) => {
                queryClient.setQueryData<GetUserQuery>(
                  [
                    'GetUser',
                    {
                      id: userID,
                    },
                  ],
                  {
                    // @ts-ignore
                    getUser: data.updateUser,
                  },
                );
                onSucessHandler();
              },
            },
          );
        } catch (error) {
          onUpdateErrorHandler();
        }
      }
    });
  };

  const onSucessHandler = () => {
    dispatch(
      showModalAlert({
        title: 'Well Done!',
        text: `Your profile has been updated successfully`,
        textButton: '',
        type: 'sucess',
        visible: true,
      }),
    );
    goToPage('PROFILE');
  };

  const onUpdateErrorHandler = () =>
    dispatch(
      showModalAlert({
        title: 'Error',
        text: `An error has occurred, please try again later`,
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );

  const onConnectionErrorHandler = () =>
    dispatch(
      showModalAlert({
        title: 'Error',
        text: "It seems that you're not connected to Internet",
        textButton: 'Ok',
        type: 'error',
        visible: true,
      }),
    );

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
          text={modalAlertState.text}
          textButton={modalAlertState.textButton}
          title={modalAlertState.title}
          type={modalAlertState.type}
          visible={modalAlertState.visible}
          onDismiss={() => dispatch(hideModalAlert())}
        />
      </SafeAreaView>
    </>
  );
};

export default SubscribePaymentsScreen;
