/* eslint-disable no-console */
import * as React from 'react';
import { Text } from 'react-native';
import { Calendar, CalendarProps } from 'react-native-calendars';
import { navigator } from 'navigation';
import routes from 'config/routes';

import { Header } from './Calendar.styles';

interface ICalendarProps extends CalendarProps {
  activities: [];
  markedDates?: object;
}

const CalendarComponent: React.FC<ICalendarProps> = ({
  activities,
  markedDates,
}: ICalendarProps): React.ReactElement => {
  const { goToPage } = navigator();
  const currentDay = new Date();
  return (
    // @ts-ignore
    <Calendar
      enableSwipeMonths
      current={currentDay}
      disableArrowLeft={false}
      disableArrowRight={false}
      disableMonthChange={false}
      firstDay={0}
      hideArrows={false}
      hideDayNames={false}
      hideExtraDays={false}
      markedDates={markedDates}
      minDate={currentDay}
      monthFormat="MMMM"
      renderHeader={(date) => (
        <Header>
          <Text>{date.toString('MMMM')}</Text>
        </Header>
      )}
      showWeekNumbers={false}
      onDayPress={(day) => {
        console.log('day', day);
        goToPage(routes.AGENDA, { day, activities });
      }}
      onMonthChange={(month) => {
        console.log('month changed', month);
      }}
      onPressArrowLeft={(subtractMonth) => subtractMonth()}
      onPressArrowRight={(addMonth) => addMonth()}
    />
  );
};

export default CalendarComponent;
