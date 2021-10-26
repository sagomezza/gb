/* eslint-disable no-console */
import React from 'react';
import { ScrollView, View } from 'react-native';
import Spacing from 'components/Spacing';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import { showModalAlert, hideModalAlert } from 'store/app/appActions';
import { ModalAlert } from 'components/ModalAlert';
import { getModalAlertState } from 'store/app/appSelectors';
import { GBScreenHeader } from 'components';
import { SafeAreaView } from 'screens/styles';
import { AddActivityContainer, AddActivityTitle, TextDate, TitleDate } from './styles';
import Form from './Form';
import { IFormValuesAddActivity } from './types';

const startOfDay = require('date-fns/startOfDay');
const format = require('date-fns/format');
const differenceInDays = require('date-fns/differenceInDays');

type DailyActivityParamList = {
  DailyActivity: {
    activityDate: Date;
    day?: Date;
    item?: object;
  };
};

type AddActivityScreenRouteProp = RouteProp<DailyActivityParamList, 'DailyActivity'>;

export interface IAddActivityScreenProps {
  route: AddActivityScreenRouteProp;
}

const AddActivityScreen: React.FC<IAddActivityScreenProps> = ({
  route,
}: IAddActivityScreenProps) => {
  const { activityDate, item } = route.params;

  const date = startOfDay(activityDate);
  const today = startOfDay(Date.now());
  const interval = differenceInDays(date, today);
  const alertModal = useSelector(getModalAlertState);
  const dispatch = useDispatch();

  const onSubmit = (data: IFormValuesAddActivity) => {
    console.log(data);
    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        onConnectionErrorHandler();
      } else {
        try {
          // mutation
          dispatch(
            showModalAlert({
              title: 'Success',
              text: 'New activity added to your agenda',
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

  const titleDate = () => {
    if (interval === 0) {
      return <TitleDate>Today</TitleDate>;
    }
    if (interval === 1) {
      return <TitleDate>Tomorrow</TitleDate>;
    }
    return <TitleDate>In {interval} days</TitleDate>;
  };

  return (
    <SafeAreaView>
      <GBScreenHeader title="Add Activity" />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <AddActivityContainer>
          <Spacing size={20} />
          <View>
            <TitleDate>{titleDate()}</TitleDate>
            <TextDate>{format(activityDate, 'eeee dd MMMM, yyyy')}</TextDate>
          </View>
          <Spacing />
          <View>
            <AddActivityTitle>Add Activity</AddActivityTitle>
            <Spacing />
            <Form item={item} onSubmit={onSubmit} />
          </View>
        </AddActivityContainer>
      </ScrollView>
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
  );
};

export default AddActivityScreen;
