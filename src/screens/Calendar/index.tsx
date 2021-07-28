import * as React from 'react';
import { Spacing } from 'core/components';
import { DefaultIcon, Header, SafeArea } from 'components';
import { markedDates } from 'utils/calendar-data-mock';
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
    <SafeArea>
      <ScreenContainer>
        <Header title="Calendar" />
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
    </SafeArea>
  );
};

export default CalendarScreen;
