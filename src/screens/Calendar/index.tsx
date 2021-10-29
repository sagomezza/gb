import * as React from 'react';
import { Spacing } from 'core/components';
import { ActivityIndicator, DefaultIcon, GBScreenHeader, SafeArea } from 'components';
import routes from 'config/routes';
import { Activity } from 'lib/api';
import { ModalAlert } from 'components/ModalAlert';
import { hideModalAlert } from 'store/app/appActions';
import { getModalAlertState } from 'store/app/appSelectors';
import { listActivitiesQuery } from 'service/queries';
import { getUserId } from 'store/auth/authSelectors';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { navigator } from 'navigation';
import { groupBy } from 'utils/groupBy';
import {
  CalendarContainer,
  Calendar,
  ScreenContainer,
  UpcommingPlansContainer,
  PlanContainer,
  Plan,
  Title,
  IndicatorContainer,
} from './Calendar.styles';

type IActivitiesQueryProps = {
  activities: Activity[];
};

const CalendarScreen = () => {
  const { goToPage } = navigator();
  const queryClient = useQueryClient();
  const userID = useSelector(getUserId);
  const [dataList, setDataList] = React.useState<Activity[]>(undefined);
  const [markedDatesList, setMarkedDatesList] = React.useState<object>(undefined);
  const modalAlertState = useSelector(getModalAlertState);
  const dispatch = useDispatch();

  const { data: activityList, isLoading } = listActivitiesQuery<IActivitiesQueryProps>(
    { filter: { activityOwnerId: { eq: userID } } },
    {
      refetchOnWindowFocus: true,
      // @ts-ignore
      select: (data) => ({
        activities: data?.listActivitys?.items ?? [],
      }),
    },
  );

  // React.useEffect(() => {
  //   refetch();
  // });

  React.useEffect(() => {
    let data = [...activityList?.activities];
    data = data?.slice(0, 3) ?? [];
    data = data?.sort((a, b) => a.activityDate.localeCompare(b.activityDate));
    let data2 = [...activityList?.activities];
    const markedDates = {};
    if (data) {
      data2 = groupBy(data, 'activityDate');
      const keys = Object.keys(data2);
      keys.forEach((key) => {
        markedDates[key] = {
          marked: true,
          dotColor: '#00a680',
          selectedColor: '#00a680',
        };
      });
    }
    setDataList(data);
    setMarkedDatesList(markedDates);
  }, [activityList]);

  useFocusEffect(
    React.useCallback(() => {
      queryClient.invalidateQueries('ListActivitys');
    }, [queryClient]),
  );

  const goToAgenda = (activity: Activity) => {
    goToPage(routes.AGENDA, {
      day: activity.activityDate,
      activities: activityList?.activities,
    });
  };

  if (isLoading) {
    return (
      <SafeArea>
        <ScreenContainer>
          <GBScreenHeader title={routes.CALENDAR} />
          <IndicatorContainer>
            <ActivityIndicator />
          </IndicatorContainer>
        </ScreenContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <GBScreenHeader title={routes.CALENDAR} />
      <ScreenContainer>
        <CalendarContainer>
          <Calendar activities={activityList?.activities ?? []} markedDates={markedDatesList} />
        </CalendarContainer>
        <UpcommingPlansContainer>
          <Title>Upcoming Plans</Title>
          <Spacing size={16} />
          {dataList?.map((activity: Activity) => (
            <PlanContainer key={activity.id}>
              <Plan onPress={() => goToAgenda(activity)}>{activity.title}</Plan>
              <DefaultIcon
                color="gray4"
                iconFamily="MaterialIcons"
                name="keyboard-arrow-right"
                size={24}
                onPress={() => goToAgenda(activity)}
              />
            </PlanContainer>
          ))}
        </UpcommingPlansContainer>
      </ScreenContainer>
      <ModalAlert
        hideModal={() => dispatch(hideModalAlert())}
        text={modalAlertState.text}
        textButton={modalAlertState.textButton}
        title={modalAlertState.title}
        type={modalAlertState.type}
        visible={modalAlertState.visible}
        onDismiss={() => dispatch(hideModalAlert())}
      />
    </SafeArea>
  );
};

export default CalendarScreen;
