import React from 'react';
import { ScrollView, View } from 'react-native';
import Spacing from 'components/Spacing';
import NetInfo from '@react-native-community/netinfo';
import { differenceInMinutes } from 'date-fns';
import { RouteProp } from '@react-navigation/native';
import { createActivityMutation, updateActivityMutation } from 'service/mutations';
import { hideModalAlert, showModalAlert } from 'store/app/appActions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from 'store/auth/authSelectors';
import { ModalAlert } from 'components/ModalAlert';
import { GBScreenHeader } from 'components';
import { SafeAreaView } from 'screens/styles';
import { getModalAlertState } from 'store/app/appSelectors';
import { navigator } from 'navigation';
import routes from 'config/routes';
import { Activity } from 'lib/api';
import { useQueryClient } from 'react-query';
import { IFormValuesAddActivity } from './types';
import Form from './Form';
import { AddActivityContainer, AddActivityTitle, TextDate, TitleDate } from './styles';

const startOfDay = require('date-fns/startOfDay');
const format = require('date-fns/format');
const differenceInDays = require('date-fns/differenceInDays');
const set = require('date-fns/set');

type DailyActivityParamList = {
  DailyActivity: {
    activityDate: Date;
    day?: string;
    item?: Activity;
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
  const dispatch = useDispatch();
  const userID = useSelector(getUserId);
  const modalAlertState = useSelector(getModalAlertState);
  const { goToPage } = navigator();
  const queryClient = useQueryClient();

  const { mutateAsync } = createActivityMutation();
  const updateMutateAsync = updateActivityMutation().mutateAsync;

  const onSubmit = async (data: IFormValuesAddActivity) => {
    const startHour = parseInt(data.startTime.split(':')[0], 10);
    const endHour = parseInt(data.endTime.split(':')[0], 10);
    const startMinutes = parseInt(data.startTime.split(':')[1], 10);
    const endMinutes = parseInt(data.endTime.split(':')[1], 10);

    const dateTimeStart = set(new Date(), {
      hours: startHour - 5,
      minutes: startMinutes,
      seconds: 0,
    });
    const dateTimeEnd = set(new Date(), { hours: endHour - 5, minutes: endMinutes, seconds: 0 });
    if (differenceInMinutes(dateTimeEnd, dateTimeStart) <= 0) {
      dispatch(
        showModalAlert({
          title: 'Error',
          text: `The start hour can't exceed the end hour`,
          textButton: 'Ok',
          type: 'error',
          visible: true,
        }),
      );
      return;
    }

    NetInfo.fetch().then(async (state) => {
      if (!state.isConnected) {
        onInternetConnectionError();
      } else {
        const input = {
          activityDate: format(new Date(date), 'yyyy-MM-dd'),
          activityOwnerId: userID,
          description: data.description,
          endsAt: dateTimeEnd,
          location: data.ubication,
          startAt: dateTimeStart,
          title: data.title,
        };
        try {
          if (!item) {
            await mutateAsync(
              { input },
              {
                onSuccess: () => {
                  queryClient.cancelQueries('ListActivitys');
                  dispatch(
                    showModalAlert({
                      title: 'Well Done',
                      text: 'Activity created successfully',
                      textButton: '',
                      type: 'success',
                      visible: true,
                    }),
                  );
                  goToPage(routes.CALENDAR);
                },
              },
            );
          } else {
            await updateMutateAsync(
              { input: { ...input, id: item.id } },
              {
                onSuccess: () => {
                  dispatch(
                    showModalAlert({
                      title: 'Well Done',
                      text: 'Activity updated successfully',
                      textButton: '',
                      type: 'success',
                      visible: true,
                    }),
                  );
                  goToPage(routes.CALENDAR);
                },
              },
            );
          }
        } catch (error) {
          onUpdateErrorHandler();
        }
      }
    });
  };

  const onUpdateErrorHandler = () => {
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

  const onInternetConnectionError = () => {
    dispatch(
      showModalAlert({
        title: 'Error',
        text: 'Internet connection not available',
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
    <>
      <SafeAreaView>
        <GBScreenHeader title={item?.title ? 'Update Activity' : 'Add Activity'} />
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <AddActivityContainer>
            <Spacing size={20} />
            <View>
              <TitleDate>{titleDate()}</TitleDate>
              <TextDate>{format(activityDate, 'eeee dd MMMM, yyyy')}</TextDate>
            </View>
            <Spacing />
            <View>
              <AddActivityTitle>
                {item?.title ? 'Update Activity' : 'Add Activity'}
              </AddActivityTitle>
              <Spacing />
              <Form item={item} onSubmit={onSubmit} />
            </View>
          </AddActivityContainer>
        </ScrollView>
      </SafeAreaView>
      <ModalAlert
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </>
  );
};

export default AddActivityScreen;
