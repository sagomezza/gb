import * as React from 'react';
import { Spacing } from 'core/components';
import { ActivityIndicator, DefaultIcon, GBScreenHeader, SafeArea } from 'components';
import { markedDates } from 'utils/calendar-data-mock';
import routes from 'config/routes';
import { Activity } from 'lib/api';
import { listActivitiesQuery } from 'service/queries';
import { getUserId } from 'store/auth/authSelectors';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
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
  acitivities: Activity[];
};

const CalendarScreen = () => {
  const goToAgenda = () => {};
  const queryClient = useQueryClient();
  const userID = useSelector(getUserId);
  const [dataList, setDataList] = React.useState<Activity[]>(undefined);

  const { data: activityList, isLoading } = listActivitiesQuery<IActivitiesQueryProps>(
    { filter: { activityOwnerId: { eq: userID } } },
    {
      refetchOnWindowFocus: false,
      // @ts-ignore
      select: (data) => ({
        bulletins: data?.listActivitys?.items ?? [],
      }),
    },
  );

  React.useEffect(() => {
    setDataList(activityList?.acitivities.slice(0, 4));
  }, [activityList]);

  useFocusEffect(
    React.useCallback(() => {
      queryClient.invalidateQueries('ListActivitys');
    }, [queryClient]),
  );

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
    <SafeAreaView>
      <GBScreenHeader title={routes.CALENDAR} />
      <ScreenContainer>
        <CalendarContainer>
          <Calendar markedDates={markedDates} />
        </CalendarContainer>
        <UpcommingPlansContainer>
          <Title>Upcoming Plans</Title>
          <Spacing size={16} />
          {dataList?.map((activity) => (
            <PlanContainer>
              <Plan onPress={goToAgenda}>{activity.title}</Plan>
              <DefaultIcon
                color="gray4"
                iconFamily="MaterialIcons"
                name="keyboard-arrow-right"
                size={24}
                onPress={goToAgenda}
              />
            </PlanContainer>
          ))}
        </UpcommingPlansContainer>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default CalendarScreen;
