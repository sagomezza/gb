import * as React from 'react';
import { Spacing } from 'core/components';
import { DefaultIcon, GBScreenHeader } from 'components';
import { markedDates } from 'utils/calendar-data-mock';
import routes from 'config/routes';
import { SafeAreaView } from 'screens/styles';
import {
  CalendarContainer,
  Calendar,
  ScreenContainer,
  UpcommingPlansContainer,
  PlanContainer,
  Plan,
  Title,
} from './Calendar.styles';

const CalendarScreen = () => {
  const goToAgenda = () => {};

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
          <PlanContainer>
            <Plan onPress={goToAgenda}>Workout with Gabby</Plan>
            <DefaultIcon
              color="gray4"
              iconFamily="MaterialIcons"
              name="keyboard-arrow-right"
              size={24}
              onPress={goToAgenda}
            />
          </PlanContainer>
          <PlanContainer>
            <Plan onPress={goToAgenda}>Yoga with Molly</Plan>
            <DefaultIcon
              color="gray4"
              iconFamily="MaterialIcons"
              name="keyboard-arrow-right"
              size={24}
              onPress={goToAgenda}
            />
          </PlanContainer>
          <PlanContainer>
            <Plan onPress={goToAgenda}>Train with Hunter</Plan>
            <DefaultIcon
              color="gray4"
              iconFamily="MaterialIcons"
              name="keyboard-arrow-right"
              size={24}
              onPress={goToAgenda}
            />
          </PlanContainer>
        </UpcommingPlansContainer>
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default CalendarScreen;
